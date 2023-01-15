import clsx from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import * as React from "react";
import { createBreakpoint } from "react-use";

import DotsVertical from "@/components/icons/dots-vertical.svg";
import Github from "@/components/icons/github.svg";
import Logo from "~/public/logo.svg";

import Footer from "./page-layout/footer";

const Popover = dynamic(() => import("./popover"), { ssr: false });
export interface PageLayoutProps {
  children?: React.ReactNode;
}

const useBreakpoint = createBreakpoint({ sm: 640, md: 768, lg: 1024 });

const Menu: React.VoidFunctionComponent<{ className: string }> = ({
  className,
}) => {
  const { pathname } = useRouter();
  const { t } = useTranslation("common");
  const th = useTranslation("homepage");
  return (
    <nav className={className}>
      <Link href="/new">
        <a
          className={clsx(
            "text-gray-400 transition-colors hover:text-primary-500 hover:no-underline hover:underline-offset-2",
            {
              "pointer-events-none font-bold text-gray-600":
                pathname === "/new",
            },
          )}
        >
          {th.t("new")}
        </a>
      </Link>
      <Link href="/">
        <a
          className={clsx(
            "text-gray-400 transition-colors hover:text-primary-500 hover:no-underline hover:underline-offset-2",
            {
              "pointer-events-none font-bold text-gray-600":
                pathname === "/home",
            },
          )}
        >
          {t("home")}
        </a>
      </Link>
      <Link href="https://github.com/aottr/rallly-cleaned">
        <a className="text-gray-400 transition-colors hover:text-primary-500 hover:no-underline hover:underline-offset-2">
          <Github className="w-6" />
        </a>
      </Link>
    </nav>
  );
};

const PageLayout: React.VoidFunctionComponent<PageLayoutProps> = ({
  children,
}) => {
  const breakpoint = useBreakpoint();
  return (
    <div className="bg-pattern min-h-full overflow-x-hidden">
      <div className="mx-auto flex max-w-7xl items-center py-8 px-8">
        <div className="grow">
          <div className="relative inline-block">
            <Link href="/">
              <a>
                <Logo className="w-40 text-primary-500" alt="Rallly" />
              </a>
            </Link>
          </div>
        </div>
        <Menu className="hidden items-center space-x-8 md:flex" />
        {breakpoint === "sm" ? (
          <Popover
            placement="left-start"
            trigger={
              <button className="text-gray-400 transition-colors hover:text-primary-500 hover:no-underline hover:underline-offset-2">
                <DotsVertical className="w-5" />
              </button>
            }
          >
            <Menu className="flex flex-col space-y-2" />
          </Popover>
        ) : null}
      </div>
      <div className="md:min-h-[calc(100vh-460px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
