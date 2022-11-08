import logo from './logo.svg';
import './App.css';
import StateTutorial from './hooks/useState/StateTutorial';
import ReducerTutorial from './hooks/useReducer/ReducerTutorial';
import EffectTutorial from './hooks/useEffect/EffectTutorial';
import RefTutorial from './hooks/useRef/RefTutorial';
import LayoutTutorial from './hooks/useLayout/LayoutTutorial';

function App() {
  return (
    <div className="App">
        <LayoutTutorial />
    </div>
  );
}

export default App;
