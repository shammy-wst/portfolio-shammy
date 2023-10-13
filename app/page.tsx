import Header from "./components/Header";
import InformationBox from "./components/InformationBox";
import Videoloop from "./components/Videoloop";

export default function Home() {
  return (
    <div id="page__content">
      <Header />
      <div className="z-20 flex flex-row gap-80">
        <InformationBox />
        <InformationBox />
      </div>
      
      <Videoloop />
    </div>
  )
}
