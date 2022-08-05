import { NavLink } from "react-router-dom";

export const Link = ({ img, title }) => {
  return (
    <li>
      <NavLink
        to={img === "home" ? "/" : `/${img}`}
        className={({ isActive }) =>
          "nav-link" + (isActive ? " active-link" : "")
        }
        title={title}
      >
        {({ isActive }) =>
          isActive ? (
            <img src={`assets/img/navBarIcons/selected/${img}.svg`} alt={img} />
          ) : (
            <img
              src={`assets/img/navBarIcons/unselected/${img}.svg`}
              alt={img}
            />
          )
        }
      </NavLink>
    </li>
  );
};
