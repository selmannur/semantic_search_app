import React, { FC } from "react";
import s from "./Preview.module.scss";
import { Publication } from "@/types";
import { parseISO, format } from "date-fns";

interface Props {
  publication: Publication | null;
}
const Preview: FC<Props> = ({ publication }) => {
  if (!publication) return null;

  const { title, abstract, date } = publication;
  const formattedDate = format(parseISO(date), "MMMM yyyy");

  //   TODO: Implement proper UI
  return (
    <div className={s.preview}>
      <p className={s.date}>{formattedDate}</p>
      <h1 className={s.title}>{title}</h1>
      <p>{abstract}</p>
    </div>
  );
};

export default Preview;
