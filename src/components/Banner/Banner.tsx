import React from "react";
import s from "./Banner.module.scss";
import Image from "next/image";
import logo from "../../assets/rg-text-logo.svg";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();

  return (
    <div className={s.banner}>
      <Image
        src={logo}
        alt="ResearchGate logo"
        onClick={() => router.push({ pathname: "/", query: {} })}
      />
    </div>
  );
};

export default Banner;
