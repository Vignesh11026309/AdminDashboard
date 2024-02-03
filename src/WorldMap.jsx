import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { countries, missingCountries } from "./Countries";

function WorldMap() {
  const lightGreen = "#a5d6a7"; // Define light green color
  const darkGreen = "#88c98c"; // Define dark green color

  return (
    <div
      style={{
        margin: "auto",
        width: "450px",
        height: "450px",
        backgroundColor: "white",
      }}
    >
      <style>{`
        .jvectormap-region {
          fill: ${lightGreen} !important; /* Set default fill color to light green */
          stroke: ${lightGreen} !important; /* Set default border color to light green */
          transition: fill 0.2s, stroke 0.2s; /* Add transition effect */
        }
        .jvectormap-region:hover {
          fill: ${darkGreen} !important; /* Set hover fill color to dark green */
          stroke: ${darkGreen} !important; /* Set hover border color to dark green */
        }
      `}</style>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        backgroundColor="white"
        markers={[]}
        zoomButtons={false}
        zoomOnScroll={false}
        series={{
          regions: [
            {
              scale: {},
              values: { ...countries, ...missingCountries },
              min: 0,
              max: 100,
            },
          ],
        }}
        onRegionTipShow={function reginalTip(event, label, code) {
          return label.html(`
            <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
              <p>
                <b>
                  ${label.html()}
                </b>
              </p>
              <p>
                ${countries[code]}
              </p>
            </div>`);
        }}
        onMarkerTipShow={function markerTip(event, label, code) {
          return label.html(`
            <div style="background-color: white; border-radius: 6px; min-height: 50px; width: 125px; color: black !important; padding-left: 10px">
              <p style="color: black !important;">
                <b>
                  ${label.html()}
                </b>
              </p>
            </div>`);
        }}
      />
    </div>
  );
}

export default WorldMap;
