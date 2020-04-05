import React, { Component } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import queryString from 'query-string'
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import './styles.css';

  export default class Directions extends Component {
        
    constructor (props) {
      
      super(props)
  
      this.state = {
        response: true,
        travelMode: 'DRIVING',
        origin: ` `,
        destination: ``
      }
  
      this.directionsCallback = this.directionsCallback.bind(this)
    }

    componentDidMount() {
      const values = queryString.parse(this.props.location.search)
      this.setState({
        response: true,
        travelMode: 'DRIVING',
        origin: `${values.origem} `,
        destination: `${values.destino}`
      })
    }
  
    directionsCallback (response) {
      if (response !== null) {
        if (response.status === 'OK') {
          this.setState(
            () => ({
              response
            })
          )
        } 
      }
    }

    render () {
      return (
        <div className="mapa-container">
          <header>
            <img src={logoImg} alt="UNICAD" />
              <Link className="button" to="/lista">Lista de Entregas</Link>
          </header>
        
        

          <div className='map-container'>
            <LoadScript
             id="script-loader"
              googleMapsApiKey="AIzaSyBYDd3Mhv6phRYGV0Y9rR017AJ-P3ovBC8"
          
             >
            <GoogleMap
              id='direction-example'
              mapContainerStyle={{
                height: '500px',
                width: '100%'
              }}
              zoom={2}
              center={{
                lat: -22.9552549,
                lng: -43.1669116
              }}
            >
              {(
                  this.state.destination !== '' &&
                  this.state.origin !== ''
                ) && (
                  <DirectionsService
                    options={{  
                       destination: this.state.destination,
                       origin: this.state.origin,
                       travelMode: this.state.travelMode
                    }}
                    callback={this.directionsCallback}
                  />
                )}
  
              {
                this.state.response !== null && (
                  <DirectionsRenderer
                    options={{ 
                      directions: this.state.response
                    }}                  
                  />
                )
              }
            </GoogleMap>
            </LoadScript>
          </div>
          </div>
    )
  }
}

  
    