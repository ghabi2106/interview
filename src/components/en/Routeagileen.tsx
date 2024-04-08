import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//#region agile
import AgilePage from "../../pages/en/agile/Agile";
import MeetingPage from "../../pages/en/agile/Meeting";
import RetrospectivePage from "../../pages/en/agile/Retrospective";
import ReviewPage from "../../pages/en/agile/Review";
import RolesPage from "../../pages/en/agile/Roles";
import TermsPage from "../../pages/en/agile/Terms";
//#endregion

export default function Routeagileen() {
  return (
    <Routes>
      {
        //#region agile
      }
      <Route path="/agile" element={<AgilePage />} />
      <Route path="/meeting" element={<MeetingPage />} />
      <Route path="/retrospective" element={<RetrospectivePage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/roles" element={<RolesPage />} />
      <Route path="/terms" element={<TermsPage />} />
      {
        //#endregion
      }

      <Route path="*" element={<Navigate to="/agile" />} />
    </Routes>
  );
}
