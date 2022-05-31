import React, { useState, useEffect } from "react";
import Card from "../Content/Card";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const ParkList = ({setMapCenter}) => {
  const [parks, setParks] = useState([]);

  const key = "EL1Bl0NrfZIjxhIIUVPEsrnWNz5o0cWaaKhvyWa7";

  const searchInput = "starved rock";
  const url = `https://developer.nps.gov/api/v1/parks?q=${searchInput}&limit=10&api_key=${key}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setParks(res.data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <MDBContainer>
        <MDBRow className="mb-3">
          {parks.map((park) => (
            <MDBCol
              style={{ padding: "0", marginBottom: ".5rem" }}
              md="8"
              className="col-example"
            >
              <Card setMapCenter= {setMapCenter} park={park} />
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ParkList;
