import { Open_Sans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/nextui-provider";
import StarCanvas from "@/components/three-scenes/star-canvas";
import GoogleTag from '@/components/GoogleTag';
import { marketingConfig } from "@/config/marketing";
import { MainNav } from "@/components/navbar/main-nav";
import Link from "next/link";
import { Icons } from "@/components/icons";
import MobileFooter from "@/components/footer/MobileFooter";

import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

const fontSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = {
  title: {
    default: `Simulator | ${siteConfig.name}`,
    template: `%s | Simulator | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [siteConfig.creator],
  creator: siteConfig.creator.name, 
  openGraph: {
    title: `Simulator | ${siteConfig.name}`,
    description: siteConfig.description,
    url: `${siteConfig.url}/simulator`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    site: "@LunCoSim",
    title: `Simulator | ${siteConfig.name}`,
    description: siteConfig.description,
    image: {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    },
  },

  // Discord metadata
  discord: {
    title: `Simulator | ${siteConfig.name}`,
    type: "website",
    url: `${siteConfig.url}/simulator`,
    description: siteConfig.description,
    image: {
      url: siteConfig.ogImage,
      width: 1200,
      height: 600,
      alt: siteConfig.name,
    },
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default async function SimulatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <GoogleTag />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <div className="main">
          <StarCanvas />
          <div className="gradient" />
        </div>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <header className="z-40 mx-2 lg:mx-0">
              <div className="flex h-15 lg:h-15 items-center justify-between lg:justify-evenly py-6 sticky top-0 border-none border-gradient border-gradient-primary only-bottom mb-1 backdrop-blur-sm">
                <Link href="/simulator" className="hidden items-center space-x-2 md:flex">
                  <Icons.logo />
                  <span className="hidden font-bold sm:inline-block">
                    {siteConfig.name} Simulator
                  </span>
                </Link>
                <MainNav items={marketingConfig.mainNav.map(item => ({
                  ...item,
                  href: item.href.startsWith('/') 
                    ? item.href === '/' 
                      ? '/simulator' 
                      : `/simulator${item.href}`
                    : `/simulator#${item.href.substring(2)}`
                }))} />
                <div className="flex items-center gap-2">
                  <Link href="/" className="text-sm text-blue-500 hover:underline">
                    Main Site
                  </Link>
                  <a href="https://alpha.lunco.space" target="_blank" className="shine shine-anim border border-primary bg-transparent btn-gradient rounded-lg px-2 py-1 text-sm">Try LunCo</a>
                </div>
              </div>
            </header>
            <main className="flex-1 app overflow-x-hidden">{children}</main>
            <footer className="border-t mt-6 backdrop-blur-sm">
              <div className="container mx-auto py-4 px-5">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <Icons.logo className="mr-2" />
                    <span className="font-bold">{siteConfig.name} Simulator</span>
                  </div>
                  <div className="flex items-center">
                    <Link href="/" className="text-blue-500 hover:underline mr-4">
                      Back to Main Site
                    </Link>
                    <p>© {new Date().getFullYear()} {siteConfig.name}</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
        <script 
          async 
          src="https://eocampaign1.com/form/36b79094-fbf5-11ef-8268-35ea1b356baf.js" 
          data-form="36b79094-fbf5-11ef-8268-35ea1b356baf"
        />
      </body>
    </html>
  );
} 