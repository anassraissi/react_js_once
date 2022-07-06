import React,{Component} from "react";

class Wellcome_as_class_component extends Component{
    state ={   //state as local parametre on using in component
        age:14
    }  
    user={
        name:'Anass',
        lastname:'Raissi',
    }
        socialsLinks=['facebook','twitter'];
    render(){  //componant as class external file
        return <div>hi {this.props.name+' '+this.props.lastname} im from wellcome_as_class_component my age is  
        {this.state.age}
        <p>{this.props.children} add the value of declaring component</p> <br></br>
         <p>your name : {this.user.name} and  lastname : {this.user.lastname} and about socials site is {this.socialsLinks}</p>
        </div>
    }
} 
export default Wellcome_as_class_component;