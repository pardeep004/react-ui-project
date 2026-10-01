import "./Footer.css";

import logo from "../../assets/soundsystem_logo1.webp";

function Footer() {
  return (
    <footer>

      <div className="footer-container">

        {/* Logo Section */}
        <div className="footer-logo-container">

          <img
            src={logo}
            alt="YSS Logo"
            className="footer-logo"
          />

          <p className="footer_paragraph">
            Welcome to YSS – your destination for high-quality audio products.
            We offer everything from professional gear to home setup solutions.
          </p>

        </div>

        {/* Quick Links */}
        <div className="footer-links">

          <h4 className="footer_title">
            Quick Links
          </h4>

          <ul>
            <li>
              <a href="/category">Category</a>
            </li>

            <li>
              <a href="/about">About Us</a>
            </li>

            <li>
              <a href="/sales">Services</a>
            </li>

            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>

        </div>

        {/* Social Links */}
        <div className="footer-links">

          <h4 className="footer_title">
            Follow Us
          </h4>

          <ul>

            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100083768710429"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/yerukondasoundsystems"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>

            <li>
              <a href="#">
                Twitter
              </a>
            </li>

            <li>
              <a href="#">
                YouTube
              </a>
            </li>

          </ul>

        </div>

        {/* Send Message */}
        <div className="footer-message">

          <h4 className="footer_title">
            Send Us a Message
          </h4>

          <form>

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">

        <p>
          © 2025 YSS soundsystem. Powered by{" "}

          <a
            href="https://digispheretech.in/index.html"
            target="_blank"
            rel="noreferrer"
            className="digisphere"
          >
            Digisphere
          </a>
          .
        </p>

      </div>

    </footer>
  );
}

export default Footer;