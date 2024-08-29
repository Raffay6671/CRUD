import React, { useState } from "react";
import "../Goals.css";

const Goals = () => {
  const [goal, setGoal] = useState("");
  const [summary, setSummary] = useState("");
  const [DisplayGoal, setDisplayGoal] = useState("");
  const [DisplaySummary, setDisplaySumamry] = useState("");
  const [list, setList] = useState("");
  const [goalList, setGoalList] = useState([]);
  const [addGoalButton, setAddGoalButton] = useState(1);

  function handleSubmit(e) {
    setAddGoalButton(1);
    e.preventDefault();
    console.log("The Goal Value", goal);
    console.log("The Summary Value", summary);
    if (goal === "" || summary === "") {
      alert("Please fill in both fields.");
      return;
    } else {
      const newGoal = {
        goal: goal,
        summary: summary,
      };

      setGoalList([...goalList, newGoal]);
      setGoal("");
      setSummary("");
      setDisplayGoal(`${goal}`);
      setDisplaySumamry(`${summary}`);
    }
  }

  function handleChangeGoal(e) {
    setGoal(e.target.value);
    // console.log("The Goal value: ", goal);
  }

  function handleChangeSummary(e) {
    setSummary(e.target.value);
    // console.log("The Summary value: ", summary);
  }

  function onDelete(index) {
    console.log("Index passed to Delete Function: ", index);
    const updatedList = [...goalList];
    updatedList.splice(index, 1);
    setGoalList(updatedList);
  }

  function editClicked(index) {
    const updatedList = [...goalList];
    updatedList.splice(index, 1);
    setGoalList(updatedList);
  }
  function onEdit(index) {
    setAddGoalButton(0);
    console.log("The Edit function is pressed", index);

    const selectedItem = goalList[index];

    const goal = selectedItem.goal;
    const summary = selectedItem.summary;

    setGoal(goal);
    setSummary(summary);
    editClicked(index);
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
            <h3>
              {item.goal}
              {/* {index} */}
            </h3>
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
