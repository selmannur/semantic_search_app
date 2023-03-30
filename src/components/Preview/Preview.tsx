import React, { FC } from "react";
import s from "./Preview.module.scss";
import { Publication } from "@/types";

interface Props {
  publication: Publication | null;
}
const Preview: FC<Props> = ({ publication }) => {
  if (!publication) return null;

  const { title, abstract } = publication;

  //   TODO: Implement proper UI
  return (
    <div className={s.preview}>
      <h1>{title}</h1>
      <p>{abstract}</p>
    </div>
  );
};

export default Preview;
