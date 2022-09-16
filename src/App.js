import "./index.css";
import React from "react";
import Account from "./components/Account";
import Singin from "./components/Singin";
import SignUp from "./components/SignUp.jsx";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProductRoute from "./components/ProductRoute";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Firebase Auth & Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Singin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <ProductRoute>
                {" "}
                <Account />
              </ProductRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
