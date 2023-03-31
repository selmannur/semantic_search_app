import React, { FC, useEffect, useState } from "react";
import s from "./DateFilter.module.scss";
import { useRouter } from "next/router";

const DateFilter: FC = () => {
  const router = useRouter();

  return (
    <form className={s.dateFilter}>
      <select
        onChange={(e) => {
          e.preventDefault();
          router.push({
            pathname: "/search",
            query: { ...router.query, published_after: e.target.value },
          });
        }}
        className={s.select}
        name="publishedAfter"
        id="publishedAfter"
      >
        <option value="">Published after</option>
        <option value="2021-01-01">January 2021</option>
        <option value="2021-02-01">February 2021</option>
        <option value="2021-03-01">March 2021</option>
        <option value="2021-04-01">April 2021</option>
        <option value="2021-05-01">May 2021</option>
        <option value="2021-06-01">June 2021</option>
        <option value="2021-07-01">July 2021</option>
        <option value="2021-08-01">August 2021</option>
        <option value="2021-09-01">September 2021</option>
        <option value="2021-10-01">October 2021</option>
        <option value="2021-11-01">November 2021</option>
        <option value="2021-12-01">December 2021</option>
        <option value="2022-01-01">January 2022</option>
        <option value="2022-02-01">February 2022</option>
        <option value="2022-03-01">March 2022</option>
        <option value="2022-04-01">April 2022</option>
        <option value="2022-05-01">May 2022</option>
        <option value="2022-06-01">June 2022</option>
        <option value="2022-07-01">July 2022</option>
        <option value="2022-08-01">August 2022</option>
        <option value="2022-09-01">September 2022</option>
        <option value="2022-10-01">October 2022</option>
        <option value="2022-11-01">November 2022</option>
        <option value="2022-12-01">December 2022</option>
        <option value="2023-01-01">January 2023</option>
        <option value="2023-02-01">February 2023</option>
        <option value="2022-03-01">March 2023</option>
      </select>
    </form>
  );
};

export default DateFilter;
