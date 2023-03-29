// import { Inter } from "next/font/google";
import Page from "@/components/Page/Page";
import SearchInput from "@/components/SearchInput";

// TODO: Deal with font usage:
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Page>
      <SearchInput />
    </Page>
  );
}
