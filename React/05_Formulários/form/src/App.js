import logo from './logo.svg';
import './App.css';

import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>

      <h4>Form de criação</h4>
      <MyForm />

      <h4>Form de edição</h4>
      <MyForm name="Evelyn Braga" email="eve@gmail.com" bio="Uma menina criativa e interessante..." role="admin" />
    </div>
  );
}

export default App;
