import {
  MapContainer,
  TileLayer,
  Polygon,
  // Popup
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import BasicModal from './BasicModal';
import { statesData } from './const/usa'
// import { useNavigate } from "react-router-dom";
import { useState } from 'react';

type ComponentProps = object


function Main({ }: ComponentProps) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState('')
  // const navigate = useNavigate();
  return (
    <div>
      <BasicModal open={open} setOpen={setOpen} state={state}/>
      <MapContainer center={[39.8283, -98.5795]} zoom={4}>
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=DEhmp08z0P2tXJ9G5ij4"
        />
        {
          statesData.features.map((state: any) => {
            const coordinates: any = state.geometry.coordinates[0].map((item: any) => [item[1], item[0]]);
            return (
              <Polygon
                key={state.id}
                pathOptions={{
                  fillColor: '#FD8D3C',
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  dashArray: '3',
                  color: 'white'
                }}
                positions={coordinates}
                eventHandlers={{
                  mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                      dashArray: "",
                      fillColor: "#BD0026",
                      fillOpacity: 0.7,
                      weight: 2,
                      opacity: 1,
                      color: "white",
                    })
                  },
                  mouseout: (e: any) => {
                    const layer = e.target;
                    layer.setStyle({
                      fillOpacity: 0.7,
                      weight: 2,
                      dashArray: "3",
                      color: 'white',
                      fillColor: '#FD8D3C'
                    });
                  },
                  click: () => {
                    setState(state.properties.name)
                    setOpen(!open)
                    // navigate(`/${state.properties.state}/${state.properties.town}/report`);
                  }
                }}
              />)
          })
        }
      </MapContainer>
    </div>

  )
}

export default Main

