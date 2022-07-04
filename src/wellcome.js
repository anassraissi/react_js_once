import React from "react";   //component as function external file
function Wellcome1(props){
    return <h2>hi {props.name+' '+props.lastname} im from wellcome component as external file</h2>
}
export default Wellcome1;