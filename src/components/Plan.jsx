import { FaTimes } from "react-icons/fa";
const Plan = ({ plan, onDelete }) => {
  return (
    <div className="plan reminder">
      <h3>
        {plan.plan}{" "}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(plan.id)} />
      </h3>
      <p>{plan.day}</p>
    </div>
  );
};

export default Plan;
