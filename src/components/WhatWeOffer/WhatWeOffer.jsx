import "./WhatWeOffer.css";

function WhatWeOffer() {
  return (
    <section className="soundoffersection-wrapper">

      <div className="soundoffersection-row">

        {/* LEFT SIDE */}

        <div className="soundoffersection-left">

          <h2 className="soundoffersection-title">
            WHAT WE OFFER
          </h2>

          <div className="soundoffersection-underline"></div>

          <p className="soundoffersection-text">
            Whether you're setting up a cozy home theater or a
            high-performance studio, our sound systems are tailored
            to fit your unique needs. We believe that sound is not
            just heard — it's felt. That’s why we craft every
            experience to be immersive and unforgettable.
          </p>

          <p className="soundoffersection-text">
            Our expert team stays updated with the latest in sound
            innovation, ensuring you get cutting-edge equipment that
            performs beyond expectations. From Dolby Atmos systems
            to hi-fi wireless speakers, we bring you the future of
            audio today.
          </p>

          <p className="soundoffersection-text">
            We partner only with trusted, globally renowned audio
            brands to maintain a standard you can count on. No
            matter the size of your project, we treat every setup
            with precision, attention to detail, and a passion for
            perfection.
          </p>

          <p className="soundoffersection-text">
            Customer satisfaction is our top priority. From the
            first consultation to the final installation, we walk
            with you through every step of the journey.
          </p>

        </div>


        {/* RIGHT SIDE */}

        <div className="soundoffersection-right">

          {/* Box 1 */}

          <div className="soundoffersection-box">

            <img
              src="https://cdn-icons-png.flaticon.com/512/2210/2210153.png"
              alt="Technology Icon"
            />

            <h4>Advanced Technology</h4>

            <p>
              Top-tier audio systems with the latest technology
              for unbeatable performance and clarity.
            </p>

            <a href="/contact">
              Details ›
            </a>

          </div>


          {/* Box 2 */}

          <div className="soundoffersection-box">

            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Engineer Icon"
            />

            <h4>Expert Sound Engineers</h4>

            <p>
              Our sound experts help you select the right setup
              for home, studio, or business environments.
            </p>

            <a href="/contact">
              Details ›
            </a>

          </div>


          {/* Box 3 */}

          <div className="soundoffersection-box">

            <img
              src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
              alt="Support Icon"
            />

            <h4>24/7 Customer Support</h4>

            <p>
              From setup to troubleshooting — we’re with you
              every step of the way, anytime you need.
            </p>

            <a href="/contact">
              Details ›
            </a>

          </div>


          {/* Box 4 */}

          <div className="soundoffersection-box">

            <img
              src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png"
              alt="Delivery Icon"
            />

            <h4>Fast & Safe Delivery</h4>

            <p>
              All sound products are packed securely and
              delivered on time across the country.
            </p>

            <a href="/contact">
              Details ›
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhatWeOffer;