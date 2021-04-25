import React from "react";

import { positionsList } from "../../constants/Labels";

function Filter(props) {
  return (
    <div>
      {Object.keys(positionsList).map((key, i) => {
        return (
          <div key={i} onClick={() => props.filterEmployeeInit(key)}>
            {positionsList[key]}
          </div>
        );
      })}
    </div>
  );
}

export default Filter;
