import React, { createContext, useState } from "react";
import AppContainer from "./appcontainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import config from "config";
import GeneralHome from "./client/components/home/general/generalhome.jsx";
import AppUniversal from "./admin/app-universal.jsx";

export const Appcontext = createContext();

const AppRouter = ({ props }) => {
  const [isAuth, setIsAuth] = useState("user");

  return (
    <Router basename={`${config.publicPath}`}>
      <Appcontext.Provider value={{ isAuth, setIsAuth }}>
        <Routes>
          <Route path="/*" element={<AppContainer {...props} />} />
        
        </Routes>
      </Appcontext.Provider>
    </Router>
  );
};

export default AppRouter;
