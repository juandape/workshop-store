import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
