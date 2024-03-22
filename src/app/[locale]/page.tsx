import { LangButton } from "@/components/LangButton/LangButton";
import { getI18n, getScopedI18n } from "@/locales/server";
import { LocaleParams } from "@/types";

export default async function Home({ params: { locale } }: LocaleParams) {
  const t = await getI18n();
  const scopedT = await getScopedI18n("home.hello");
  const aboutT = await getScopedI18n("about");

  return (
    <div>
      <p>{t("home.hello")}</p>
      <p>{t("home.hello.world")}</p>
      <p>{scopedT("world")}</p>
      <p>{aboutT("title")}</p>

      <p>{t("home.welcome", { name: "សុខ ដារ៉ា" })}</p>
      <p>{t("home.welcome", { name: <strong>សុខ ដារ៉ា</strong> })}</p>
      <LangButton locale={locale} />
    </div>
  );
}
