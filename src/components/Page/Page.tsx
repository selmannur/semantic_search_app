import React, { FC, PropsWithChildren } from "react";
import s from "./Page.module.scss";
import Head from "../Head";
import Banner from "../Banner";

const Page: FC<PropsWithChildren> = ({ children }) => (
  <div className={s.page}>
    <Head />
    <Banner />
    {children}
  </div>
);

export default Page;
