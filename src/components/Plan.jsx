import React from "react";
function Plan(props){
    function handleClick(){
       props.payNow();
    }
    return ( <div>
    <h1 className="heading">{props.planName}</h1>
      <ul>
        {
        props.planBenefits.map(item => {
        return (
          <li>
            {   
               item.split(':').map((ele,index) => {
                   return ((index)?<strong>: {ele}</strong>:ele);
                }
                )
            }
         </li>
        )
         })
        }
      </ul>
      <div className="price">
         {
          props.planPrice.map(item => {
           return (<div>
                         <blockquote className="blockquote">
                            <strong>₹ {item.price} for {item.planduration}</strong>
                            <button onClick={handleClick} className="animated-border-button"><strong>Pay Now</strong></button>
                         </blockquote>
                  </div>)
           })
         }
      </div>
    </div>);
}
export default Plan;