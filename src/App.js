import { useEffect } from "react";
import "./App.css";
import Container from './components/container';

function App() {
  useEffect(() => {
    document.title = "Robot Cards";
  }, []);
  return (
    <div>
      <Container />
    </div>
  );
}

export default App;
