import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import { Input } from "../shared/ui/input";
import { Slect } from "../shared/ui/select";
import { Button } from "../shared/ui";
import { Preloader } from "../shared/ui/preloader/preloader";
import { Header } from "../shared/ui/header";

function App() {
  const [count, setCount] = useState(4);

  return (
    <>
      <div>
        <Header />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <h1>Vite + React</h1>
      <div className="cardd">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <div>
          <Input label="label" />
          <Slect />
          <Button>btn</Button>
          <Preloader />
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
