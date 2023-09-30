import About from "./pages/About";
import Admin from "./pages/Admin";
import Book from "./pages/Book";
import Fleet from "./pages/Fleet";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

function App() {
  const [token, setToken] = useState();

  return (
    <>
      <UserContext.Provider value={{ token, setToken }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book" element={<Book />} />
          <Route path="/model" element={<Fleet />} />
          <Route path="/admin" element={ <Admin /> } />
          <Route path='*' element={<NotFound />} />
          <Route path='/unauthorized' element={<Unauthorized />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
