import React, { DOMAttributes, FC } from "react";
import s from "./Result.module.scss";
import { Publication } from "@/types";
import Image from "next/image";
import previewArrow from "../../assets/preview-arrow.svg";
import { parsePublicationDate } from "@/utils/publication";
import { isNumber } from "lodash";
import { getClasses } from "@/utils/getClasses";

type Props = Pick<DOMAttributes<HTMLDivElement>, "onMouseEnter"> & {
  publication: Publication;
  hoveredId: string | null;
};

const Result: FC<Props> = ({ publication, hoveredId, onMouseEnter }) => {
  const { publicationUid, date, title, journal, reads, citations } =
    publication;
  const active = hoveredId === publicationUid;
  return (
    <div
      className={s.result}
      onMouseEnter={onMouseEnter}
      onClick={onMouseEnter}
    >
      <div className={active ? s.activeContent : s.passiveContent}>
        {(date || journal) && (
          <p className={s.meta}>
            {date && <span>{parsePublicationDate(date)}</span>}
            {journal && <span>{journal}</span>}
          </p>
        )}
        <p className={s.title}>{title}</p>
        <p className={s.stats}>
          {isNumber(reads) && <span>{reads} Reads</span>}
          {isNumber(reads) && <span className={s.statSeperator}>·</span>}
          {isNumber(citations) && <span>{citations} Citation</span>}
        </p>
        <Image
          src={previewArrow}
          alt="preview arrow"
          className={getClasses(s.arrow, active ? s.activeArrow : "")}
        />
      </div>
    </div>
  );
};

export default Result;
