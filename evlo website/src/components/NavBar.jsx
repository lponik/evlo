
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className = "nav">
        
    <ul>
      <li className = "right">
        <Link className = "home" to="/">HOME</Link>
      </li>
      <li className = "right">
        <Link to="contact">CONTACT</Link>
      </li>
      <li className = "right">
        <Link to="about">ABOUT</Link>
      </li>
      <li className = "right">
        <Link to="reviews">REVIEWS</Link>
      </li>
      <li className = "right">
        <Link to="gallery">SERVICES</Link>
      </li>

    </ul>
  </nav>
  )
}

export default NavBar
