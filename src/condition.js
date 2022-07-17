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

    function Age(props){
        
        let age_template='';  

            if(props.age>10){
               age_template= <h1>you are older man</h1>
            }
            else{
               age_template=<h1>You are yonger man</h1>

            }
            return age_template;
            
        
        }
           let users=[
            {id:1,name:'Anass',age:27},
            {id:2,name:'marouane',age:26},
            {id:3,name:'ALi',age:25}
        ];  
        function User_list(props){
            const user=props.user;
            <ul>
            {user.map((user,index)=><li key={user.id}> {index} :{user.name}</li>)}  
            </ul>
        }
        
            return <div>
                <hr></hr> 
                {afficher}
              
                <hr></hr>
                <Age age={12}></Age>
                <Age age={9}></Age>
                <User_list user={users}></User_list>     
            </div>
    }
  
   

export default Conditions;