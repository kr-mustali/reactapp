import Form from "./Form";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
