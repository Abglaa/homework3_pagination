import { NavLink } from "react-router-dom"

const activeMenu = ({isActive}) => isActive ? "active-navlink" : ""

const NavBar = () => {
  return (
    <nav>       
        <ul className="horizontal">
            <li>
                <NavLink className={activeMenu} to="/posts">Posts</NavLink>
            </li>
        </ul>
    </nav>
  )
}
export default NavBar