
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './Mylocation.css'
const Mylocation = () => {
    const position = [22.39092433772035, 91.78982313814453];
    const position2 = [23.136217589344916, 90.37557585772126];
    return (
        <div >
            <MapContainer id='map' center={position} zoom={8} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        This is our chittagong location.
                    </Popup>
                </Marker>
                <Marker position={position2}>
                    <Popup>
                        This is our Madaripur location.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Mylocation