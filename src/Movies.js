import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
  render() {
    return (
      <>
      <h3>Movies That Might Be About This City</h3>
        {this.props.movieData.map((movie, index) => {
          return (
            <Movie 
            image_url={movie.image_url}
            title={movie.title}
            overview={movie.overview}
            released_on={movie.released_on}
            key={index}
            />
          )
        })}
      </>
    )
  }
};

export default Movies