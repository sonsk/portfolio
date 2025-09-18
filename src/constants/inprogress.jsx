import { useTranslation } from "react-i18next";

export const inProgress = (t) => [
  {
    name: t("InProgress.Coursera"),
    img: "/images/google.png",
    desc: t("InProgress.CourseraDesc"),
    url: "",
  },
  {
    name: t("InProgress.DESS"),
    img: "/images/uqo.png",
    desc: t("InProgress.DESSDesc"),
    url: "#",
  },
  {
    name: t("InProgress.Amazon"),
    img: "/images/amazon.png",
    desc: t("InProgress.AmazonDesc"),
    url: "#",
  },
];