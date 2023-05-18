import { FaFacebook, FaHeart, FaShare, FaTwitter } from "react-icons/fa"

function BlogContent1() {
  return (
    <div className="blog-content">
        <div className="b-content">
            <h1 style={{textAlign: "center"}}>Cool business for Students</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus aliquid nemo eveniet sint explicabo. Pariatur sapiente ad tempore quia, officiis quo quidem cum dolore quaerat eius sequi iusto id, quis, necessitatibus quas. Modi, adipisci ducimus ipsam dolorum dolore iusto. Voluptatibus optio est tempora sunt ad doloribus nemo dolorem, dolore enim explicabo a, aliquam tenetur accusantium deserunt illum perspiciatis itaque aspernatur nihil laudantium incidunt harum aliquid doloremque modi eos. Ipsa alias nisi autem illo optio vitae, commodi corrupti excepturi quidem necessitatibus fuga maxime sunt quis ab qui. Illo quisquam dicta esse autem assumenda rem architecto earum commodi, repudiandae quos natus? 
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quis accusantium deleniti. Porro incidunt cupiditate quia illum pariatur repellat nisi hic, enim animi beatae ducimus accusamus explicabo fuga nobis vel soluta dolore assumenda? Saepe quo consectetur tempore provident voluptatibus suscipit debitis eaque voluptate odio ex autem nesciunt nihil laborum amet maiores nobis, animi ipsum natus ullam, ratione assumenda doloribus inventore vitae. Nihil dolorum fugit repellendus laborum minima est velit unde, exercitationem sapiente odit ipsa! Est aliquid ullam reprehenderit beatae asperiores quasi facilis esse voluptatum maiores commodi eum mollitia aliquam illum sint, corporis qui praesentium cumque laborum eligendi non ipsum. Cum.
            </p>
        </div>
        <div className="buttons">
            <button className="icon"><FaHeart className="btn-con" /> Like</button>
            <button className="icon"><FaShare className="btn-con" /> follow</button >
            <button className="icon"><FaFacebook className="btn-con" /> facebook</button>
            <button className="icon"><FaTwitter className="btn-con" /> twitter</button>
        </div>
    </div>
  )
}

export default BlogContent1