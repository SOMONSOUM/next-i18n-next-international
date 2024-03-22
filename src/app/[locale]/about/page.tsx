"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/locales/client";
import { ArrowLeftCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function About() {
  const t = useI18n();
  const router = useRouter();
  return (
    <>
      <p>{t("about.title")}</p>
      <Button onClick={() => router.back()}>
        <ArrowLeftCircle className="me-2" /> Back
      </Button>
    </>
  );
}
