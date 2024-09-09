import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <footer
        className={`row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 ${styles.footer}`}
      >
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque,
            nesciunt doloremque? Blanditiis voluptates veniam distinctio debitis
            voluptate nihil dolor ipsam repudiandae cum illum atque, explicabo
            unde quia commodi sed quasi?
          </p>
        </div>

        <div className="col mb-3"></div>

        {/* Menu Columns */}
        <div className="col mb-3 menu-col">
          <h5 className="text-white">Section 1</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3 menu-col">
          <h5 className="text-white">Section 2</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3 menu-col">
          <h5 className="text-white">Section 3</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
