import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import s from "./SearchInput.module.scss";
import Image from "next/image";
import mag from "../../assets/mag.svg";

interface Props {
  initialQuery?: string;
}

const SearchInput: FC<Props> = ({ initialQuery = "" }) => {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <form
      className={s.searchInput}
      onSubmit={(e) => {
        e.preventDefault();
        router.push({
          pathname: "/search",
          query: { ...router.query, q: query },
        });
      }}
    >
      <input
        type="text"
        placeholder="Ask a question like you would ask to a colleague" // TODO: Maybe another placeholder?
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">
        <Image src={mag} alt="magnifier icon" />
      </button>
    </form>
  );
};

export default SearchInput;
