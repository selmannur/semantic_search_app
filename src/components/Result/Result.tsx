import React, { DOMAttributes, FC } from "react";
import s from "./Result.module.scss";
import { Publication } from "@/types";
import Image from "next/image";
import previewArrow from "../../assets/preview-arrow.svg";

type Props = Pick<Publication, "publicationUid" | "title"> &
  Pick<DOMAttributes<HTMLDivElement>, "onMouseEnter"> & {
    hoveredId: string | null;
  };

const Result: FC<Props> = ({
  publicationUid,
  title,
  hoveredId,
  onMouseEnter,
}) => {
  return (
    <div
      className={s.result}
      onMouseEnter={onMouseEnter}
      onClick={onMouseEnter}
    >
      <p>{title}</p>
      {hoveredId === publicationUid && (
        <Image src={previewArrow} alt="preview arrow" />
      )}
    </div>
  );
};

export default Result;
