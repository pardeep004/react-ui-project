
import "./About.css";
import Home_aboutt_image from "../../assets/Home_aboutt_image.avif";

const About = () => {
  return (
    <section className="about">
      <div className="about-image">
        <img
          src={Home_aboutt_image}
          alt="About us"
        />
      </div>

      <div className="about-content">
        <h1>About Us</h1>

        <p>
          
            Welcome to YSS (Yerukonda Sounds System), your trusted partner for
            high-quality sound products. Established with a passion for sound,
            we specialize in providing and selling top-tier audio equipment that
            enhances your listening and entertainment experience.
          
        </p>

        <p>
        
            We offer a diverse range of audio products, including our very own
            Amplifiers, Mixers, DJ Boxes, Loudspeakers, Home Theaters,
            Microphones, and Accessories. Our products are designed with
            innovation, client inputs, and our own unique designs, ensuring
            powerful and clear sound for every requirement—whether you’re a DJ,
            a sound technician, or an audiophile.
          
        </p>

        <button className="about-btn">Read more</button>
      </div>
    </section>

  );
};

export default About;