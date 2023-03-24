import React from "react";
import Figure from 'react-bootstrap/Figure';

class Movie extends React.Component {
  render() {
    return (
      <>
      <h3>Movies That Might Be About This City</h3>
        {this.props.movieData.map(movie => {
          return (
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt="171x180"
                src={movie.image_url}
              />
              <p>{movie.title}: {movie.overview}</p>
              <p>Released: {movie.released_on}</p>
            </Figure>
          )
        })}
      </>
    )
  }
};

export default Movie