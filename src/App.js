import React from "react";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Weather from "./Weather";
import Movies from "./Movies";
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      map: '',
      error: false,
      errorMessage: '',
      errorCode: '',
      searchQuery: '',
      weatherData: '',
      movieData: '',
    }
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value,
      searchQuery: event.target.value,
    });
  }

  getCityData = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`

      let cityDataFromAxios = await axios.get(url);
      // console.log(cityDataFromAxios.data[0])


      this.setState({
        cityData: cityDataFromAxios.data[0],
        error: false
      });

      let lat = cityDataFromAxios.data[0].lat;
      let lon = cityDataFromAxios.data[0].lon;

      setTimeout(() => {

        
        this.handleGetWeather(lat, lon);
      },1000)

      this.handleGetMovie(this.state.searchQuery);

      // let mapUrl = await `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=11`

      // this.setState({
      //   map: mapUrl
      // });
    } catch (error) {
      console.log(error)
      this.setState({
        error: true,
        errorMessage: error.message,
        errorCode: error.code
      })
    }

  }

  handleGetWeather = async (lat, lon) => {
    let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?lat=${lat}&lon=${lon}`

    let weatherResults = await axios.get(weatherUrl);
    // console.log(weatherResults.data);
    this.setState({
      weatherData: weatherResults.data,
    })
    // console.log(this.state.weatherData);
  }

  handleGetMovie = async (query) => {
    let url = `${process.env.REACT_APP_SERVER}/movies?query=${query}`

    let movieResults = await axios.get(url);
    this.setState({
      movieData: movieResults.data
    })
  }

  render() {
    // console.log(this.state.weatherData)
    return (
      <>
        <h1>Welcome to The City Explore</h1>
        <form onSubmit={this.getCityData}>
          <label > Enter in a City:
            <input type="text" onChange={this.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>

        {
          this.state.error
            ? <Alert key={'warning'} variant={'warning'}>
              <Alert.Heading>{this.state.errorCode}</Alert.Heading>
              <p>{this.state.errorMessage}</p>
            </Alert>
            :Object.keys(this.state.cityData).length > 0 && 
            <>
              <Card style={{ width: '30rem' }}>
                <Card.Header>{this.state.cityData.display_name}</Card.Header>
                <Card.Text>{this.state.cityData.lat}</Card.Text>
                <Card.Text>{this.state.cityData.lon}</Card.Text>
                <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=11`} alt="map img"></img>
              </Card>
              {this.state.weatherData? <Weather weatherData={this.state.weatherData}/> :<p>No Weather Data</p>}
              {this.state.movieData? <Movies movieData={this.state.movieData} /> : <p></p>}
            </>
        }
      </>
    )
  }
}


export default App;
