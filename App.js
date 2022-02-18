import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./UI/header";

import Myreferrals from "./businessassociate/Myreferrals"
import CurrentMonth from "./businessassociate/CurrentMonth";
import NewSponsor from "./admin/newsponsor";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/admin" element={<NewSponsor />}></Route>
          <Route path="/user/mysponsors" element={<Myreferrals />}></Route>
          <Route path="/user/current" element={<CurrentMonth />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
