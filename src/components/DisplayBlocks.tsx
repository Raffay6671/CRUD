import React from "react";
import "../DisplayBlocks.css";

const DisplayBlocks = ({ goalList, FormsCallback }) => {
  function handleEdit(index) {
    const selectedGoal = goalList[index];
    FormsCallback(selectedGoal.goal, selectedGoal.summary, index, 0, goalList);
  }

  function handleDelete(index) {
    console.log("The delete to be index: ", index);
    const updatedList = [...goalList];
    updatedList.splice(index, 1);
    FormsCallback("", "", null, 1, updatedList);
  }

  return (
    <div className="items">
      {goalList.map((item, index) => (
        <div key={index} className="displayBlocks">
          <div className="head1">
            <h3 style={{ color: "#f7e596", textAlign: "center" }}>
              {item.goal}
            </h3>
          </div>

          <div className="head2">
            <h3
              style={{
                color: "#d3d3d3",
                textAlign: "center",
                fontWeight: "300",
              }}
            >
              {item.summary}
            </h3>
          </div>

          <div className="Buttons">
            <button onClick={() => handleDelete(index)}>Delete</button>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayBlocks;
