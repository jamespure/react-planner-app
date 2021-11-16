import { useState, useEffect } from "react";
import AddPlan from "./components/AddPlan";
import Header from "./components/Header";
import Plans from "./components/Plans";

function App() {
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

  return (
    <div className="container">
      <Header />
      <AddPlan onAdd={onAdd} />
      {plans.length > 0 ? (
        <Plans plans={plans} onDelete={deletePlan} />
      ) : (
        "No Plan To Show"
      )}
    </div>
  );
}

export default App;
