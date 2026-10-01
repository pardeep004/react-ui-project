import "./Navbar.css";
import myImage from "../../assets/soundsystem_logo1.webp";

function Navbar() {
  return (
    <header className="header-main">

      <div className="logo">
        <img src={myImage} alt="YSS Logo" />
      </div>

      <nav className="header-menu">
        <ul>
            <li class="header_list"><a href="index.html">Home</a></li>
          <li class="header_list"><a href="sales.html">Sales & Services</a></li>
          <li class="header_list"><a href="category.html">categories</a></li>
          <li class="header_list"><a href="about.html">About Us</a></li>
          <li class="header_list"><a href="contact.html">Contact Us</a></li>
        </ul>
      </nav>

    </header>
  );
}

export default Navbar;