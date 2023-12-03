import Image from "next/image";
import MainComponent from "./components/MainComponent";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";

export default function Home() {
  return (
    <main>
      <Header />
      <MainComponent />
    </main>
  );
}
