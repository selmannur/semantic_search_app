import Page from "@/components/Page/Page";
import SearchInput from "@/components/SearchInput";
import s from "./Home.module.scss";


// TODO: Text confirmation
// Updated results UI
// Empty state
// Scrollbar visibility
// Loading indicator
// Journal type badge

export default function Home() {
  return (
    <Page>
      <div className={s.home}>
        <div className={s.content}>
          <h1>Semantic Search</h1>
          <h5>
            Our AI powered engine allows you to search through all the science
            in ResearchGate's database using a natural language. Ask a question
            like you would ask to a colleague.
          </h5>
          <SearchInput />
        </div>
      </div>
    </Page>
  );
}
