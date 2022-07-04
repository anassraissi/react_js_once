import React,{Component} from "react";

class Wellcome_as_class_component extends Component{
    render(){  //componant as class external file
        return <div>hi {this.props.name+' '+this.props.lastname} im from wellcome_as_class_component 
        <p>{this.props.children} add the value of declaring component</p> 
        </div>
    }
} 
export default Wellcome_as_class_component;