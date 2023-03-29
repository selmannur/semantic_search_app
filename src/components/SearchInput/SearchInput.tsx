import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import s from './SearchInput.module.scss'

interface Props {
  initialQuery?: string;
  filters?: Array<Record<string, string>>; // TODO: If we end up with filters, we can type this better
}

const SearchInput: FC<Props> = ({ initialQuery = "", filters = [] }) => {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <form
      className={s.searchInput}
      onSubmit={(e) => {
        console.log("submitting");
        e.preventDefault();
        router.push({
          pathname: "/search",
          query: { q: query },
        });
      }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
