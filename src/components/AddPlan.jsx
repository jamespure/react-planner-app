import { useState } from "react";

const AddPlan = ({ onAdd }) => {
  const [plan, setPlan] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const newPlan = { plan, day, reminder };

    if (!plan && !setDay) {
      alert("Please enter a plan and date");
      return;
    }

    onAdd(newPlan);

    setReminder(false);
    setPlan("");
    setDay("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="plan">Plan</label>
        <input
          type="text"
          name="plan"
          placeholder="Enter A Plan"
          onChange={(e) => setPlan(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="plan">Day & Time</label>
        <input
          type="text"
          name="date"
          placeholder="Enter Date & Time"
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="plan">Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddPlan;
