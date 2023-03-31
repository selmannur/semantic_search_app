import Page from "@/components/Page/Page";
import SearchInput from "@/components/SearchInput";
import s from "./Home.module.scss";

// TODO: Text confirmation
// Scrollbar visibility
// Loading indicator

export default function Home() {
  return (
    <Page>
      <div className={s.home}>
        <div className={s.content}>
          <h1>Semantic Search</h1>
          <h5>Search for articles using natural language</h5>
          <SearchInput />
        </div>
      </div>
    </Page>
  );
}
