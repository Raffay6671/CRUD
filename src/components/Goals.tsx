import React, { useState } from "react";
import "../Goals.css";

const Goals = () => {
  const [goal, setGoal] = useState("");
  const [summary, setSummary] = useState("");
  const [goalList, setGoalList] = useState([]);
  const [addGoalButton, setAddGoalButton] = useState(1);
  const [editIndex, setEditIndex] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (goal === "" || summary === "") {
      alert("Please fill in both fields.");
      return;
    }

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

  function onDelete(index) {
    const updatedList = [...goalList];
    updatedList.splice(index, 1);
    setGoalList(updatedList);
  }

  function onEdit(index) {
    setAddGoalButton(0);
    const selectedItem = goalList[index];
    setGoal(selectedItem.goal);
    setSummary(selectedItem.summary);
    setEditIndex(index);
  }

  return (
    <div className="container">
      <div className="profile-img">
        <img src="src\assets\images\goals.jpg" alt="Profile Image" />
      </div>
      <h1 className="TopFont">Your Goals Here</h1>
      <form onSubmit={handleSubmit}>
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

      {goalList.map((item, index) => (
        <div key={index} className="displayBlocks">
          <div className="displayGoals">
            <h3>{item.goal}</h3>
          </div>

          <div className="displaySummary">
            <h3>{item.summary}</h3>
          </div>

          <button className="btn1" onClick={() => onDelete(index)}>
            Delete
          </button>

          <button className="btn2" onClick={() => onEdit(index)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default Goals;
