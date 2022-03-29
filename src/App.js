import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componenet/Navbar";
import Card from "./componenet/Card";
import pic1 from "./Photo/pic1.webp";
import pic2 from "./Photo/pic2.jpg";
import { useState } from "react";

let li = new Array(0).fill(0);

function App() {
  const [no, setNo] = useState(null);

  let setMypic = (text) => {
    setNo(text);
    li = new Array(parseInt(text)).fill(0);
  };

  return (
    <>
      <Navbar setMypic={setMypic} />
      <div className="myJanin">
        {li.map((ele, idx) => {
          return (
            <>
              <Card
                key={idx}
                pic={pic1}
                msg={"This is Bunny"}
                title={"Bunny"}
              />
              <Card
                key={idx + "key"}
                pic={pic2}
                msg={"This is Cat"}
                title={"Cat"}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
