// Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpression";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";
import Challenge from "./components/Challenge";

// Style - CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression />
      <MyComponent/>
      <Events/>
      <hr />
      <Challenge/>
    </div>
  );
}

export default App;
