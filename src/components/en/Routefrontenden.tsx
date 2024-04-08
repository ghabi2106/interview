import React from "react";
import { Routes, Route } from "react-router-dom";

//#region frontend
import HtmlPage from "../../pages/en/frontend/Html";
import WebstoragePage from "../../pages/en/frontend/Webstorage";
import CssPage from "../../pages/en/frontend/Css";
import SassPage from "../../pages/en/frontend/Sass";
import JavascriptPage from "../../pages/en/frontend/Javascript";
import SpaPage from "../../pages/en/frontend/Spa";
//#endregion

const Routefrontenden: React.FC = (): JSX.Element => {
  return (
    <Routes>
      {
        //#region frontend
      }
      <Route path="/html" element={<HtmlPage />} />
      <Route path="/webstorage" element={<WebstoragePage />} />
      <Route path="/css" element={<CssPage />} />
      <Route path="/sass" element={<SassPage />} />
      <Route path="/javascript" element={<JavascriptPage />} />
      <Route path="/spa" element={<SpaPage />} />
      {
        //#endregion
      }
    </Routes>
  );
}

export default Routefrontenden;