import { FaTimes } from "react-icons/fa";
const Plan = ({ plan, onDelete, onToggle }) => {
  return (
    <div className={`plan ${plan.reminder && 'reminder' }`} onDoubleClick={() => onToggle(plan.id)}>
      <h3>
        {plan.plan}{" "}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(plan.id)} />
      </h3>
      <p>{plan.day}</p>
    </div>
  );
};

export default Plan;
