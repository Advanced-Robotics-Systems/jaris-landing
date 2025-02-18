"use client";

import { Button, ButtonGroup } from "@nextui-org/react";
import { Map, Marker } from "@vis.gl/react-maplibre";
import { useEffect, useState } from "react";

import "maplibre-gl/dist/maplibre-gl.css";

const locations = [
  {
    name: "1st JARIS",
    // latitude: 24.67376139412055,
    // longitude: 46.72046574868544,
    latitude: 24.673761,
    longitude: 46.720466,
  },
  {
    name: "2nd JARIS",
    // latitude: 24.666693923205354,
    // longitude: 46.70306593318544,
    latitude: 24.666694,
    longitude: 46.703066,
  },
  {
    name: "3rd JARIS",
    // latitude: 24.666759071766748,
    // longitude: 46.70879792698207,
    latitude: 24.666759,
    longitude: 46.708798,
  },
];

const MapComponent = () => {
  const [viewState, setViewState] = useState({
    latitude: locations[0].latitude,
    longitude: locations[0].longitude,
    zoom: 16,
  });

  const [currentSchool, setCurrentSchool] = useState(0);

  useEffect(() => {
    setViewState({
      latitude: locations[currentSchool].latitude,
      longitude: locations[currentSchool].longitude,
      zoom: 16,
    });
  }, [currentSchool]);

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-y-3 bg-bg-text px-2 pt-3 pb-8 border border-black">
      <div className="w-full h-[500px]">
        <Map
          {...viewState}
          onMove={(e) => setViewState(e.viewState)}
          mapStyle="https://tiles.openfreemap.org/styles/liberty"
          attributionControl={false}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          {locations.map((item, index) => (
            <Marker
              key={index}
              longitude={item.longitude}
              latitude={item.latitude}
              color="black"
            />
          ))}
        </Map>
      </div>
      <div className="flex gap-1 h-12 bg-bg-text">
        <ButtonGroup>
          <Button className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full w-28 cursor-pointer hover:bg-black/20 transition-background">
            1st JARIS
          </Button>
          <Button className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full w-28 cursor-pointer hover:bg-black/20 transition-background">
            2nd JARIS
          </Button>
          <Button className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full w-28 cursor-pointer hover:bg-black/20 transition-background">
            3rd JARIS
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default MapComponent;
