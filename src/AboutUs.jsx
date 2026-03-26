import React from "react";

function AboutUs() {
  const featureCards = [
    {
      image:
        "https://img.freepik.com/premium-vector/blue-line-graph-rising-trend-growth-success-chart-business-data-increase-financial-progress_169479-5921.jpg",
      title: "Real Time Support",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://www.vtechsolution.com/wp-content/uploads/2023/04/AI-Technology-to-Improve-an-Organizations-Future-Outcomes-scaled.jpg",
      title: "AI Based Solutions",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/blue-line-graph-rising-trend-growth-success-chart-business-data-increase-financial-progress_169479-5921.jpg",
      title: "Advanced Dashboards",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/blue-line-graph-rising-trend-growth-success-chart-business-data-increase-financial-progress_169479-5921.jpg",
      title: "High Security",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div>
      <div className="aboutUsWrapper">
        <div className="textContainer">
          <p className="textOur">
            Our <span className="vision">Vision</span>
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            tenetur ab vel, libero aperiam dolorem, commodi iste rem aspernatur
            laborum cumque soluta molestiae similique sit aliquid ullam!
            Distinctio, quis rem impedit veritatis dignissimos, explicabo
            repellat, iusto pariatur natus illo culpa doloribus praesentium
            cumque accusantium sit non eos a officia vel error? Nisi assumenda
            vero repudiandae impedit. Itaque repudiandae, suscipit eligendi
            iusto dolorem vitae nesciunt, laboriosam inventore ex consequatur
            soluta id placeat odit eveniet, reiciendis aliquid necessitatibus
            quam commodi debitis accusamus nulla nisi aut cupiditate. Vero
            consequatur, consequuntur, possimus cupiditate illum aspernatur
            accusamus, nisi libero minima tempore pariatur fuga placeat
            inventore? laboriosam inventore ex consequatur soluta id placeat
            odit eveniet, reiciendis aliquid necessitatibus quam commodi debitis
            accusamus nulla nisi aut cupiditate. Vero consequatur, consequuntur,
            possimus cupiditate illum aspernatur accusamus, nisi libero minima
            tempore pariatur fuga placeat inventore?
          </p>
        </div>
        <div className="imgContainer">
          <img
            src="https://as1.ftcdn.net/v2/jpg/17/01/65/68/1000_F_1701656840_5rs1MF1GYqxaLMxgdNYovLZ6zzKJ1xRb.jpg"
            width={400}
            height={200}
            alt="shipimg"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
      <div className="aboutUsWrapper">
        <div className="imgContainer">
          <img
            src="https://as1.ftcdn.net/v2/jpg/19/37/66/80/1000_F_1937668050_LD82qQRgwFaqEstqIZoW8lR7vMrSbWTX.jpg"
            width={400}
            height={200}
            alt="shipimg"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div className="textContainer">
          <p className="textOur">
            What <span className="vision">We Offer</span>
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
            tenetur ab vel, libero aperiam dolorem, commodi iste rem aspernatur
            laborum cumque soluta molestiae similique sit aliquid ullam!
            Distinctio, quis rem impedit veritatis dignissimos, explicabo
            repellat, iusto pariatur natus illo culpa doloribus praesentium
            cumque accusantium sit non eos a officia vel error? Nisi assumenda
            vero repudiandae impedit. Itaque repudiandae, suscipit eligendi
            iusto dolorem vitae nesciunt, laboriosam inventore ex consequatur
            soluta id placeat odit eveniet, reiciendis aliquid necessitatibus
            quam commodi debitis accusamus nulla nisi aut cupiditate. Vero
            consequatur, consequuntur, possimus cupiditate illum aspernatur
            accusamus, nisi libero minima tempore pariatur fuga placeat
            inventore? laboriosam inventore ex consequatur soluta id placeat
            odit eveniet, reiciendis aliquid necessitatibus quam commodi debitis
            accusamus nulla nisi aut cupiditate. Vero consequatur, consequuntur,
            possimus cupiditate illum aspernatur accusamus, nisi libero minima
            tempore pariatur fuga placeat inventore?
          </p>
        </div>
      </div>

      <div className="features">
        <p className="featureTitle">Features</p>
        <div className="featureBoxesWrapper">
            {
              featureCards.map((ele)=>{
                return <div className="Card">
                  <img src={ele.image} alt="img" width={44} height={44}/>
                  <p className="cardTitle">{ele.title}</p>
                  <p className="cardContent">
                    {ele.content}
                  </p>
                </div>
              })
            }
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
