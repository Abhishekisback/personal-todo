import React from "react";
import RequirementForm from "./RequirementForm.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
  const ourHighlights = [
    {
      image:
        "https://d26yjdkrvzi0es.cloudfront.net/highlight/highlight-seller.svg",
      count: "1900",
      label: "Sellers",
    },
    {
      image:
        "https://d26yjdkrvzi0es.cloudfront.net/highlight/highlight-seller.svg",
      count: "3000",
      label: "Customers",
    },
    {
      image:
        "https://d26yjdkrvzi0es.cloudfront.net/highlight/highlight-seller.svg",
      count: "1900",
      label: "Sellers",
    },
    {
      image:
        "https://d26yjdkrvzi0es.cloudfront.net/highlight/highlight-seller.svg",
      count: "3000",
      label: "Customers",
    },
  ];

  const navigateTo = useNavigate();

  return (
    <div>
      <div className="homeSection1">
        <p className="yourSolution">Your one Stop Solution</p>
        <p className="marineServices">For All Marine Services</p>
        <button
          className="createReqbtn"
          onClick={() => {
            navigateTo("/create-request");
          }}
        >
          Create a Requistion
        </button>
      </div>
      <h1 className="highlightsTitle">Our Highlights</h1>
      <div className="homeSection2">
        {ourHighlights.map((j) => {
          return (
            <div className="highlightcard">
              <img src={j.image} alt="highlightimg" width={80} height={80} />
              <p className="count">{j.count}</p>
              <p className="label">{j.label}</p>
            </div>
          );
        })}
      </div>
      <h1 className="tellUstext">Tell Us what you are Looking for ?</h1>
      <div className="homeSection3">
        <div className="formSection1">
          <h1 className="textConnect">Connect with our Team</h1>
          <div className="shipSection"></div>
          <div className="points">
            <p className="journey">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit ametLorem ipsum
              dolor sit amet, Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
              ametLorem ipsum dolor sit amet
            </p>
            <p className="journey">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit ametLorem ipsum
              dolor sit amet, Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
              ametLorem ipsum dolor sit amet
            </p>
            <p className="journey">
              Lorem ipsum dolor sit amet.Lorem ipsum dolor sit ametLorem ipsum
              dolor sit amet, Lorem ipsum dolor sit amet.Lorem ipsum dolor sit
              ametLorem ipsum dolor sit amet
            </p>
          </div>
        </div>
        <div className="formsection2">
          <RequirementForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
