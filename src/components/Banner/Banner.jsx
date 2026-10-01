import "./Banner.css";

import banner1 from "../../assets/home-banner-2.webp";
import banner2 from "../../assets/home-banner-1.webp";

function Banner() {
  return (
    <section className="bannersectionconnect-wrapper">

      <div className="bannersectionconnect-container">

        {/* Card 1 */}
        <div className="bannersectionconnect-card">

          <div
            className="bannersectionconnect-content"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="bannersectionconnect-overlay">

              <h3>Discover Our Exclusive Collection</h3>

              <a
                href="/sales"
                className="bannersectionconnect-btn"
              >
                Explore Now
              </a>

            </div>
          </div>

        </div>


        {/* Card 2 */}
        <div className="bannersectionconnect-card">

          <div
            className="bannersectionconnect-content"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="bannersectionconnect-overlay">

              <h3>Your Destination For Winning Creations</h3>

              <a
                href="/category"
                className="bannersectionconnect-btn"
              >
                Visit Us
              </a>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Banner;