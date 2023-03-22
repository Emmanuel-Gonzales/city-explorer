import React from "react";
import Alert from 'react-bootstrap/Alert';

class Weather extends React.Component{
  render(){
    return(
      <>
      <Alert key={'warning'} variant={'warning'}>
              <Alert.Heading>Weather</Alert.Heading>
              <p>{this.props.date}</p>
              <p>{this.props.description}</p>
            </Alert>
      </>
    )
  }



}

export default Weather