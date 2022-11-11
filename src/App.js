import Home from "./pages/Home";
import About from "./pages/About";
import NotMatch from "./pages/NotMatch";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/#/*" element={<NotMatch />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
