import { createFileRoute } from "@tanstack/react-router";
import { AuthPage } from "../components/YuktiSite";
export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register Your Team | YUKTI 2026" },
      {
        name: "description",
        content: "Register your team for the YUKTI 2026 Rashtriya Innovation Challenge.",
      },
      { property: "og:title", content: "Register Your Team | YUKTI 2026" },
      {
        property: "og:description",
        content: "Begin your team's 100-day innovation journey with DTU.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <AuthPage mode="register" />,
});
