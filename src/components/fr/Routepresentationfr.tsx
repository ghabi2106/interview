import React from "react";
import { Routes, Route } from "react-router-dom";

//#region presentation
import HomePage from "../../pages/fr/Home";
import QualitiesPage from "../../pages/fr/Qualities";
import PresentationPage from "../../pages/fr/Presentation";
//#endregion

export default function Routepresentationfr() {
  return (
    <Routes>
      {
        //#region presentation
      }
      <Route path="/" element={<HomePage />} />
      <Route path="/qualities" element={<QualitiesPage />} />
      <Route path="/presentation" element={<PresentationPage />} />
      {
        //#endregion
      }
    </Routes>
  );
}
