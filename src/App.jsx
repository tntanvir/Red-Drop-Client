import DonerFrom from "./Component/DonerFrom";

import Footers from "./Component/Footers";
import Home from "./Component/Home"
import { StickyNavbar } from "./Component/StickyNavbar"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserDeshBord from "./Component/UserDeshBord";
import PrivetRoute from "./Component/PrivetRoute";
import { useState } from "react";
import { createContext } from "react";
import ResivedFrom from "./Component/ResivedFrom";
import Contect from "./Component/Contect";
import Docs from "./Component/Docs";
import Getstart from "./Component/Getstart";
import NotFound from "./Component/NotFound";
import ResivedPost from "./Component/ResivedPost";
import Locationpost from "./Component/Locationpost";
import Register from "./Component/Register";
import Singin from "./Component/Singin";
import MainLayout from "./Component/MainLayout";
import Requestpost from "./Component/Requestpost";
import Mypost from "./Component/Mypost";
import Mydonation from "./Component/Mydonation";
import Confirmrequest from "./Component/Confirmrequest";
import Addreview from "./Component/Addreview";




export const ContextApi = createContext()
const App = () => {
  const [userLogin, setUserLogin] = useState(false)

  return (
    <ContextApi.Provider value={[userLogin, setUserLogin]}>
      <Router>
        <StickyNavbar></StickyNavbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/singin" element={<Singin />} />
          <Route path="/singup" element={<Register />} />

          <Route path="/contect" element={<Contect />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/provideUser" element={<Getstart />} />
          <Route path="/resivedpost" element={<ResivedPost />} />
          <Route path="/resivedpost/:location" element={<Locationpost />} />
          {/* <Route
            path="/account/deshboard"
            element={
              <UserDeshBord />
              // <PrivetRoute childern={<UserDeshBord />} />
            }
          /> */}
          <Route
            path="/donerfrom"
            element={
              <DonerFrom />
              // <PrivetRoute childern={<DonerFrom />} />
            }
          />
          <Route
            path="/resivedfrom"
            element={
              <ResivedFrom />
              // <PrivetRoute childern={<ResivedFrom />} />
            }
          />
          <Route path="*" element={<NotFound />} />

          <Route path="/account/deshboard" element={<MainLayout />}>
            {/* <Route path="" element={<UserDeshBord />} />
            <Route path="request" element={<Requestpost />} /> */}

            <Route
              path=""
              element={
                <PrivetRoute childern={<UserDeshBord />} />
              }
            />
            <Route
              path="request"
              element={
                <PrivetRoute childern={<Requestpost />} />
              }
            />
            <Route
              path="mypost"
              element={
                <PrivetRoute childern={<Mypost />} />
              }
            />
            <Route
              path="requestconfirm"
              element={
                <PrivetRoute childern={<Confirmrequest />} />
              }
            />
            <Route
              path="mydonation"
              element={
                <PrivetRoute childern={<Mydonation />} />
              }
            />
            <Route
              path="addreview"
              element={
                <PrivetRoute childern={<Addreview />} />
              }
            />

          </Route>

        </Routes>
        <Footers></Footers>
      </Router>
    </ContextApi.Provider>
  )
}

export default App


// https://boabd.com/file/M0tZTWxCZ1psU05ZQlJuQk5ZdHJYazJoWG9sWWc3djRSN1JFdXh6aDB2aGQrazNRbEt0ai9rWFY4WnlJUmFSQw==