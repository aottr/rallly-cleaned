import { useTranslation } from "next-i18next";
import { NextSeo } from "next-seo";
import React from "react";

import Hero from "./home/hero";
import PageLayout from "./page-layout";

const Home: React.VoidFunctionComponent = () => {
  const { t } = useTranslation("homepage");
  return (
    <PageLayout>
      <NextSeo
        title={t("metaTitle")}
        description={t("metaDescription")}
        twitter={{
          handle: "@alexottr",
          cardType: "summary_large_image",
        }}
      />
      <Hero />
    </PageLayout>
  );
};

export default Home;
