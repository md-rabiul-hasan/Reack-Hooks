import logo from './logo.svg';
import './App.css';
import StateTutorial from './hooks/useState/StateTutorial';
import ReducerTutorial from './hooks/useReducer/ReducerTutorial';
import EffectTutorial from './hooks/useEffect/EffectTutorial';
import RefTutorial from './hooks/useRef/RefTutorial';
import LayoutTutorial from './hooks/useLayout/LayoutTutorial';
import ImperativeHandle from './hooks/useImperativeHandle/ImperativeHandle';
import ContextTutorial from './hooks/useContext/ContextTutorial';

function App() {
  return (
    <div className="App">
        <ContextTutorial />
    </div>
  );
}

export default App;
