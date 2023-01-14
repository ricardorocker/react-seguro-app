import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        App <span>Seguros</span> - Ricardo Rocker
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product/create"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Novo Seguro
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
