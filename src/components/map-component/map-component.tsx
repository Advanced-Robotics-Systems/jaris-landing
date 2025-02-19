"use client";

import { Button, ButtonGroup } from "@nextui-org/react";
import { Map, Marker, useMap } from "@vis.gl/react-maplibre";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

import "maplibre-gl/dist/maplibre-gl.css";

const locations = [
  {
    name: "1st JARIS",
    latitude: 24.67376139412055,
    longitude: 46.72046574868544,
    link: "https://maps.app.goo.gl/hZ1akMiPkMF7idE2A?g_st=com.google.maps.preview.copy",
  },
  {
    name: "2nd JARIS",
    latitude: 24.666693923205354,
    longitude: 46.70306593318544,
    link: "https://maps.app.goo.gl/9zQsL4rdoA2ZJ5bPA?g_st=com.google.maps.preview.copy",
  },
  {
    name: "3rd JARIS",
    latitude: 24.666759071766748,
    longitude: 46.70879792698207,
    link: "https://maps.app.goo.gl/gdzRK9yG2GpEEeJZ8?g_st=com.google.maps.preview.copy",
  },
];

const MapComponent = () => {
  const [currentSchool, setCurrentSchool] = useState(0);
  const [isSame, setIsSame] = useState(false);

  const handlePress = (x: number) => {
    if (x == currentSchool) {
      setIsSame(true);
    } else {
      setCurrentSchool(x);
    }
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-y-3 bg-bg-text px-2 pt-3 pb-8">
      <div className="w-full h-[500px]">
        <Map
          initialViewState={{
            latitude: locations[0].latitude,
            longitude: locations[0].longitude,
            zoom: 16,
          }}
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
            <CustomMarker
              key={index}
              item={item}
              currentS={currentSchool}
              isS={isSame}
              setIsS={setIsSame}
            />
          ))}
        </Map>
      </div>
      <div className="flex gap-1 h-12 bg-bg-text">
        <ButtonGroup>
          <Button
            className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full w-28 cursor-pointer hover:bg-black/20 transition-background"
            onPress={() => handlePress(0)}
          >
            1st JARIS
          </Button>
          <Button
            className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full w-28 cursor-pointer hover:bg-black/20 transition-background"
            onPress={() => handlePress(1)}
          >
            2nd JARIS
          </Button>
          <Button
            className="flex items-center justify-center bg-jaris-white text-jaris-blue text-xs text-center font-bold h-full w-28 cursor-pointer hover:bg-black/20 transition-background"
            onPress={() => handlePress(2)}
          >
            3rd JARIS
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

const CustomMarker = ({
  item,
  currentS,
  isS,
  setIsS,
}: {
  item: { name: string; latitude: number; longitude: number; link: string };
  currentS: number;
  isS: boolean;
  setIsS: Dispatch<SetStateAction<boolean>>;
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
  }, [map, currentS, isS]);

  return (
    <Marker
      longitude={item.longitude}
      latitude={item.latitude}
      color="black"
      onClick={() => {
        window.open(item.link, "_blank");
      }}
    />
  );
};

export default MapComponent;
