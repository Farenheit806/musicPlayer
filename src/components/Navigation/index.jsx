import { NavLink } from "react-router-dom";
import "./style.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => "link" + (isActive ? "_active" : "")}
            title="Домой"
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playlist"
            className={({ isActive }) => "link" + (isActive ? "_active" : "")}
            title="Плеер"
          >
            playlist
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
