import React, { FC } from "react";
import s from "./Badge.module.scss";
import { getClasses } from "@/utils/getClasses";

type BagdeType = "badge" | "pin";
interface Props {
  text: string;
  type?: BagdeType;
}
const Badge: FC<Props> = ({ text, type = "badge" }) => {
  return (
    <div className={getClasses(s.badge, type === "pin" ? s.pin : "")}>
      {text}
    </div>
  );
};

export default Badge;
