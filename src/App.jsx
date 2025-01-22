import "./App.css";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      <div className="text-5xl w-[150px]">
        <h1 className="">Hi</h1>
        <h1 className="">I am</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Milton",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "Dunk",
            2000,
          ]}
          wrapper="span"
          speed={10}
          // style={{ fontSize: "1em", display: "inline-block" }}
          style={{ fontWeight: "bold", color: "#D70040" }}
          repeat={Infinity}
        />
        <a className="text-xl bg-gray-950 p-1 rounded-md block cursor-pointer flex justify-center text-gray-600">
          My Portfolio :)
        </a>
      </div>
    </div>
  );
}

export default App;
