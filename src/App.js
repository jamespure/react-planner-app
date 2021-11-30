import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import AddPlan from "./components/AddPlan";
import Header from "./components/Header";
import Plans from "./components/Plans";
import { fetchPlans } from './redux/actions/plansActions';

function App({ fetchPlans, plans }) {
  const [showAdd, setShowAdd] = useState(false);
  

  useEffect(() => {
    fetchPlans()
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

    
  };

  // delete plan
  const deletePlan = async (id) => {
    await fetch(`http://localhost:5000/plans/${id}`, {
      method: "DELETE",
    });
    
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

    // setPlans(
    //   plans.map((plan) =>
    //     plan.id === id ? { ...plan, reminder: data.reminder } : plan
    //   )
    // );
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

const mapStateToProps = (state) => ({
  plans: state.plans.items
})

export default connect(mapStateToProps, { fetchPlans })(App);
