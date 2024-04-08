import React from "react";
import { Routes, Route } from "react-router-dom";

//#region frontend
import HtmlPage from "../../pages/fr/frontend/Html";
import WebstoragePage from "../../pages/fr/frontend/Webstorage";
import CssPage from "../../pages/fr/frontend/Css";
import SassPage from "../../pages/fr/frontend/Sass";
import JavascriptPage from "../../pages/fr/frontend/Javascript";
import SpaPage from "../../pages/fr/frontend/Spa";
//#endregion

export default function Routefrontenden() {
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
