"use client";

import { Button, ButtonGroup } from "@nextui-org/react";
import { Map, Marker, Popup, useMap } from "@vis.gl/react-maplibre";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

import "maplibre-gl/dist/maplibre-gl.css";

const locations = [
  {
    name: "First Jawahir Al-Riyadh International School",
    shortName: "1st JARIS",
    latitude: 24.67376139412055,
    longitude: 46.72046574868544,
    link: "https://maps.app.goo.gl/eFrrf9gdjxkWTtJ58",
  },
  {
    name: "Second Jawahir Al-Riyadh International School",
    shortName: "2nd JARIS",
    latitude: 24.67951705954089,
    longitude: 46.721798275619086,
    link: "https://maps.app.goo.gl/UjTKJryDtM7BMBDH9",
  },
  {
    name: "Third Jawahir Al-Riyadh International School",
    shortName: "3rd JARIS",
    latitude: 24.666759071766748,
    longitude: 46.70879792698207,
    link: "https://maps.app.goo.gl/6aoqnpki2NJXXJoT6",
  },
];

const MapComponent = () => {
  const [currentSchool, setCurrentSchool] = useState(0);
  const [isSame, setIsSame] = useState(false);
  const [zoom, setZoom] = useState(16);

  const handlePress = (x: number) => {
    if (x == currentSchool) {
      setIsSame(true);
    } else {
      setCurrentSchool(x);
    }
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col items-center gap-y-3 bg-bg-text px-2 pt-3 pb-8 rounded-lg">
      <div className="w-full h-64 sm:h-96 lg:h-[500px]">
        <Map
          initialViewState={{
            latitude: locations[0].latitude,
            longitude: locations[0].longitude,
            zoom: 16,
          }}
          onZoom={(e) => setZoom(e.viewState.zoom)}
          minZoom={12}
          maxZoom={17}
          mapStyle="https://tiles.openfreemap.org/styles/liberty"
          attributionControl={false}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          {locations.map((item, index) => (
            <CustomMarker
              key={index}
              item={item}
              currentS={currentSchool}
              isS={isSame}
              setIsS={setIsSame}
              zoom={zoom}
            />
          ))}
        </Map>
      </div>
      <div className="flex flex-col xl:flex-row items-center gap-2 justify-between w-full xl:h-12 bg-bg-text">
        <ButtonGroup fullWidth size="sm" className="max-w-96 h-12 xl:h-full">
          <Button
            className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full flex-1 cursor-pointer hover:bg-black/20 transition-background"
            onPress={() => handlePress(0)}
          >
            1st JARIS
          </Button>
          <Button
            className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full flex-1 cursor-pointer hover:bg-black/20 transition-background border-x border-gray-300"
            onPress={() => handlePress(1)}
          >
            2nd JARIS (Boys)
          </Button>
          <Button
            className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full flex-1 cursor-pointer hover:bg-black/20 transition-background"
            onPress={() => handlePress(2)}
          >
            3rd JARIS
          </Button>
        </ButtonGroup>
        <span className="text-gray-400 text-center">
          Click on the Map Marker to open in Google Maps!
        </span>
      </div>
    </div>
  );
};

const CustomMarker = ({
  item,
  currentS,
  isS,
  setIsS,
  zoom,
}: {
  item: (typeof locations)[0];
  currentS: number;
  isS: boolean;
  setIsS: Dispatch<SetStateAction<boolean>>;
  zoom: number;
}) => {
  const { current: map } = useMap();

  useEffect(() => {
    if (!map) return;
    if (!isS) {
      map.flyTo({
        center: [locations[currentS].longitude, locations[currentS].latitude],
        zoom: 16,
      });
    } else {
      map.flyTo({
        center: [locations[currentS].longitude, locations[currentS].latitude],
        zoom: 16,
      });
      setIsS(false);
    }
  }, [map, currentS, isS, setIsS]);

  return (
    <>
      <Marker
        longitude={item.longitude}
        latitude={item.latitude}
        color="black"
        onClick={() => {
          window.open(item.link, "_blank");
        }}
        style={{
          cursor: "pointer",
        }}
      />
      {zoom > 12.85 && (
        <Popup
          longitude={item.longitude}
          latitude={item.latitude}
          closeButton={false}
          closeOnClick={false}
          anchor="bottom"
          offset={[0, -35]}
        >
          {zoom > 14.4 ? (
            <span className="inline-block text-sm font-semibold text-black text-center">
              {item.name}
            </span>
          ) : (
            <span className="inline-block text-xs font-semibold text-black text-center">
              {item.shortName}
            </span>
          )}
        </Popup>
      )}
    </>
  );
};

export default MapComponent;
