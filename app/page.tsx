import Header from "./components/Header";
import InformationBox from "./components/InformationBox";
import Videoloop from "./components/Videoloop";


export default function Home() {
  return (
    <div id="page__content">
      <Header />
      <InformationBox
        title="Main__Title"
        projectTitle="Project__Title"
        description="Description__Content"
        date="Default__Date"
      />
      <Videoloop />
    </div>
  );
}
