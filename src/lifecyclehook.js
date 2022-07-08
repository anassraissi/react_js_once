import React,{Component} from "react";
class LifeCycleHook extends Component{
    constructor(props){
        super(props);
        this.state={
            time:new Date
        }
}
        componentDidMount(){   //methode dyal  phase flife dyal component smitha mounting => bhal setting  
            setInterval(()=> {
                this.setState({
                    time:new Date
                });
            },1000)
        }
    render(){
        return <div>
            time is {this.state.time.toLocaleTimeString()}
        </div>
    }

}
export default LifeCycleHook;