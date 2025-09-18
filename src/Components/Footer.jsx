import React from 'react'
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-4 bg-gray-100 text-center text-gray-600 mt-10">
      &copy; {new Date().getFullYear()} Steve Sonfack Kemdong. {t("Footer.Copyright")}
    </footer>
  )
}
