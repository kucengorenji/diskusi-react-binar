import './App.css';
import ClassComponent from './components/1-react-component-basic/ClassComponent';
import FunctionComponent from './components/1-react-component-basic/FunctionComponent';
import PropsExample from './components/2-props-vs-state/PropsExample';
import StateExample from './components/2-props-vs-state/StateExample';

function App() {
  const props = {
    text: "World",
  }

  return (
    <div className="App">
      <ClassComponent text={props} />
      <FunctionComponent text={props} />
    </div>
  );
}

export default App;
