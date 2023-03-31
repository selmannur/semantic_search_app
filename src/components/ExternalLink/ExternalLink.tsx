import React, { FC } from "react";
import s from "./ExternalLink.module.scss";

type Props = {
  href: string;
  text: string;
};
const ExternalLink: FC<Props> = ({ href, text }) => {
  return (
    <a className={s.link} target="_blank" href={href} rel="noopener noreferrer">
      {text}
    </a>
  );
};

export default ExternalLink;
