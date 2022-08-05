import { Link } from "./Link";
import "./style.scss";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link img="home" title="Домашняя страница" />
        <Link img="playlist" title="Плейлист" />
      </ul>
    </nav>
  );
};
