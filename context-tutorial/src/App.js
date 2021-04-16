import './App.css';
import SelectColors from './components/SelectColors';
import ColorContext, { ColorProvider } from './contexts/color';
import ColorBox from './contexts/ColorBox';

function App() {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
