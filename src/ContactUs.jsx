import React from "react";

function ContactUs() {
  const contactCard = [
    {
      image:
        "https://img.freepik.com/free-vector/phone-with-call-lines_78370-6565.jpg?semt=ais_hybrid&w=740&q=80",
      contactAdd: "Call With Us",
      contactLocation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, exdicta? Dolorem illo",
    },
    {
      image:
        "https://img.freepik.com/free-vector/phone-with-call-lines_78370-6565.jpg?semt=ais_hybrid&w=740&q=80",
      contactAdd: "Contact Us with Email",
      contactLocation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, exdicta? Dolorem illo",
    },
    {
      image:
        "https://img.freepik.com/free-vector/phone-with-call-lines_78370-6565.jpg?semt=ais_hybrid&w=740&q=80",
      contactAdd: "Address",
      contactLocation: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, exdicta? Dolorem illo",
    },
  ];

  return (
    <div>
      <div className="contactheader">
        <p className="contactText">CONTACT US</p>
        <p className="trust">
          Trusted <span className="partner">Partner</span>
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ex
          dicta? Dolorem illo iure ratione quod placeat rerum, nostrum non!
        </p>
      </div>

      <div className="contactcardwrapper">
        {contactCard?.map((i) => {
          return (
            <div className="contactCard">
              <img src={i.image} alt="contact-img" width={40} height={40} />
              <p>{i.contactAdd}</p>
              <p className="contactLocation">{i.contactLocation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactUs;
