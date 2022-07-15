import React from "react";   //component as function external file
function Conditions(props){   
    const age=23;
    const Salaire=5000;
    let afficher='';
    if(Salaire>5000){
        // afficher='You are rich man';
        afficher=<h1>You are rich man bro</h1>;

    }
    else{
        // afficher='you are poor man';        afficher=<h1>You are rich man<h1/>;

        afficher=<h1>You are poor man bro</h1>;

    }
    let users=[
        {id:1,name:'Anass',age:27},
        {id:2,name:'marouane',age:26},
        {id:3,name:'ALi',age:25}
    ]
        return <div>
            <hr></hr>
            {age>12 ? <div>you are older than 12</div> : <div>you are smaller than 12</div> } 
            {age>22 ? <div>you are older than 22</div> : null } 
            {afficher}
            <ul>
            {users.map((users,index) => <li  key={users.id}>{index} : {users.name}</li>)}
            </ul>
 
        </div>
   
}
export default Conditions;