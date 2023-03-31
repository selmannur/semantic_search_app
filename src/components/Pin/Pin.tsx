import React, { FC, PropsWithChildren } from "react";
import s from "./Pin.module.scss";
import { getClasses } from "@/utils/getClasses";


// TODO: Make pin reflect score better?
type Props = {
  classes?: string;
};
const Pin: FC<PropsWithChildren<Props>> = ({ children, classes = "" }) => {
  return <div className={getClasses(s.pin, classes)}>{children}</div>;
};

export default Pin;
