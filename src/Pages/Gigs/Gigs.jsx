import React, { useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../Data";
import CardGig from "../../Components/CardGig/CardGig";
const Gigs = () => {
  const [open, setopen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setopen(false);
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs"> Graphics & Design</span>
        <h1>AI Artist</h1>
        <p>
          Explore the boundries of Arts and Technology with Fiver's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="Min" />
            <input type="text" placeholder="Max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortTypes">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              src="./assets/down.png"
              alt=""
              onClick={() => setopen(!open)}
            />
            {open && (
              <div className="rightmenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <CardGig key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
