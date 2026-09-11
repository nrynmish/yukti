import { prisma } from '../config/prisma.js';
import { env } from '../config/env.js';
import cron from 'node-cron';

/**
 * Deletes OTPVerification rows that are older than the retention window.
 * Called on a schedule (default: every 5 minutes).
 */
export async function cleanupOldOtps(): Promise<void> {
  const retentionMinutes = Number(env.OTP_CLEANUP_RETENTION_MINUTES ?? 20);
  const cutoff = new Date(Date.now() - retentionMinutes * 60 * 1000);

  const result = await prisma.otpVerification.deleteMany({
    where: {
      OR: [
        // 1️⃣ Expired OTPs (never consumed)
        { expiresAt: { lt: cutoff }, consumedAt: null },
        // 2️⃣ Consumed OTPs (used successfully or exhausted attempts)
        { consumedAt: { lt: cutoff } },
      ],
    },
  });

  // Optional: log for observability
  if (result.count > 0) {
    console.info(
      `[OTP Cleanup] Deleted ${result.count} OTP rows older than ${retentionMinutes} min`
    );
  }
}

/**
 * Starts the cron job. Call this once when the server boots.
 */
export function startOtpCleanupJob(): void {
  // Runs every 5 minutes; adjust the schedule if you want more/less frequent runs.
  cron.schedule('*/5 * * * *', () => {
    console.info('[OTP Cleanup] Running scheduled cleanup…');
    cleanupOldOtps().catch((err) => {
      console.error('[OTP Cleanup] Error during cleanup:', err);
    });
  });

  console.info('[OTP Cleanup] Scheduled job started (runs every 5 minutes).');
}
