import Header from "./components/Header";
import InformationBox from "./components/InformationBox";
import Videoloop from "./components/Videoloop";

export default function Home() {
  return (
    <div id="page__content">
      <Header />
      <InformationBox
        title="Projects"
        projectTitle="FlixHive"
        description="Discover the new face of our Netflix clone: a sleek design that blends seamlessly with the latest trends, using NextJS, Firebase and TailwindCSS."
        date="Feb. 2023"
        projectTitle2="Greenly"
        description2="I've overhauled Greenly's product page completely using Figma. The redesigned prototype is a sleek and user-friendly upgrade, promising a more engaging and efficient browsing experience for our customers. This revamp underscores our commitment to cutting-edge design and technology in e-commerce."
        date2="August 2023"
        projectTitle3="Mission RGPD"
        description3="I've been working on a new project to help companies comply with the GDPR. I've completely redesigned and integrated Mission RGPD's website using native HTML and CSS, resulting in a polished and efficient user experience."
        date3="June 2023"
        projectTitle4="Dashblade"
        description4="I've meticulously crafted Dashblade, a cryptocurrency mobile app, from scratch using Figma. Through a comprehensive prototyping process, I've focused on reliability and speed to ensure a seamless user experience.
        "
        date4="March 2023"
      />
      <Videoloop />
    </div>
  );
}
