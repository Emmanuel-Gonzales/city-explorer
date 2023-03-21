import React from "react";
import Card from 'react-bootstrap/Card';

class City extends React.Component{
  render(){
    return(
      <Card style={{ width: '18rem' }}>
        <Card.Header>{this.prop.cityData.display_name}</Card.Header>
        <Card.Text>{this.prop.cityData.lat}</Card.Text>
        <Card.Text>{this.prop.cityData.lon}</Card.Text>
        <Card.Img src={this.prop.map} alt="map img"></Card.Img>
      </Card>
    )
  }
}


export default City;