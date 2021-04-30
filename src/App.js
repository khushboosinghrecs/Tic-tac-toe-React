import React from "react";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.css";
import GameBord from "./components/GameBoard";
function App() {
  return (
    <>
      <Header />
      <GameBord />
    </>
  );
}
export default App;
