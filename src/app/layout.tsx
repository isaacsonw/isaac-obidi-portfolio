import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

// High-contrast editorial serif for display type.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"]
});

const description = `${profile.role} (${profile.focus}) based in ${profile.location}. ${profile.standfirst}`;

export const metadata: Metadata = {
  title: {
    default: `${profile.fullName} — ${profile.role}`,
    template: `%s — ${profile.name}`
  },
  description,
  authors: [{ name: profile.fullName }],
  keywords: [
    "Frontend Engineer",
    "Fintech",
    "React",
    "Next.js",
    "TypeScript",
    "KYC",
    "Payments",
    "Lagos",
    profile.fullName
  ],
  openGraph: {
    type: "website",
    title: `${profile.fullName} — ${profile.role}`,
    description,
    siteName: `${profile.name} · Portfolio`
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.fullName} — ${profile.role}`,
    description
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" }
  ]
};

// Applies the persisted/system theme before paint to prevent a flash of the wrong theme.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className='flex min-h-full flex-col' suppressHydrationWarning>
        <a
          href='#main'
          className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background'>
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
