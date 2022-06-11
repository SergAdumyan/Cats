import logo from "./logo.svg";
import "./App.css";
import store from "./store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Cats from "./cats/Cats";
function App() {
  const [arr, setArr] = useState();
  useEffect(() => {
    const category = "https://api.thecatapi.com/v1/categories";
    axios.get(category).then((response) => setArr(response.data));
    console.log(arr);
  }, []);
  return (
    <div className="App">
      <Sidebar categories={arr}/>
      <Cats/>
    </div>
  );
}

export default App;
