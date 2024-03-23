import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
// import landingPage from "@/scenes/landingPage"
// import navBar from "@/scenes/navBar"
// import keyBenefits from "@/scenes/keyBenefits"
import ProblemStatement from "@/scenes/problemStatement"
// import footer from "@/scenes/footer"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.landingPage
  );
  // const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setIsTopOfPage(true);
  //       setSelectedPage(SelectedPage.landingPage);
  //     }
  //     if (window.scrollY !== 0) setIsTopOfPage(false);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="app bg-gray-20">
      {/* <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      /> */}
      {/* <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} /> */}
      <ProblemStatement setSelectedPage={setSelectedPage} />
      {/* <ContactUs setSelectedPage={setSelectedPage} />
      <Footer /> */}
    </div>
  );
}

export default App
