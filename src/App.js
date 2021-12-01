import './App.css';
import ClassComponent from './components/1-react-component-basic/ClassComponent';
import FunctionComponent from './components/1-react-component-basic/FunctionComponent';
import PropsExample from './components/2-props-vs-state/PropsExample';
import PropsExampleFunction from './components/2-props-vs-state/PropsExampleFunction';
import StateExample from './components/2-props-vs-state/StateExample';
import HooksExample from './components/3-hooks/HooksExample';
import ModuleCss from './components/4-styling-component/ModuleCss';
import Counter from './components/5-contoh-lain/Counter';

function App() {
  return (
    <div className="App">
      <ClassComponent text="world, ini class component" />
      <FunctionComponent text="World!, ini function component" />
      <PropsExample text="contoh tambahan props example" />
      <PropsExampleFunction text="ini text tambahan di function component" />
      <StateExample />
      <HooksExample />
      <ModuleCss />
      <Counter />
    </div>
  );
}

export default App;
