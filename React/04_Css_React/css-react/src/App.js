import './App.css';
import MyComponent from './components/MyComponent';

function App() {

  let inlineCss = {
    backgroundColor: "gray",
    color: "blue",
    borderRadius: "8px",
    border: "1px solid blue"
  }

  return (
    <div className="App">
      {/* Global CSS (index.css)*/}
      <h1>React com CSS</h1>

      {/* CSS de Componente (MyComponent.css)*/}
      <MyComponent />

      {/* CSS inline */}
      <div style={inlineCss}>
        Esse CSS está sendo aplicado inline
      </div>
    </div>
  );
}

export default App;
