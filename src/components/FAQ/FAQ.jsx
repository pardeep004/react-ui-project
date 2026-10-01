import { useState } from "react";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the product warranty?",
      answer: (
        <>
          Product warranty means any defects found will be repaired free of
          cost (including Spare Part cost & labour charges). Warranty starts
          with the invoice date. Our Products carry warranty:
          <br />
          Speakers - 15 months
          <br />
          Monitors – 12 months
          <br />
          Mixers – 12 months
          <br />
          Own Products – 15 months
        </>
      ),
    },
    {
      question: "What is your exchange policy?",
      answer: (
        <>
          Once products are delivered to you as per the original order, there
          is no refund or exchange possible. In case there is a manufacturing
          defect, then the product can be exchanged. In case of a manufacturing
          defect, please contact customer service within 48 hours from the time
          the products has been delivered to you.
        </>
      ),
    },
    {
      question: "Is there a charge for delivery?",
      answer: (
        <>
          Delivery is free for all orders across the country, above cart value
          of Rs: 6999/-.
        </>
      ),
    },
    {
      question: "How can I get my product serviced or repaired?",
      answer: (
        <>
          Do not attempt any repairs by yourself or by any unauthorised
          personnel. Doing so can void your warranty. For any service, repairs
          or spares, kindly get in touch with our team and we’ll direct you to
          our nearest authorised service centre in your region.
        </>
      ),
    },
    {
      question: "What is the delivery timeline of my order?",
      answer: (
        <>
          The general delivery timeline is 8-10 business days (Metro cities and
          Non Metro cities) depending on the delivery address pin code.
          Delivery timelines might extend.
        </>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      {/* Header */}
      <div className="faq_section_header">
        <h1 className="faq_header">FAQ'S</h1>

        <p className="faq_paragraph">
          Find solutions to the most frequently asked questions below. If you
          don’t see what you're looking for, don’t hesitate to get in touch
          with us.
          <br />
          We're here to help!
        </p>
      </div>

      {/* FAQ List */}
      <div className="faq-carousel-container">

        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <p className="faq-question-text">
                {faq.question}
              </p>

              <button
                className="faq-toggle"
                aria-expanded={openIndex === index}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFAQ(index);
                }}
              >
                {openIndex === index ? "−" : "+"}
              </button>
            </div>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}

export default FAQ;