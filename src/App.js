import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Component/Home";

function App() {
  const route = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/user",
      element: <Home />,
    },
  ];
  return (
    
    <div>

    </div>
  );
}

export default App;
