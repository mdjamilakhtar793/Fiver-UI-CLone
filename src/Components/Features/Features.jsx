import React from "react";
import "./Features.scss";
const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="left">
          <h1>Find the Perfect Freelance Service for Your Business</h1>
          <div className="search">
            <div className="searchInput">
              <img src="/assets/search.png" alt="" />
              <input
                type="text"
                placeholder='Try " Build Mobile And Website Developments"'
              />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design & Development</button>
            <button>Logo Design</button>
            <button>Mobile App Dev</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="/assets/man.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
