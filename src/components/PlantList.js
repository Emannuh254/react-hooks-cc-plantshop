// PlantList.js
import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePlant }) {
  return (
    <ul className="cards">
      {plants.length > 0 ? (
        plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onUpdatePlant={onUpdatePlant}
          />
        ))
      ) : (
        <p>No plants found</p>
      )}
    </ul>
  );
}

export default PlantList;
