import GoogleVerification from "@/components/GoogleVerification/GoogleVerification";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Mehmet BACIK - Frontend Developer",
  description:
    "Mehmet Bacık, an experienced Frontend Developer. Visit his personal portfolio website to explore his projects, technical skills, and insights into his software development journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleVerification />
      </head>
      <body>
        <div className="flex">
          <div className="flex-1">{children}</div>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
