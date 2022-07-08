import logo from './logo.svg';
import './App.css';
import Wellcome1 from './wellcome';
import List from './list';
import Conditions from './condition';
import Wellcome_as_class_component from './wellcome_as_class_component';


  function Wellcome(props){
    return <h1>Hi {props.name} wellcome from wellcome function as component</h1>  //component as internal
  }
function App() {
  return (
    <div className="App">
        wellcome from app component
        <Wellcome name='Raissi'></Wellcome>
        <Wellcome1 name="Raissi" lastname="Anass"></Wellcome1>
        <Wellcome_as_class_component name="Raissi" lastname="Anass">Description</Wellcome_as_class_component>  
        <List></List>
        <Conditions></Conditions>
    </div>
    //props.children => Description if you want to show it
  );
}

export default App;
