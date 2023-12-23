import { Outlet } from "react-router-dom"

import NavBar from "./NavBar"

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <footer>
        <span>get well soon ведь на носу новый год!!!</span>
      </footer>
    </>
  )
}

export default Layout