import { NavLink } from "react-router-dom";
import homeImg from "../../assets/home.svg";
import "./styles.css";

export default function NavLinks() {
    return (
        <nav className="container nav-container">
            <div className="text-nav-bar">
                <NavLink to={"/home"} className={({ isActive }) => isActive ? "is-active-link item-nav-bar" : "item-nav-bar"}>Início</NavLink>
                <NavLink to={"/products"} className={({ isActive }) => isActive ? "is-active-link item-nav-bar" : "item-nav-bar"}>Produtos</NavLink>
                <NavLink to={"/about"} className={({ isActive }) => isActive ? "is-active-link item-nav-bar" : "item-nav-bar"}>Sobre nós</NavLink>
            </div>
            <NavLink to={"/"}><img src={homeImg} alt="Início" className="home-img" /></NavLink>
        </nav>
    );
}