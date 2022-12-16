import Home from "../components/Home";
import { CssBaseline } from "@material-ui/core";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import News from "../components/News";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/news" element={<News />} />
      </Routes>
      <CssBaseline />
    </div>
  );
}

export default App;
