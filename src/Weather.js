import React from "react";
import WeatherDay from "./WeatherDay";
import Alert from 'react-bootstrap/Alert';
import './Weather.css'

class Weather extends React.Component {
  render() {
    return (
      <>
        <Alert>
        <Alert.Heading>Weather Forecast</Alert.Heading>
        {this.props.weatherData.map((day, index) => {
        return(
        <WeatherDay 
        date={day.date} 
        description={day.description} 
        key={index} />
        )})}
        </Alert>
      </>
    )
  }



}

export default Weather