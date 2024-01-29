import Form from "./Form";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context";
import Counter from "./pages/Counter";
import Restapi from "./pages/Restapi";
import GithubUserSearch from "./pages/GithubUserSearch";
import PasswordValidator from "./pages/PasswordValidator";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/restapi" element={<Restapi />} />
          <Route path="/gitsearch" element={<GithubUserSearch />} />
          <Route path="/passvalid" element={<PasswordValidator />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
