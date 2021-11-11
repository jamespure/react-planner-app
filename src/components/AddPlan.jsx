import { useState } from "react";

const AddPlan = () => {
  const [plan, setPlan] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <form>
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
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control-check">
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
