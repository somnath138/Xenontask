import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { useState } from "react";
import RefrshHandler from "./RefrshHandler";
import Navigationbar from "./pages/Navigationbar";
import Listedproperty from "./pages/Listedproperty";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Navigationbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/home"
          element={<PrivateRoute element={<Home />} />}
        ></Route>
        <Route path="/property" element={<Listedproperty />}></Route>
        <Route path="/propertyDetails/:id" element={<PropertyDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
