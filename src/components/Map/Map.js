import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SW from './Map.swiss';

export default class Map extends Component {
  handleApiLoaded = (map, maps) => {
    console.log(map, maps);
  };
  render() {
    return (
      <SW.Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBMwMuMZ1Pf8eViXoahpnhL6j0xWkVsCjs' }}
          defaultZoom={18}
          defaultCenter={{ lat: 34, lng: 34 }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            this.handleApiLoaded(map, maps)
          }>
          <div>test</div>
        </GoogleMapReact>
      </SW.Wrapper>
    );
  }
}
