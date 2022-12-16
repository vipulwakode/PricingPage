import React from "react";
import data from "./db.json";
import Plan from "./Plan"
function Plans(props){
    return ( <div>
                <div className="title">
                    <h1>Unlock worry free parenting for you</h1>
                    <p>Get Pediatrician led holistic care for your baby</p>
                </div>
                <div className="container-fluid ">
        <div className="row">
    {
        data.map( item =>{
            return (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <Plan
                    planName={item.planname}
                    planBenefits={item.planbenefits}
                    planPrice={item.planvaliditywithprice}
                    payNow = {props.isPay}
                   />
                  </div>
                )
        })
    }
      </div>
    </div>
    </div>);
}
export default Plans;