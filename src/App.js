import Form from "./Form";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context";
import Counter from "./pages/Counter";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
