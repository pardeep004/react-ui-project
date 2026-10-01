import "./OurCategories.css";

import amplifier from "../../assets/amplifier_home.webp";
import speaker from "../../assets/speaker_img.webp";
import microphone from "../../assets/microphones_home.webp";
import crossover from "../../assets/Crossovers.webp";
import audioInterface from "../../assets/Audio_interfaces.webp";
import keyboard from "../../assets/keyboard_img.webp";
import rechargeable from "../../assets/rechargeble_home.webp";
import accessories from "../../assets/accesories-home.webp";

function Categories() {
  return (
    <section className="ysscategorieshome-wrapper">

      <div className="ysscategorieshome-heading">
        <h2>Our Categories</h2>
      </div>

      <div className="ysscategorieshome-grid">

        {/* Card 1 */}
        <div className="ysscategorieshome-card">
          <img
            src={amplifier}
            alt="Amplifiers"
            className="ysscategorieshome-img"
          />
          <div className="ysscategorieshome-title">
            Amplifiers
          </div>
        </div>

        {/* Card 2 */}
        <div className="ysscategorieshome-card">
          <img
            src={speaker}
            alt="Speakers"
            className="ysscategorieshome-img"
          />
          <div className="ysscategorieshome-title">
            Speakers
          </div>
        </div>

        {/* Card 3 */}
        <div className="ysscategorieshome-card">
          <img
            src={microphone}
            alt="Microphones"
            className="ysscategorieshome-img"
          />
          <div className="ysscategorieshome-title">
            Microphones
          </div>
        </div>

        {/* Card 4 */}
        <div className="ysscategorieshome-card">
          <img
            src={crossover}
            alt="Crossovers"
            className="ysscategorieshome-img"
          />
          <div className="ysscategorieshome-title">
            Crossovers
          </div>
        </div>

        {/* Card 5 */}
        <div className="ysscategorieshome-card">
          <img
            src={audioInterface}
            alt="Audio Interfaces"
            className="ysscategorieshome-img"
          />
          <div className="ysscategorieshome-title">
            Audio Interfaces
          </div>
        </div>

        {/* Card 6 */}
        <div className="ysscategorieshome-card">
          <img
            src={keyboard}
            alt="Keyboards"
            className="ysscategorieshome-img"
          />
          <div className="ysscategorieshome-title">
            Keyboards
          </div>
        </div>

        {/* Card 7 */}
        <div className="ysscategorieshome-card">
          <img
            src={rechargeable}
            alt="Rechargeable PA System"
            className="ysscategorieshome-img"
          />
          <div className="ysscategorieshome-title">
            Rechargeable PA System
          </div>
        </div>

        {/* Card 8 */}
        <div className="ysscategorieshome-card">
          <img
            src={accessories}
            alt="Accessories"
            className="ysscategorieshome-img"
          />
          <div className="ysscategorieshome-title">
            Accessories
          </div>
        </div>

      </div>

      {/* Visit More Button */}
      <div className="btn-container">
        <a href="/category" className="bnt-aaa">
          <button className="ysscategorieshome-btn">
            Visit More
          </button>
        </a>
      </div>

    </section>
  );
}

export default Categories;
