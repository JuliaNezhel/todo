import "@fontsource/roboto/400.css";
import "@/shared/styles/index.scss";
import { Router } from "./routing";
import { TodoProvider } from "@/shared/hooks/todoContext";

function App() {
  return (
    <TodoProvider>
      <Router />
    </TodoProvider>
  );
}

export default App;
