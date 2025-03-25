import MobileFooter from "./MobileFooter";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/react";
import GitHubRelease from "@/types/github";
import { ScrollShadow } from "@nextui-org/react";

// This function will be called at build time
async function getGithubReleases() {
  try {
    const res = await fetch(
      "https://api.github.com/repos/LunCoSim/lunco-sim/releases",
      { next: { revalidate: 86400 } } // Cache for 24 hours
    );
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch GitHub releases:", error);
    return []; // Return empty array as fallback
  }
}

export default async function SiteFooter() {
  // Fetch GitHub releases at build time
  const githubReleases: GitHubRelease[] = await getGithubReleases();

  return (
    <main className="border-t mt-6 backdrop-blur-sm">
      <section
        id="footer"
        className="container mx-auto hidden p-4 md:p-6 lg:p-10 lg:grid grid-cols-1 lg:grid-cols-4 gap-6"
      >
        <div className="flex flex-col items-start ml-10">
          <div className="flex justify-start items-center gap-3 mb-3">
            <Icons.logo />
            <h1 className="font-heading text-center">LunCo</h1>
          </div>
          <p className="max-w-sm text-sm">{siteConfig.description}</p>
        </div>
        <div id="support" className="flex flex-col items-start ml-10">
          <h1 className="font-heading primary-gradient mb-3">Socials</h1>
          {Object.keys(siteConfig.links).map((key) => {
            const typedKey = key as keyof typeof siteConfig.links;
            const capitalizedKey =
              typedKey.charAt(0).toUpperCase() + typedKey.slice(1);

            return (
              <Link
                key={typedKey}
                href={siteConfig.links[typedKey]}
                isExternal
                showAnchorIcon
              >
                {capitalizedKey}
              </Link>
            );
          })}
        </div>
        <div id="support" className="flex flex-col items-start ml-10">
          <h1 className="font-heading primary-gradient mb-3">Releases</h1>
          <ScrollShadow hideScrollBar className="h-[150px]">
            <div className="flex-col">
              <Link
                href="https://difint.itch.io/lunco"
                isExternal
                showAnchorIcon
              >
                Download on Itch.io
              </Link>
              {githubReleases.map((release, key) => {
                return (
                  <Link
                    key={key}
                    href={release.html_url}
                    isExternal
                    showAnchorIcon
                    className="flex"
                  >
                    {release.name}
                  </Link>
                );
              })}
            </div>
          </ScrollShadow>
        </div>
        <div id="support" className="flex flex-col items-start ml-10">
          <h1 className="font-heading primary-gradient mb-3">Support us</h1>
          <Link href="https://giveth.io/project/lunco-everyone-can-do-space" isExternal showAnchorIcon>
            Giveth
          </Link>
          
        </div>
      </section>
      <div className="block lg:hidden">
        <MobileFooter />
      </div>
    </main>
  );
}
