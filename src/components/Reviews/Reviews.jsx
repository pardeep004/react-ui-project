import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      name: "Kandukuri Naveen",
      role: "Sound Engineer",
      text: "Good in service also, in Rajahmundry best service for sound system. Price for the service also best in compared to others",
    },
    {
      name: "Suresh Puttepu",
      role: "Event Manager",
      text: "Ahuja studio master authorised dealers. Best shop in East Godavari",
    },
    {
      name: "Sai Naidu",
      role: "Event Manager",
      text: "Best showroom for the sound systems. Anni ardham ayyela explain chestunaru",
    },
    {
      name: "Samuel Kanthi",
      role: "Business Owner",
      text: "Best shop for the Sound systems At Rajahmundry. Sales team is very responsive, thankyou YSS",
    },
    {
      name: "Sam Verma",
      role: "DJ",
      text: "The team gave expert advice and recommended the best soundbox for my event. Smooth and professional!",
    },
    {
      name: "Hoseen Rajesh",
      role: "Sound Engineer",
      text: "Excellent service and super good products. Good guidance and suggestions. Excepicially good responds all are team.",
    },
    {
      name: "Pbv Reddy",
      role: "Musician",
      text: "మంచి రేటుకి ఇస్తున్నారు, రాజమండ్రి లో బాగా ఎక్సప్లెయిన్ చేస్తున్నారు.",
    },
    {
      name: "Yohanu 9652",
      role: "Event Manager",
      text: "మీ షాపులో కస్టమర్ ని బాగా గౌరవిస్తున్నారు ఏమైనా మెటీరియల్ తీసుకుంటే మీ షాపులోకి రావాలని ఉంది",
    },
    {
      name: "Ananya Roy",
      role: "Business Owner",
      text: "I love how crystal clear my meetings sound now thanks to YSS’s conference speaker system.",
    },
    {
      name: "Ram",
      role: "DJ Event",
      text: "The team gave expert advice and recommended the best soundbox for my event. Smooth and professional!",
    },
  ];

  return (
    <section className="yssreviewsection-wrapper">
      <div className="yssreviewsection-bg">
        <div className="yssreviewsection-container">

          <h2 className="yssreviewsection-title">
            What people Think <span>About Us</span>
          </h2>

          <div className="yssreviewsection-slider">
            <div className="yssreviewsection-track">

              {/* Original cards */}
              {reviews.map((review, index) => (
                <div className="yssreviewsection-card" key={index}>
                  <div className="stars">★★★★★</div>

                  <p className="review-text">
                    {review.text}
                  </p>

                  <div className="review-footer">
                    <div>
                      <h5>{review.name}</h5>
                      <small>{review.role}</small>
                    </div>
                  </div>
                </div>
              ))}

              {/* Duplicate cards for continuous sliding */}
              {reviews.map((review, index) => (
                <div
                  className="yssreviewsection-card"
                  key={`duplicate-${index}`}
                >
                  <div className="stars">★★★★★</div>

                  <p className="review-text">
                    {review.text}
                  </p>

                  <div className="review-footer">
                    <div>
                      <h5>{review.name}</h5>
                      <small>{review.role}</small>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Reviews;