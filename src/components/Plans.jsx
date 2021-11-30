import Plan from "./Plan";
import { connect } from 'react-redux';
import { fetchPlans } from './../redux/actions/plansActions';
import { useEffect } from "react";

const Plans = ({fetchPlans, plans}) => {
   useEffect(() => {
     if (fetchPlans()) {
       plans.unshift(...plans);
     }
   }, []);

  return (
    <>
      {plans.length > 0 ? plans.map((plan) => (
        <Plan
          plan={plan}
          key={plan.id}/>
      )): 'No Plan To Show'}
    </>
  );
};

const mapStateToProps = (state) => ({
  plans: state.plans.items,
});

export default connect(mapStateToProps,{fetchPlans})(Plans);
