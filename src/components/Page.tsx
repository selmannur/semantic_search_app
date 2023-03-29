import React, { FC, PropsWithChildren } from "react";
import Head from "./Head";
import s from "@styles/Page.module.scss";

const Page: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Head />
    <div className={s.page}>{children}</div>
  </>
);

export default Page;
