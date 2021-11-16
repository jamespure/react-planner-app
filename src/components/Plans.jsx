import Plan from "./Plan";

const Plans = ({ plans, onDelete }) => {
  return (
    <>
      {plans.map((plan) => (
        <Plan plan={plan} key={plan.id} onDelete={onDelete}/>
      ))}
    </>
  );
};

export default Plans;
