import { NavLink } from "react-router-dom";
import { getCategories } from "../../services/category-service";
import "./styles.css";

export default function ProductGroup() {
    return (
        <section id="product-group-section" className="container">
            {getCategories().map(
                i => <NavLink key={i.id} to={i.routerName}
                    className={({ isActive }) => isActive ? "is-active-link item-nav-bar" : "item-nav-bar"}>{i.name}</NavLink>
            )}
        </section>
    );
}