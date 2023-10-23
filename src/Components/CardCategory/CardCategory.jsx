import React from "react";
import "./CardCategory.scss";
import { Link } from "react-router-dom";
const CardCategory = ({ item }) => {
  return (
    <Link to="gigs?cat=design">
      <div className="cardCat">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default CardCategory;
