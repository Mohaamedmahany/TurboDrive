
import HeroSection from "./components/HeroSection";
import ProductsPage from "./products/page";
import About from "./about/page";
import Contact from "./contact/page";
import TopCars from "./TopCars/page";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>

<HeroSection/>
<TopCars/>
 <About/>
<ProductsPage/>
 <Contact/>
 <Footer/>
    </div>
  );
}
