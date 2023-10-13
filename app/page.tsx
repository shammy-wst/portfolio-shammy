import Header from "./components/Header";
import InformationBox from "./components/InformationBox";
import Videoloop from "./components/Videoloop";

export default function Home() {
  return (
    <div id="page__content">
      <Header />
      <InformationBox />
      <Videoloop />
    </div>
  )
}
