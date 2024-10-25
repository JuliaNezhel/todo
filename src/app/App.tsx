import "@fontsource/roboto/400.css";
import "../shared/styles/index.scss";
import { TodoProvider } from "../shared/hooks/todoContext";
import { Router } from "./routing";

function App() {
  return (
    <TodoProvider>
      <Router />
    </TodoProvider>
  );
}

export default App;
