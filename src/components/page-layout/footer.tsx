import Link from "next/link";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import * as React from "react";

import Star from "@/components/icons/star.svg";
import Translate from "@/components/icons/translate.svg";
import Twitter from "@/components/icons/twitter.svg";
import Logo from "~/public/logo.svg";

import { LanguageSelect } from "../poll/language-selector";

const Footer: React.VoidFunctionComponent = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div className="mt-16 bg-gradient-to-b from-gray-50/0 via-gray-50 to-gray-50 ">
      <div className="mx-auto max-w-7xl space-y-8 p-8 lg:flex lg:space-x-16 lg:space-y-0">
        <div className=" lg:w-2/6">
          <Logo className="w-32 text-slate-400" />
          <div className="mb-8 mt-4 text-slate-400">
            <p></p>
            <div>
              <Trans
                t={t}
                i18nKey="footerCredit"
                components={{
                  a: (
                    <a
                      className="font-normal leading-loose text-slate-400 underline hover:text-slate-800 hover:underline"
                      href="https://twitter.com/imlukevella"
                    />
                  ),
                }}
              />
              <p>
                Edits by{" "}
                <a
                  className="font-normal leading-loose text-slate-400 underline hover:text-slate-800 hover:underline"
                  href="https://aottr.dev"
                >
                  A.Ottr
                </a>
              </p>
            </div>
          </div>
          <div className="mb-8 flex items-center space-x-6">
            <a
              href="https://twitter.com/alexottr"
              className="text-sm text-slate-400 transition-colors hover:text-primary-500 hover:no-underline"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/aottr/rallly-cleaned"
              className="inline-flex h-8 items-center rounded-full bg-slate-100 pl-2 pr-3 text-sm text-slate-400 transition-colors hover:bg-primary-500 hover:text-white hover:no-underline focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 active:bg-primary-600"
            >
              <Star className="mr-2 inline-block w-5" />
              <span>{t("starOnGithub")}</span>
            </a>
          </div>
        </div>
        <div className="lg:w-2/6">
          <div className="mb-4 font-medium">{t("links")}</div>
          <ul className="space-y-2">
            <li>
              <a
                href="https://support.rallly.co"
                className="inline-block font-normal text-slate-400 hover:text-slate-800 hover:no-underline"
              >
                {t("support")}
              </a>
            </li>
            <li>
              <Link href="/privacy-policy">
                <a className="inline-block font-normal text-slate-400 hover:text-slate-800 hover:no-underline">
                  {t("privacyPolicy")}
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:w-2/6">
          <div className="mb-4 font-medium">{t("language")}</div>
          <LanguageSelect
            className="mb-4 w-full"
            onChange={(locale) => {
              router.push(router.asPath, router.asPath, { locale });
            }}
          />
          <a
            href="https://github.com/lukevella/rallly/wiki/Guide-for-translators"
            className="inline-flex items-center rounded-md border px-3 py-2 text-xs text-slate-500"
          >
            <Translate className="mr-2 h-5 w-5" />
            {t("volunteerTranslator")} &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
