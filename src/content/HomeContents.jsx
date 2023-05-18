import Cta from "./Cta"
import HomeFeatures from "./HomeFeatures"
import Showcase from "./Showcase"

function HomeContents() {
  return (
    <div className="contents">
        <div className="showcase">
            <Showcase/>
        </div>
        <div className="features">
            <HomeFeatures/>
        </div>
        <div className="cta">
            <Cta/>
        </div>
    </div>
  )
}

export default HomeContents