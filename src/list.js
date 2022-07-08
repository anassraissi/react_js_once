import React from "react";   //component as function external file
function List(props){   
    const fruits=['Ananas','Bananas','AVocado']; //map hia function katsmahlina nmanipliw f arrrays kif ma bghina
        return <div>
         <ul>  
            {fruits.map(item=><li key={item}>{item}</li>)}  
        </ul>

        </div>
   
}
export default List;