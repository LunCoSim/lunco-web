import { siteConfig } from "@/config/site";
import { Icons } from "../icons";
import Link from "next/link";

interface MobileFooterProps {
  simulatorMode?: boolean;
}

const MobileFooter = ({ simulatorMode = false }: MobileFooterProps) => {
  return (
    <footer className="backdrop-blur-sm">
      <div className="bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row s">
          <p className="text-sm text-center sm:text-left flex flex-row justify-center">
            © {`${new Date().getFullYear()} `},
            {simulatorMode ? (
              <>
                <Link href="/simulator" className="ml-1 p-0">
                  {siteConfig.name} Simulator
                </Link>
                <Link href="/" className="ml-2 text-blue-500 hover:underline">
                  (Main Site)
                </Link>
              </>
            ) : (
              <Link href="/" className="ml-1 p-0">
                {siteConfig.name}
              </Link>
            )}
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a
              className="text-gray-400"
              href={siteConfig.links.github}
              target="_blank"
            >
              <Icons.gitHub width={20} height={20} className="transition ease-in-out duration-100 hover:scale-110" />
            </a>
            <a
              className="ml-3 text-gray-400"
              href={siteConfig.links.twitter}
              target="_blank"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="fill-current hover:fill-blue-400 transition ease-in-out duration-100 hover:scale-110 w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-400"
              href={siteConfig.links.youtube}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current hover:fill-red-500 transition ease-in-out duration-100 hover:scale-110 w-5 h-5"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              className="ml-3 text-gray-400"
              href={siteConfig.links.linkedin}
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="fill-current hover:fill-blue-500 transition ease-in-out duration-100 hover:scale-110 w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
