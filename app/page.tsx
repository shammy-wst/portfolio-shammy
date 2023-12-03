import MainComponent from "./components/MainComponent";
import Header from "./components/Header";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <main>
      <MusicPlayer />
      <Header />
      <MainComponent />
      
    </main>
  );
}
