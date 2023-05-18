import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
        <h1>Oops!!</h1>
        <p>404 &mdash; page not found</p>
        <Link to="/" >Back To Home page</Link>
    </div>
  )
}

export default NotFound