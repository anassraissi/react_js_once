import React,{Component} from "react";

class Wellcome_as_class_component extends Component{

        constructor(props){
                super(props)
                this.decrement_by_function=this.decrement_by_function.bind(this)  //for not reputing bind(this) in each use of it // this mean send class to it
        }
    state ={   //state as local parametre on using in component
        age:14,
        user:{
            name:'Anass',
            lastname:'Raissi',
        }
    }  
   
    decrement=()=>{
       {this.setState({age:this.state.age-1})}
    }
    decrement_by_function(){  //this parametre serve to use class atrebute in function like that
       {this.setState({age:this.state.age-1})}  
    }
    update_name(event){
        console.log(event.target.value); //ayi haja tzadet fi text yjbadha hit ghankhadmo biha 
        const new_name=event.target.value;
        this.setState({
                user:{
                    ...this.state.user,  //bach man3awdoch ga3 data li m3aha ila bghina nbadlo ghawahed  bhal lastname:this.state.user.lastname
                    name:new_name,
                    // lastname:this.state.user.lastname
                }
        });

    }
        socialsLinks=['facebook','twitter'];
    render(){  //componant as class external file
        return <div>hi {this.props.name+' '+this.props.lastname} im from wellcome_as_class_component my age is  
        {this.state.age}
        <p>{this.props.children} add the value of declaring component</p> <br></br>
         <p>your name : {this.state.user.name} and  lastname : {this.state.user.lastname} and about socials site is {this.socialsLinks}</p>
         <button onClick={()=>{this.setState({age :this.state.age+1})}}>Incresse Age</button> 
         <button onClick={this.decrement}>Decresse</button>
         <button onClick={this.decrement_by_function.bind(this)}>Decresse by fucntion</button> 
         <button onClick={this.decrement_by_function}>Decresse by fucntion constructor</button> 
         <br></br>
         <input type='text' value={this.state.user.name} onChange={this.update_name.bind(this)}></input>
        </div> 
    }
} 
export default Wellcome_as_class_component;