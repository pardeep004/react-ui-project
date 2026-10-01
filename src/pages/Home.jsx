import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import About from "../components/About/About";
import Brands from "../components/Brands/Brands";
import OurBrands from "../components/OurBrands/OurBrands";
import OurCategories  from "../components/OurCategories/OurCategories";
import Banner  from "../components/Banner/Banner";
import WhatWeOffer  from "../components/WhatWeOffer/WhatWeOffer";
import Gallery  from "../components/Gallery/Gallery";
import Reviews  from "../components/Reviews/Reviews";
import FAQ  from "../components/FAQ/FAQ";
import ContactBanner  from "../components/ContactBanner/ContactBanner";
import Footer  from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Carousel />

      <About />

      <Brands/>

      <OurBrands/>

      <OurCategories/>

      <Banner/>

      <WhatWeOffer/>

      <Gallery/>

      <Reviews/>

      <FAQ/>

      <ContactBanner/>

      <Footer/>
    </>
  );
}

export default Home;