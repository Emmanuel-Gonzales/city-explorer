import React from "react";
import Figure from 'react-bootstrap/Figure';

class Movie extends React.Component {
  render() {
    return (
      <>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={this.props.image_url}
          />
          <p>{this.props.title}: {this.props.overview}</p>
          <p>Released: {this.props.released_on}</p>
        </Figure>
      </>
    )
  }
}

export default Movie