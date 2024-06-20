import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
// import Home from "@/scenes/home"
// import Dephonia from "@/scenes/dephonia"
// import Mission from "@/scenes/mission"
import NavBar from "@/scenes/navbar";
// import Footer from "@/scenes/footer"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-90">
      {<NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      /> }
      {/*<Home setSelectedPage={setSelectedPage} />*/}
      {/*<Mission setSelectedPage={setSelectedPage} />*/}
      {/*<Dephonia setSelectedPage={setSelectedPage} />*/}
      {/* <TryItOut setSelectedPage={setSelectedPage} />*/}
      {/* <ContactUs setSelectedPage={setSelectedPage} />*/}
      {/* <Footer setSelectedPage={setSelectedPage} />*/}
    </div>
  );
}

export default App
