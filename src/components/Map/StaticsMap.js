import React from "react";
import GoogleMapReact from "google-map-react";

const SimpleMap = ({ children }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCmO0xFUKfIOQwM24c0AsB8kizHR5vQkzs" }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={4}
      >
        {children.map((country) => {
          return (
            <div
              lat={country.countryInfo.lat}
              lng={country.countryInfo.long}
              style={{
                color: "black",
                height: "100px",
                width: "200px",
                align: "center",
                background: "rgba(255,255,255,.3)",
              }}
            >
              <p>
                <img
                  height="15px"
                  src={country.countryInfo.flag}
                  alt="Bandeira País"
                />
                <b> {country.country}</b>
                <br />
                População: <b>{country.population.toLocaleString("pt")}</b>
                <br />
                Casos confirmados: <b>{country.cases.toLocaleString("pt")}</b>
                <br />
                Óbitos: <b>{country.deaths.toLocaleString("pt")}</b>
              </p>
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
