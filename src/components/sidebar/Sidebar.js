import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
import { FiExternalLink } from "react-icons/fi";
import logo from "../images/sam.jpg";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h1>
          <Link smooth to="/#start" className="h1_links">
            Proyecto IA
          </Link>
        </h1>

        <ul className="sidebar-nav">
          <li className="sidebar-nav-items">Por:</li>
          <li className="sidebar-nav-items">José Guzmán</li>
          <li className="sidebar-nav-items">Daniela Román</li>
          <li className="sidebar-nav-items">Gutemberg Mendoza</li>
          <li className="sidebar-nav-items">Alejandro Moya</li>
          <li className="sidebar-nav-items">Adhisson Cedeño</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
