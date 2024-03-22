"use client";

import React from "react";
import { useChangeLocale } from "@/locales/client";
import { Button } from "../ui/button";
import { Languages } from "lucide-react";

type LangButtonProps = {
  locale: "en" | "km";
};

export const LangButton: React.FC<LangButtonProps> = ({ locale }) => {
  const changeLocale = useChangeLocale();
  const toggleLocale = () => {
    const newLocale = locale === "en" ? "km" : "en";
    changeLocale(newLocale);
  };

  return (
    <Button onClick={toggleLocale}>
      <Languages />
    </Button>
  );
};
