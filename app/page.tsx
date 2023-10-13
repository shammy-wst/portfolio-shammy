import Header from "./components/Header";
import InformationBox from "./components/InformationBox";
import Videoloop from "./components/Videoloop";

export default function Home() {
  return (
    <div id="page__content">
      <Header />
      <div className="z-20 flex lg:flex-row gap-10 sm:flex-col">
        <InformationBox />
        <InformationBox />
      </div>
      
      <Videoloop />
    </div>
  )
}
