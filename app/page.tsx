import { getTvShows, getAllTitles } from "../db/queries/select";
import { MainView } from "../components/MainView";
import { NavBar } from "../components/Navbar";
import { ItemProvider } from "@/components/ItemContext";
import Hero from '@/components/Hero'

export default async function Home() {
  let result;
  result = await getAllTitles();

  return (
    <ItemProvider initialItems={result}>
      <div>
        <Hero result = {result} />
        {/* <NavBar />
        <MainView result = {result} /> */}
      </div>
    </ItemProvider>
    
  );
}
