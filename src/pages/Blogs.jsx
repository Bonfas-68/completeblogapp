import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <div className='blogs'>
      <div className="blog">
        <h2>Mass Erronous Pay</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aspernatur!...</p>
        <Link to="/blogContent" className='blog-anchor'>Read More</Link>
      </div>
      <div className="blog">
        <h2>Cool business for Students</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aspernatur  dolor sit amet!...</p>
        <Link to="/blogContent1" className='blog-anchor'>Read More</Link>
      </div>
      
      <div className="blog">
        <h2>Bad Pay! Bad Day!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, aspernatur! ipsum dolor sit amet consectetur adipisicing elit...</p>
        <Link to="/blogContent2" className='blog-anchor'>Read More</Link>
      </div>
    </div>
  )
}

export default Blogs