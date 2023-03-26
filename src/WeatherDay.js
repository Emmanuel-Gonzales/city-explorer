import React from 'react'

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <section>
        <p>Date: {this.props.date}</p>
        <p>Desc: {this.props.description}</p>
        </section>
      </>
    )
  }
}

export default WeatherDay