import React from "react";   //component as function external file
function Conditions(props){   
    const age=23; 
        return <div>
            {age>12 ? <div>you are older than 12</div> : <div>you are smaller than 12</div> } 
            {age>22 ? <div>you are older than 22</div> : null } 

        </div>
   
}
export default Conditions;