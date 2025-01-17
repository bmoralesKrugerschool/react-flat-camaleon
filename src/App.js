import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddFlat from "./pages/AddFlat";
import Profile from "./pages/Profile";

import Register from "./pages/Register";
import ProfileUpdate from "./pages/ProfileUpdate";
import Flats from "./pages/Flats";
import MyFlats from "./pages/MyFlats";
function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/dashboard"} element={<Home />} />
      <Route path={"/flats"} element={<Flats />} />
      <Route path={"/flats/new"} element={<AddFlat />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={"/profile/edit"} element={<ProfileUpdate />} />
      <Route path={"/register"} element={<Register />} />
      <Route path={"/my-flast"} element={<MyFlats />} />
    </Routes>
  );
}

export default App;
