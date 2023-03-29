import React, { FC, PropsWithChildren } from "react";
import s from "./Page.module.scss";
import Head from "../Head";

const Page: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Head />
    <div className={s.page}>{children}</div>
  </>
);

export default Page;
