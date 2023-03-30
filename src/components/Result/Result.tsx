import React, { DOMAttributes, FC } from "react";
import s from "./Result.module.scss";
import { Publication } from "@/types";
import Image from "next/image";
import previewArrow from "../../assets/preview-arrow.svg";

type Props = Pick<Publication, "id" | "title"> &
  Pick<DOMAttributes<HTMLDivElement>, "onMouseEnter" | "onMouseLeave"> & {
    hoveredId: string | null;
  };

const Result: FC<Props> = ({
  id,
  title,
  hoveredId,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={s.result}
      onMouseEnter={onMouseEnter}
      onMouseDownCapture={onMouseLeave}
      onClick={onMouseEnter}
    >
      <p>{title}</p>
      {hoveredId === id && <Image src={previewArrow} alt="preview arrow" />}
    </div>
  );
};

export default Result;
