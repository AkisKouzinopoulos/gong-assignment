import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { Users } from "./pages/Users";
import { getUser } from "./services/auth";

function App() {
  const user = getUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/users" /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={user ? <Users /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
