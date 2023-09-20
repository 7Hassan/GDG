
import { NavLink } from "react-router-dom";
import { darkLogoCrop } from "../../assets";

const NavBar = () => {
  return <nav>
    <ul className="flex items-center">
      <NavLink end to="/">
        <li>Home</li>
      </NavLink>
      <NavLink end to="/dev-fest">
        <li>DevFest</li>
      </NavLink>
      <NavLink end to="/sessions">
        <li>Sessions</li>
      </NavLink>
      <NavLink end to="/blog">
        <li>Blog</li>
      </NavLink>
      <NavLink end to="/community">
        <li>Community</li>
      </NavLink>
    </ul>
  </nav>
};

export const Header = () => {
  return <header className="container">
    <div className="header-container flex items-center justify-between">
      <div className="logo w-[316px] min-w-[200px] py-[20px]">
        <img src={darkLogoCrop} alt="logo" className="w-[100%]" />
      </div>
      <NavBar />
    </div>
  </header>
}