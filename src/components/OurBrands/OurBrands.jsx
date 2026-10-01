import "./OurBrands.css";
import enginner from "../../assets/sound_engineer_work.webp"
import YearsofExperience from "../../assets/YearsofExperience.webp";
import ProjectDone from "../../assets/ProjectDone.webp";
import Employees from "../../assets/Employees.webp";
import ClientsSatisfaction from "../../assets/ClientsSatisfaction.webp";
// import YearsofExperience from "../../assets/YearsofExperience.webp";
const OurBrands = () => {
  return (
    <section
  className="ysscountnumbers-wrapper"
  style={{ backgroundImage: `url(${enginner})` }}
>
  <div className="ysscountnumbers-container">

    {/* Card 1 */}
    <div className="ysscountnumbers-box">
      <div className="ysscountnumbers-icon">
        <img src={YearsofExperience} alt="Projects Icon" />
      </div>
      <h2 className="ysscountnumbers-number" data-target="40" data-symbol="+">
        40+
      </h2>
      <p className="ysscountnumbers-title">Years of Experience</p>
    </div>

    {/* Card 2 */}
    <div className="ysscountnumbers-box">
      <div className="ysscountnumbers-icon">
        <img src={ProjectDone} alt="Employees Icon" />
      </div>
      <h2 className="ysscountnumbers-number" data-target="2500" data-symbol="+">
        2500+
      </h2>
      <p className="ysscountnumbers-title">Project Done</p>
    </div>

    {/* Card 3 */}
    <div className="ysscountnumbers-box">
      <div className="ysscountnumbers-icon">
        <img src={Employees} alt="Constructor Icon" />
      </div>
      <h2 className="ysscountnumbers-number" data-target="10" data-symbol="+">
        10+
      </h2>
      <p className="ysscountnumbers-title">Employees</p>
    </div>

    {/* Card 4 */}
    <div className="ysscountnumbers-box">
      <div className="ysscountnumbers-icon">
        <img src={ClientsSatisfaction} alt="Partners Icon" />
      </div>
      <h2 className="ysscountnumbers-number" data-target="2000" data-symbol="+">
        2000+
      </h2>
      <p className="ysscountnumbers-title">Clients Satisfaction</p>
    </div>

  </div>
</section>
  )
}

export default OurBrands


