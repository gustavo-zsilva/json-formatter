import { Input } from './components/Input';
import { Button } from './components/Button';
import { Output } from './components/Output';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Input />
      <Button>Generate</Button>
      <Output />
    </div>
  );
}

export default App;
