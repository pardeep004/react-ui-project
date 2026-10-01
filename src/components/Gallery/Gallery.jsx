import "./Gallery.css";

import gallery1 from "../../assets/gallery_8.avif";
import gallery2 from "../../assets/gallery_2.webp";
import gallery3 from "../../assets/gallery_3.webp";
import gallery4 from "../../assets/gallery_4.webp";
import gallery5 from "../../assets/gallery_5.webp";
import gallery6 from "../../assets/gallery_6.webp";
import gallery7 from "../../assets/gallery_1.webp";

function Gallery() {
  return (
    <section className="yssgallerysection-wrapper">
      <h2 className="yssgallerysection-title">Gallery Section</h2>

      <div className="yssgallerysection-container">
        <div className="yssgallerysection-grid">

          <div className="yssgallerysection-item large">
            <img src={gallery1} alt="Gallery 1" />
          </div>

          <div className="yssgallerysection-item">
            <img src={gallery2} alt="Gallery 2" />
          </div>

          <div className="yssgallerysection-item">
            <img src={gallery3} alt="Gallery 3" />
          </div>

          <div className="yssgallerysection-item">
            <img src={gallery4} alt="Gallery 4" />
          </div>

          <div className="yssgallerysection-item">
            <img src={gallery5} alt="Gallery 5" />
          </div>

          <div className="yssgallerysection-item">
            <img src={gallery6} alt="Gallery 6" />
          </div>

          <div className="yssgallerysection-item">
            <img src={gallery7} alt="Gallery 7" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Gallery;