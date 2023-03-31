import React, { FC } from "react";
import s from "./Badge.module.scss";
import { getClasses } from "@/utils/getClasses";

interface Props {
  text: string;
  classes?: string;
}
const Badge: FC<Props> = ({ text, classes = "" }) => {
  return <div className={getClasses(s.badge, classes)}>{text}</div>;
};

export default Badge;
