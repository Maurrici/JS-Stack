import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* Global CSS (index.css)*/}
      <h1>React com CSS</h1>

      {/* CSS de Componente (MyComponent.css)*/}
      <MyComponent />
    </div>
  );
}

export default App;
