import React, { useEffect, useState } from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setVisible } from "../../store/cardVisible";
import { useNavigate } from "react-router-dom";
import profileImage from "../../images/profile.png";

import { db } from "../../Firebase.config";
import { doc, getDoc } from "firebase/firestore";
import useAuth from "../cutom-hook/useAuth";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Get the current logged-in user

  const products = useSelector((state) => state.card.product);
  const [menuItem, setMenuItem] = useState("home");
  const [sticky, setSticky] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState(""); // State to store profile image URL

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });

    if (currentUser) {
      fetchUserProfileImage();
    }
  }, [currentUser]);

  const fetchUserProfileImage = async () => {
    const userDoc = await getDoc(doc(db, "users", currentUser.uid));
    if (userDoc.exists()) {
      setProfileImageUrl(userDoc.data().image); // Set the profile image URL from the database
    }
  };

  const handleNav = () => {
    setShowNav(!showNav);
  };

  const handleCardVisible = () => {
    dispatch(setVisible((prev) => !prev));
    navigate("/checkout");
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <>
      <header className={`header ${sticky ? "nav_sticky" : ""}`}>
        <Container>
          <Row>
            <div className="wrapper">
              <Logo />
              <div className={`nav ${showNav ? "nav_show" : ""}`}>
                <ul className="nav-links">
                  <li className="linkItem">
                    <Link
                      to="/"
                      className={`linkItem ${
                        menuItem === "home" ? "nav_active" : ""
                      }`}
                      onClick={() => setMenuItem("home")}
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={`linkItem ${
                      menuItem === "shop" ? "nav_active" : ""
                    }`}
                    onClick={() => setMenuItem("shop")}
                  >
                    <Link to="/shopping" className="linkItem">
                      Shop
                    </Link>
                  </li>
                  <li
                    className={`linkItem ${
                      menuItem === "cart" ? "nav_active" : ""
                    }`}
                    onClick={() => setMenuItem("cart")}
                  >
                    <Link to="/checkout" className="linkItem">
                      Cart
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="headerIcon">
                <span>0</span>
                <IoMdHeartEmpty className="icon" />
                <span>{products.length}</span>
                <RiShoppingBag4Line
                  className="icon"
                  onClick={handleCardVisible}
                />

                <div className="profilePic" onClick={toggleProfileMenu}>
                  {profileImageUrl ? (
                    <img src={profileImageUrl} alt="profile" />
                  ) : (
                    <img src={profileImage} alt="default profile" />
                  )}
                  {showProfileMenu && (
                    <div className="profileMenu">
                      <Link to="/login" className="menuItem">
                        Login
                      </Link>
                      <Link to="/signup" className="menuItem">
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="menuIcon" onClick={handleNav}>
                {showNav ? <IoMdMenu className="icon" /> : "X"}
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default Header;
