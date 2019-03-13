import React from 'react';

const TextFlow = (props) => {
  return (
    <section className="textFlow-container">
      <div className="fade"></div>
      <div className="star-wars">
        <div className="crawl">
          <div className="title">
            <h3>{props.movieInfo.releaseDate}</h3>
            <h1>{props.movieInfo.movieTitle}</h1>
          </div>
          <p>{props.movieInfo.crawlText}</p>
        </div>
      </div>
    </section>
  )
}

export default TextFlow;