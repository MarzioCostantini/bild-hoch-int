import { createTranslator, useTranslations } from "next-intl";
import IchBinMarzio from "../components/IchBinMarzio";
import Tabs from "../components/ShowHideAbout";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageAbout.meta.title"),
    description: t("pageAbout.meta.description"),
  };
}

const AboutPage = () => {
  const t = useTranslations("pageAbout");

  return (
    <main>
      <IchBinMarzio />
      <Tabs
        details={t("details.detailsInfo")}
        infos={t("details.paarInfos")}
        reisentitle={t("details.reisen.title")}
        reisencontent={t("details.reisen.content")}
        naturtitle={t("details.natur.title")}
        naturcontent={t("details.natur.content")}
        zwilligetitle={t("details.zwillinge.title")}
        zwilligecontent={t("details.zwillinge.content")}
        programmierentitle={t("details.programmieren.title")}
        programmierencontent={t("details.programmieren.content")}
        geradetitle={t("details.gerade.title")}
        geradecontent={t("details.gerade.content")}
      />
    </main>
  );
};
export default AboutPage;
