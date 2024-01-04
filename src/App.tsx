import Header from "./components/Header";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

function App() {
  return (
    <div className="">
      <div className="lending-page-bg"></div>
      <div className="header-bg1"></div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}

export default App;
