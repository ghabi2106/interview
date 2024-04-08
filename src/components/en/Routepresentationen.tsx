import React from "react";
import { Routes, Route } from "react-router-dom";

//#region presentation
import HomePage from "../../pages/en/Home";
import QualitiesPage from "../../pages/en/Qualities";
//#endregion

const Routepresentationen: React.FC = (): JSX.Element => {
  return (
    <Routes>
      {
        //#region presentation
      }
      <Route path="/" element={<HomePage />} />
      <Route path="/qualities" element={<QualitiesPage />} />
      {
        //#endregion
      }
    </Routes>
  );
}

export default Routepresentationen;