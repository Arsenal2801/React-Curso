import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'


/*// // import { FormCustomHook } from "./02-useEffect/FormCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { MemoHook } from "./06-memos/MemoHook";
// import { Memorize } from "./06-memos/Memorize";
// // import { SimpleForm } from "./02-useEffect/SimpleForm";
// //import { CounterApp } from "./01-useState/CounterApp";
// //import { CounterCustomHook } from "./01-useState/CounterCustomHook";
// //import { HooksApp } from "./HooksApp";
// import { Padre } from "./07-tarea-memo/Padre";
*/


import { ToDoApp } from "./08-useReducer/ToDoApp";
import { MainApp } from "./09-useContext/MainApp";

import './index.css';

ReactDOM.createRoot(document.getElementById("root")).render(
   <BrowserRouter>
      {/* <React.StrictMode> */}
         <MainApp />
      {/* </React.StrictMode> */}
   </BrowserRouter>
);

