import Plan from "./Plan";

const Plans = ({ plans, onDelete, onToggle }) => {
  return (
    <>
      {plans.map((plan) => (
        <Plan
          plan={plan}
          key={plan.id}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Plans;
