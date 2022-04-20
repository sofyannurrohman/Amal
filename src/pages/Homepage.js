import "../App.css";
import AboutUs from "../Components/AboutUs/AboutUs";
import Achievement from "../Components/Achievement/Achievement";
import Donate from "../Components/Donate/Donate";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Support from "../Components/Support/Support";
export default function Homepage() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Achievement />
      <Support />
      <AboutUs />
      <Donate />
      <Footer />
    </div>
  );
}
