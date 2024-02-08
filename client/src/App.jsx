import CssBaseline from "@mui/material/CssBaseline";
import { Home, Pizzas, Toppings } from "./Pages";
import { Header } from "./Components";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <main>
      <CssBaseline>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pizzas" element={<Pizzas/>}/>
          <Route path="/toppings" element={<Toppings/>}/>
        </Routes>

      </CssBaseline>
    </main>
  );
}

export default App;
