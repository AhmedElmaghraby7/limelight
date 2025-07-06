import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
