import Header from "./components/Header";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Body from "./components/Body";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";
import { Outlet } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <ChakraProvider>
        {/* <TypeFormNav/> */}
        {/* <Header />
        <Body /> */}
        {/* <SignupForm /> */}
        {/* <Login /> */}
        {/* <Typeform/> */}
        {/* <FormWrapper/> */}
        <Outlet/>
      </ChakraProvider>
    </div>
  );
}



export default App;
