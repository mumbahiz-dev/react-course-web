import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
// import FooterComponent from "./components/FooterComponent";

import HomePage from "./pages/HomePage";
import ClassPage from "./pages/ClassPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import TermConditionPage from "./pages/TermConditionPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/class" Component={ClassPage}></Route>
        <Route path="/testimonial" Component={TestimonialPage}></Route>
        <Route path="/faq" Component={FaqPage}></Route>
        <Route path="/term-condition" Component={TermConditionPage}></Route>
      </Routes>
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
