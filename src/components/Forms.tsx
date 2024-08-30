import React, { useState } from "react";
import "../Forms.css";
import DisplayBlocks from "./DisplayBlocks";

const HeaderComponent = () => {
  const [goal, setGoal] = useState("");
  const [summary, setSummary] = useState("");
  const [goalList, setGoalList] = useState([]);
  const [addGoalButton, setAddGoalButton] = useState(1);
  const [editIndex, setEditIndex] = useState(null);
  const [submit, setSubmit] = useState(1);

  function FormsCallback(goal, summary, editIndex, addGoalButton, goalList) {
    setGoal(goal);
    setSummary(summary);
    setEditIndex(editIndex);
    setAddGoalButton(addGoalButton);
    setGoalList(goalList);

    console.log("Parent Goal", goal);
    console.log("Parent Summary", summary);
    console.log("Edit Button Value", editIndex);
    console.log("Add Goal Button Value", addGoalButton);
    console.log("The data", goalList);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (goal === "" || summary === "") {
      alert("Please fill in both fields.");
      return;
    }

    setSubmit(0);

    const newGoal = {
      goal: goal,
      summary: summary,
    };

    if (addGoalButton === 0 && editIndex !== null) {
      const updatedList = [...goalList];
      updatedList[editIndex] = newGoal;
      setGoalList(updatedList);
      setEditIndex(null);
    } else {
      setGoalList([...goalList, newGoal]);
    }

    setGoal("");
    setSummary("");
    setAddGoalButton(1);
  }

  function handleChangeGoal(e) {
    setGoal(e.target.value);
  }

  function handleChangeSummary(e) {
    setSummary(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="Form">
        <div className="input-group">
          <label htmlFor="goal">Your Goal</label>
          <input
            type="text"
            id="goal"
            name="goal"
            placeholder="Your goal"
            onInput={handleChangeGoal}
            value={goal}
          />
        </div>
        <div className="input-group">
          <label htmlFor="summary">Short Summary</label>
          <input
            type="text"
            id="summary"
            name="summary"
            placeholder="Short summary"
            onInput={handleChangeSummary}
            value={summary}
          />
        </div>
        {addGoalButton === 1 && (
          <button type="submit" className="btn">
            Add Goal
          </button>
        )}

        {addGoalButton === 0 && (
          <button type="submit" className="btn4">
            Edit
          </button>
        )}
      </form>

      {/* {submit === 1 && (
        <div className="alert">
          <div className="container">
            <h4>No course Goals yet</h4>
          </div>
        </div>
      )} */}

      <DisplayBlocks goalList={goalList} FormsCallback={FormsCallback} />
    </div>
  );
};

export default HeaderComponent;
