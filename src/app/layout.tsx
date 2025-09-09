import "~/styles/globals.css";
import { ThemeProvider } from "~/components/layouts/theme-provider";
import { BackgroundVideo } from "~/components/ui/background-video";
import { SplashCursor } from "~/components/ui/splash-cursor";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shimamoo",
  description: "hi",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const signifier = localFont({
  src: [
    {
      path: "../../public/fonts/signifier-web-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/signifier-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-signifier",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${signifier.variable}`}
      suppressHydrationWarning
    >
      <body>
        <SplashCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundVideo />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
