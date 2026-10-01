import "./ContactBanner.css";

import contactBanner from "../../assets/Home_Contact_Banner.webp";

function ContactBanner() {
  return (
    <section className="banner">
      <div className="banner-image">

        <img
          src={contactBanner}
          alt="Contact Banner"
          className="Contact_banner"
        />

        <div className="banner-content">
          <h1 className="banner-heading">
            Elevate Your Sound, Elevate Your Life
          </h1>

          <p className="banner-paragraph">
            High-performance audio products designed to meet the needs of
            every sound lover
          </p>

          <div className="input-container">
            <input
              type="email"
              className="input-bar"
              placeholder="Enter your mail..."
            />

            <button className="submit-btn">
              Submit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ContactBanner;