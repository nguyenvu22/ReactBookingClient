import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://play-lh.googleusercontent.com/zaMefYVID82FrctnM3g2b9Ul1Wk9cAR1aYfKNq_uvHnDbGo2wqZgliYVioi8Fa3YTA" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 prop</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://play-lh.googleusercontent.com/zaMefYVID82FrctnM3g2b9Ul1Wk9cAR1aYfKNq_uvHnDbGo2wqZgliYVioi8Fa3YTA" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>123 prop</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://play-lh.googleusercontent.com/zaMefYVID82FrctnM3g2b9Ul1Wk9cAR1aYfKNq_uvHnDbGo2wqZgliYVioi8Fa3YTA" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>123 prop</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured