import React from "react";
import "./Home.scss";
import Features from "../../Components/Features/Features";
import Trusted from "../../Components/TrustedBy/Trusted";
import Sliders from "../../Components/Slider/Slider";
import { cards, projects } from "../../Data";
import CardCategory from "../../Components/CardCategory/CardCategory";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
const Home = () => {
  return (
    <div className="home">
      <Features />
      <Trusted />
      <Sliders slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CardCategory key={card.id} item={card} />
        ))}
      </Sliders>
      <div className="feature">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./assets/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./assets/Intro.webm" controls />
          </div>
        </div>
      </div>
      <FibTeams />
      <Sliders slidesToShow={4} arrowsScroll={4}>
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Sliders>
    </div>
  );
};

export default Home;

const FibTeams = () => {
  return (
    <div className="feature dark">
      <div className="container">
        <div className="item">
          <h1>Tech-Fiber Business</h1>
          <h1>A business solution designrd for Teams</h1>
          <p>
            Upgrade to a curated expericience packed with tools and benifits,
            dedicated to business
          </p>
          <div className="title">
            <img src="./assets/check.png" alt="" />
            Connect to freelancers with proven customer experience
          </div>
          <div className="title">
            <img src="./assets/check.png" alt="" />
            Connect with the Perfect talent by customer Success Manager
          </div>
          <div className="title">
            <img src="./assets/check.png" alt="" />
            Manage teamwork and boost productivity with one powerfull workSpace
          </div>
          <button>Explore Business</button>
        </div>
        <div className="item">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
