import "./Brands.css";



import ahuja from "../../assets/ahuja-logo.webp";
import studiomaster from "../../assets/logo-studiomaster.webp";
import nlab from "../../assets/logo-nlab.webp";
import crown from "../../assets/logo-crown.webp";
import yamaha from "../../assets/yamaha-logo.webp";
import pope from "../../assets/logo-pope.webp";
import nx from "../../assets/nx-logo.webp";
import aeronsindia from "../../assets/logo-aeronsindia.webp";
import tas from "../../assets/logo-tas.webp";
import behringer from "../../assets/logo-behringer.webp";
import soundcraft from "../../assets/logo-soundcraft.webp";
import aplus from "../../assets/logo-aplus.webp";
import dynamite from "../../assets/logo-dynamite.webp";
import jbl from "../../assets/logo-jbl.webp";
import dynatech from "../../assets/logo-dynatech.webp";
import lavoce from "../../assets/lavoce_logo.webp";
import srk from "../../assets/logo-srk.webp";
import dbx from "../../assets/logo-dbx.webp";
import bose from "../../assets/logo-bose.webp";
import focusrite from "../../assets/logo-focusrite.webp";
import maudio from "../../assets/logo-m-audio.webp";
import presonus from "../../assets/presonus_logo.webp";
import casio from "../../assets/logo-casio.webp";
import roland from "../../assets/logo-roland.webp";
import korg from "../../assets/logo-korg.webp";
import novation from "../../assets/logo-novation.webp";
import rockstar from "../../assets/rockstar-logo.webp";
import zypher from "../../assets/logo-zypher.webp";

function Brands() {
  const brands = [
    { image: ahuja, name: "Ahuja" },
    { image: studiomaster, name: "Studiomaster" },
    { image: nlab, name: "Nlab" },
    { image: crown, name: "Crown" },
    { image: yamaha, name: "Yamaha" },
    { image: pope, name: "Pope" },
    { image: nx, name: "NX" },
    { image: aeronsindia, name: "Aerons India" },
    { image: tas, name: "TAS" },
    { image: behringer, name: "Behringer" },
    { image: soundcraft, name: "Soundcraft" },
    { image: aplus, name: "Aplus" },
    { image: dynamite, name: "Dynamite" },
    { image: jbl, name: "JBL" },
    { image: dynatech, name: "Dynatech" },
    { image: lavoce, name: "LaVoce" },
    { image: srk, name: "SRK" },
    { image: dbx, name: "DBX" },
    { image: bose, name: "Bose" },
    { image: focusrite, name: "Focusrite" },
    { image: maudio, name: "M-Audio" },
    { image: presonus, name: "PreSonus" },
    { image: casio, name: "Casio" },
    { image: roland, name: "Roland" },
    { image: korg, name: "Korg" },
    { image: novation, name: "Novation" },
    { image: rockstar, name: "Rockstar" },
    { image: zypher, name: "Zypher" },
  ];

  return (
    <section className="yssbrandsection-wrapper">

      <div className="yssbrandsection-title">
        Our Brands
      </div>

      <div className="yssbrandsection-slider">

        <div className="yssbrandsection-track">

          {brands.map((brand, index) => (
            <div
              className="yssbrandsection-item"
              key={index}
            >
              <img
                src={brand.image}
                alt={brand.name}
              />
            </div>
          ))}

          {/* Duplicate logos for continuous scrolling */}
          {brands.map((brand, index) => (
            <div
              className="yssbrandsection-item"
              key={`duplicate-${index}`}
            >
              <img
                src={brand.image}
                alt={brand.name}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Brands;