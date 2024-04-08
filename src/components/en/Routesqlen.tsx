import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//#region sql
import BetweeninPage from "../../pages/en/sql/Betweenin";
import CasePage from "../../pages/en/sql/Case";
import ConstraintPage from "../../pages/en/sql/Constraint";
import FuncprocPage from "../../pages/en/sql/Funcproc";
import HavinganyallPage from "../../pages/en/sql/Havinganyall";
import IndexPage from "../../pages/en/sql/Index";
import JoinPage from "../../pages/en/sql/Join";
import LikePage from "../../pages/en/sql/Like";
import SqlPage from "../../pages/en/sql/Sql";
import StatementsPage from "../../pages/en/sql/Statements";
import SubsetsPage from "../../pages/en/sql/Subsets";
import TableviewPage from "../../pages/en/sql/Tableview";
import TransactionPage from "../../pages/en/sql/Transaction";
import UnionPage from "../../pages/en/sql/Union";
//#endregion

export default function Routesqlen() {
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
