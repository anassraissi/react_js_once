import logo from './logo.svg';
import './App.css';
import Wellcome1 from './wellcome';
import Wellcome_as_class_component from './wellcome_as_class_component';

  function Wellcome(){
    return <h1>Hi anass wellcome from wellcome function as component</h1>  //component as internal
  }
function App() {
  return (
    <div className="App">
        wellcome from app component
        <Wellcome></Wellcome>
        <Wellcome1></Wellcome1>
        <Wellcome_as_class_component></Wellcome_as_class_component>
    </div>
  );
}

export default App;
