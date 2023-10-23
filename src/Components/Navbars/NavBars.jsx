import React, { useEffect, useState } from "react";
import "./NavBars.scss";
import { Link, useLocation } from "react-router-dom";
const NavBars = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  const currentUser = {
    id: 1,
    usernme: "Jamil Akhtar",
    isSeller: true,
  };
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">Tech-Fiver</span>
          </Link>
          {/* <span className="dot">.</span> */}
        </div>
        <div className="link">
          <span>Fiver Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Become A Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://lh3.googleusercontent.com/a/ACg8ocI3nHasnqHvaaxiFXZ1mzXVIMc7SuCi8YEaXaWeFAuhkDs=s360-c-no"
                alt="photo"
              />
              <span>{currentUser?.usernme}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add new Gigs
                      </Link>
                    </>
                  )}
                  <Link to="orders" className="link">
                    Orders
                  </Link>
                  <Link to="messages" className="link">
                    Messages
                  </Link>
                  <Link className="link">Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {active ||
        (pathname !== "/" && (
          <>
            <hr />
            <div className="menu">
              <Link className="link menuLink" to="/">
                Graphics & Designing
              </Link>
              <Link className="link menuLink" to="/">
                Video & Animation
              </Link>
              <Link className="link menuLink" to="/">
                Writing & Translation
              </Link>
              <Link className="link menuLink" to="/">
                Graphics & Designing
              </Link>
              <Link className="link menuLink" to="/">
                AI & Services
              </Link>
              <Link className="link menuLink" to="/">
                Digital & Marketing
              </Link>
              <Link className="link menuLink" to="/">
                Musics & Audio
              </Link>
            </div>
          </>
        ))}
    </div>
  );
};

export default NavBars;
