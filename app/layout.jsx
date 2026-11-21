import "./globals.css";

export const metadata = {
  title: {
    default: "Saurav Kunwar — Full-stack Software Developer",
    template: "%s — Saurav Kunwar",
  },
  description:
    "Portfolio of Saurav Kunwar, a full-stack software developer building dependable web products with Next.js, TypeScript, Firebase, and Stripe.",
  authors: [{ name: "Saurav Kunwar" }],
  creator: "Saurav Kunwar",
  openGraph: {
    title: "Saurav Kunwar — Full-stack Software Developer",
    description:
      "Full-stack developer building production web applications across product interfaces, backend workflows, payments, and integrations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurav Kunwar — Full-stack Software Developer",
    description:
      "Full-stack developer building production web applications across product interfaces, backend workflows, payments, and integrations.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
