import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//#region agile
import AgilePage from "../../pages/fr/agile/Agile";
import MeetingPage from "../../pages/fr/agile/Meeting";
import RetrospectivePage from "../../pages/fr/agile/Retrospective";
import ReviewPage from "../../pages/fr/agile/Review";
import RolesPage from "../../pages/fr/agile/Roles";
import TermsPage from "../../pages/fr/agile/Terms";
//#endregion

export default function Routeagilefr() {
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
