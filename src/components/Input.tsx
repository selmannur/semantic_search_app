import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

interface Props {
  initialQuery?: string;
  filters?: Array<Record<string, string>>; // TODO: If we end up with filters, we can type this better
}

const Input: FC<Props> = ({ initialQuery = "", filters = [] }) => {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  return (
    <form
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

export default Input;
