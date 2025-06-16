import React from "react";
import { useLanguage } from "../../LanguageContext";
import EnglishHeader from "./EnglishHeader";
import ArabicHeader from "./ArabicHeader";

export default function HeaderContent() {
  const { language } = useLanguage();

  return <>{language === "en" ? <EnglishHeader /> : <ArabicHeader />}</>;
}
