import { createTranslator } from "next-intl";
import FaqAll from "../components/FaqAll";

export async function generateMetadata({ params: { locale } }) {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  const t = createTranslator({ locale, messages });

  return {
    title: t("pageFaq.meta.title"),
    description: t("pageFaq.meta.description"),
  };
}

const Faq = () => {
  return (
    <main>
      <FaqAll />
    </main>
  );
};

export default Faq;
