import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import ContactUs from "./ContactUs.jsx";
import AboutUs from "./AboutUs.jsx";
import CreateRequest from "./CreateRequest.jsx";
import MyRequests from "./MyRequests.jsx";

function App() {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/create-request" element={<CreateRequest/>}></Route>
          <Route path="/my-orders" element={<MyRequests/>}/>
        </Routes>
     
    </div>
  );
}

export default App;
