import type { Metadata } from "next";
import ClientProviders from "./components/ClientProviders";
import "./globals.css";


export const metadata: Metadata = {
  title: "Drona Raj Gyawali | Software Engineer",
  description: "CS Undergrad '28 | GSOC'26 @GreedyBear Project | Building threat intel APIs, Agentic pipelines, and production-grade systems.",
  keywords: ["Software Engineer", "Backend Engineer", "Open Source", "Python", "Node.js", "System Design", "Drona Raj Gyawali"],
  authors: [{ name: "Drona Raj Gyawali" }],
  openGraph: {
    title: "Drona Raj Gyawali — Backend Engineer",
    description: "Software Engineer | CS Undergrad '28 | GSOC'26 @GreedyBear Project",
    type: "website",
    images: ["https://avatars.githubusercontent.com/u/170401554?v=4"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drona Raj Gyawali — Backend Engineer",
    description: "Software Engineer | CS Undergrad '28 | GSOC'26 @GreedyBear Project",
    images: ["https://avatars.githubusercontent.com/u/170401554?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://avatars.githubusercontent.com/u/170401554?v=4" />
      </head>
      <body className="min-h-screen antialiased">
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}