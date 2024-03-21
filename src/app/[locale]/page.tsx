import { Button } from "@/components/ui/button";
import { getI18n, getScopedI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();
  const scopedT = await getScopedI18n("home.hello");

  return (
    <div>
      <p>{t("home.hello")}</p>

      {/* Both are equivalent: */}
      <p>{t("home.hello.world")}</p>
      <p>{scopedT("world")}</p>

      <p>{t("home.welcome", { name: "សុខ ដារ៉ា" })}</p>
      <p>{t("home.welcome", { name: <strong>សុខ ដារ៉ា</strong> })}</p>
      <Button>{t("home.login_page.save_btn")}</Button>
    </div>
  );
}
