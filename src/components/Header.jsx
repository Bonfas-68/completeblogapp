import { Link } from "react-router-dom"
import { FaBlog, FaFan, FaHome, FaInfo } from "react-icons/fa"

function Header() {
  return (
    <div className="header">
      <div className="logo">Woobly Blogs</div>
      <nav className="navbar">
        <Link to="/home" className="anchor"> <FaHome className="anchor-icon"/> Home</Link>
          <Link to="/about" className="anchor"><FaInfo className="anchor-icon"/>About</Link>
          <Link to="/blogs" className="anchor"><FaBlog className="anchor-icon"/>Blogs</Link>
      </nav>
        
    </div>
  )
}

export default Header