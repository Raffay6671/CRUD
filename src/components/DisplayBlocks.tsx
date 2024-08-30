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
    <div>
      {goalList.map((item, index) => (
        <div key={index} className="displayBlocks">
          <div className="displayGoals">
            <h3>{item.goal}</h3>
          </div>
          <div className="displaySummary">
            <h3>{item.summary}</h3>
          </div>
          <button className="btn1" onClick={() => handleDelete(index)}>
            Delete
          </button>
          <button className="btn2" onClick={() => handleEdit(index)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default DisplayBlocks;
