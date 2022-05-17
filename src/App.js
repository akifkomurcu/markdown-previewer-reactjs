import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Result from "./components/Result";


function App() {

  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>

      <section class="layout">
        <div class="input">

          <Input text={text} handleChange={handleChange} setText={setText} />
        </div>
        <div class="result">
          <Result text={text} />
        </div>
      </section>
    </>
  );
}

export default App;
