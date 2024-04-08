import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//#region sql
import BetweeninPage from "../../pages/fr/sql/Betweenin";
import CasePage from "../../pages/fr/sql/Case";
import ConstraintPage from "../../pages/fr/sql/Constraint";
import FuncprocPage from "../../pages/fr/sql/Funcproc";
import HavinganyallPage from "../../pages/fr/sql/Havinganyall";
import IndexPage from "../../pages/fr/sql/Index";
import JoinPage from "../../pages/fr/sql/Join";
import LikePage from "../../pages/fr/sql/Like";
import SqlPage from "../../pages/fr/sql/Sql";
import StatementsPage from "../../pages/fr/sql/Statements";
import SubsetsPage from "../../pages/fr/sql/Subsets";
import TableviewPage from "../../pages/fr/sql/Tableview";
import TransactionPage from "../../pages/fr/sql/Transaction";
import UnionPage from "../../pages/fr/sql/Union";
//#endregion

export default function Routesqlfr() {
  return (
    <Routes>
      {
        //#region sql
      }
      <Route path="/betweenin" element={<BetweeninPage />} />
      <Route path="/case" element={<CasePage />} />
      <Route path="/constraint" element={<ConstraintPage />} />
      <Route path="/funcproc" element={<FuncprocPage />} />
      <Route path="/havinganyall" element={<HavinganyallPage />} />
      <Route path="/index" element={<IndexPage />} />
      <Route path="/join" element={<JoinPage />} />
      <Route path="/like" element={<LikePage />} />
      <Route path="/sql" element={<SqlPage />} />
      <Route path="/statements" element={<StatementsPage />} />
      <Route path="/subsets" element={<SubsetsPage />} />
      <Route path="/tableview" element={<TableviewPage />} />
      <Route path="/transaction" element={<TransactionPage />} />
      <Route path="/union" element={<UnionPage />} />
      {
        //#endregion
      }

      <Route path="*" element={<Navigate to="/sql" />} />
    </Routes>
  );
}
