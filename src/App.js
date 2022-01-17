import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {PrivateRoute } from "./PrivateRoute";
import Admin from "./components/Admin"
import Users from "./components/Users";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        ></Route>
      
        <Route path="/users" element={<Users />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
