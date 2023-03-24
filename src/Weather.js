import React from "react";
// import Alert from 'react-bootstrap/Alert';

class Weather extends React.Component{
  render(){
    return(
      <>
      <p>{this.props.date}</p>
      <p>{this.props.description}</p>
      </>
    )
  }



}

export default Weather