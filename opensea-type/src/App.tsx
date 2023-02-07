import { BrowserRouter } from "react-router-dom";
import React from "react";
import Components from "./components";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Components />
    </BrowserRouter>
  );
};

export default App;

// import { BrowserRouter } from "react-router-dom";

// import Components from "./components";

// function App() {
//   return (
//     <BrowserRouter>
//       <Components></Components>
//     </BrowserRouter>
//   );
// }
