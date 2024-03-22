"use client";

import { LangButton } from "@/components/LangButton/LangButton";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/locales/client";
import { LocaleParams } from "@/types";
import { ArrowRightCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default async function Home({ params: { locale } }: LocaleParams) {
  const t = useI18n();
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.push("/about")}>
        Go <ArrowRightCircle />
      </Button>
      <p>{t("home.hello")}</p>
      <p>{t("home.hello.world")}</p>

      <p>{t("home.welcome", { name: "សុខ ដារ៉ា" })}</p>
      <p>{t("home.welcome", { name: <strong>សុខ ដារ៉ា</strong> })}</p>
      <LangButton locale={locale} />
    </div>
  );
}
