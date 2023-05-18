import { Link } from "react-router-dom"

function Showcase() {
  return (
    <div className="showcase">
        <img className="bg" src="/src/bg.jfif" alt="" />
        <div className="showcase-text">
            <h1>Woobly Blogs</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, dolore ducimus! Atque vel nostrum fugiat at dolorem minima inventore! Repellat.</p>
            <Link to="/about" className="showcase-btn">Read More</Link>
        </div>
    </div>
  )
}

export default Showcase