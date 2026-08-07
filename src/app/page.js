import Switcher from "./componets/switcher";
import About from "./About";
import Benefit from "./Benefit";
import MyNavbar from "./componets/Navbar/myNavbar";
import Contact from "./Contact";
import Home from "./Home";
import Product from "./Product";
import Service from "./Service";
import Testimoni from "./Testimoni";
import LogoPartner from "./LogoPartner";
import Footer from "./Footer";

export default function Index() {
  return (
    <>
      <MyNavbar navClass="nav-light" />
      <Home />
      <About />
      <Service />
      <Benefit />
      <Testimoni />
      <Product />
      <Contact />
      <LogoPartner />
      <Switcher />
      <Footer />
    </>
  );
}
