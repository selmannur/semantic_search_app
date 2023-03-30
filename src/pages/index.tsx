import Page from "@/components/Page/Page";
import SearchInput from "@/components/SearchInput";
import s from "./Home.module.scss";

export default function Home() {
  return (
    <Page>
      <div className={s.home}>
        <div className={s.content}>
          <h1>semantic search</h1>
          <h5>Some introduction into what you can do with it.</h5>
          <SearchInput />
        </div>
      </div>
    </Page>
  );
}
