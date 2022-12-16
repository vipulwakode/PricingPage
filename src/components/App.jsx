import React from "react";
import Payment from "./Payment";
import { useState } from "react";
import Plans from "./Plans";

function App(){
   const [isDone,setisDone] = useState(false);
   function pay(){
     setisDone(true);
   }
    return ((isDone)?<Payment/>:<Plans
      isPay={pay}
    />);
}
export default App;