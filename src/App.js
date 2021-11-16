import { useState, useEffect } from "react";
import AddPlan from "./components/AddPlan";
import Header from "./components/Header";
import Plans from "./components/Plans";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const getPlans = async () => {
      const plans = await fetchPlansFromServer();
      setPlans(plans);
    };
    getPlans();
  }, []);

  // fetch plans from server
  const fetchPlansFromServer = async () => {
    const res = await fetch("http://localhost:5000/plans");
    const data = await res.json();

    return data;
  };

  // fetch plan from server
  const fetchPlan = async (id) => {
    const res = await fetch(`http://localhost:5000/plans/${id}`);
    const data = await res.json();

    console.log(data);
    return data;
  };

  // add a new plan
  const onAdd = async (plan) => {
    const res = await fetch("http://localhost:5000/plans", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(plan),
    });

    const data = await res.json();

    setPlans([...plans, data]);
  };

  // delete plan
  const deletePlan = async (id) => {
    await fetch(`http://localhost:5000/plans/${id}`, {
      method: "DELETE",
    });
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  // toggle Reminder
  const toggleReminder = async (id) => {
    const planToToggle = await fetchPlan(id);
    const updPlan = { ...planToToggle, reminder: !planToToggle.reminder };

    const res = await fetch(`http://localhost:5000/plans/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updPlan),
    });

    const data = await res.json();

    setPlans(
      plans.map((plan) =>
        plan.id === id ? { ...plan, reminder: data.reminder } : plan
      )
    );
  };

  return (
    <div className="container">
      <Header showAdd={showAdd} onAdd={() => setShowAdd(!showAdd)} />
      {showAdd && <AddPlan onAdd={onAdd} />}
      {plans.length > 0 ? (
        <Plans plans={plans} onDelete={deletePlan} onToggle={toggleReminder} />
      ) : (
        "No Plan To Show"
      )}
    </div>
  );
}

export default App;
