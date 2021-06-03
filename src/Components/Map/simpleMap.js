import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import Layout from '../Layout/layout';
import credentials from '../../credentials';
import Marker from './Marker';
import Filter from './FilterForm';



const SimpleMap = (props, className) => {
    const [center, setCenter] = useState({lat: 38.7071, lng:-9.13549 });
    const [zoom, setZoom] = useState(13);
    const [coords, setCoords ] = useState([]);

   
    React.useEffect(() => {
        const BASE_URL = 'https://apidev.meep.me/tripplan/api/v1/routers/lisboa/resources'
        let url = `${BASE_URL}?lowerLeftLatLon=38.711046,-9.160096&upperRightLatLon=38.739429,-9.137115&companyZoneIds=545,467,473`
         fetch(url).then((response) => response.json().then((responseJson) => {
            let coordinates = [];
            Object.values(responseJson).forEach(item => {
                coordinates.push({lat: item.y, lng: item.x, id: item.id, batteryLevel: item.batteryLevel})
            })
            setCoords(coordinates) 
        }))
    }, [])

    return (
        <Layout>
        <div className='map' >
            <div className='container'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: credentials.apikey }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
        
        { coords.map(coord => 
                <Marker key={coord.id} lat={coord.lat} lng={coord.lng} batteryLevel={coord.batteryLevel} className={coord.batteryLevel > 25 ? 'pin bounce' : 'pinLow bounceLow'} />
                )}

      
        </GoogleMapReact>
                <Filter />
            </div>
      </div>
      </Layout>
    );
}

export default SimpleMap;

