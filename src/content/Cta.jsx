function Cta() {
  return (
    <div className="cta-content">
        <h2>Subscribe To our NewsLetter</h2>
        <div className="cta">
            <form action="#" className="form-content">
            <div className="form-control">
                <label htmlFor="username">Username</label>
                <input type="text" name="name" id="name" placeholder="Enter Name"/>
            </div>
            <div className="form-control">
                <label htmlFor="email">Enter Email</label>
                <input type="email" name="name" id="name" placeholder="Enter Email"/>
            </div>
            <div className="form-control">
                <input type="submit" name="name" id="name" value="Subscribe"/>
            </div>
        </form>
        </div>
        
    </div>
  )
}

export default Cta