import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//#region react
import ArrowfuncPage from "../../pages/fr/react/Arrowfunc";
import ComponentsPage from "../../pages/fr/react/Components";
import ControlledPage from "../../pages/fr/react/Controlled";
import DomPage from "../../pages/fr/react/Dom";
import EcmascriptPage from "../../pages/fr/react/Ecmascript";
import EventsPage from "../../pages/fr/react/Events";
import FormsPage from "../../pages/fr/react/Forms";
import FragmentPage from "../../pages/fr/react/Fragment";
import HocPage from "../../pages/fr/react/Hoc";
import HooksPage from "../../pages/fr/react/Hooks";
import JsxPage from "../../pages/fr/react/Jsx";
import LifecyclePage from "../../pages/fr/react/Lifecycle";
import SuspensePage from "../../pages/fr/react/Suspense";
import ModularizePage from "../../pages/fr/react/Modularize";
import PropsstatePage from "../../pages/fr/react/Propsstate";
import ReactjsPage from "../../pages/fr/react/Reactjs";
import ReactrenderPage from "../../pages/fr/react/Reactrender";
import ReactvsangularPage from "../../pages/fr/react/Reactvsangular";
import ReduxPage from "../../pages/fr/react/Redux";
import RefsPage from "../../pages/fr/react/Refs";
import RouterPage from "../../pages/fr/react/Router";
import StatelessPage from "../../pages/fr/react/Stateless";
import StylingPage from "../../pages/fr/react/Styling";
//#endregion

export default function Routereactfr() {
  return (
    <Routes>
      {
        //#region react
      }
      <Route path="/arrowfunc" element={<ArrowfuncPage />} />
      <Route path="/components" element={<ComponentsPage />} />
      <Route path="/controlled" element={<ControlledPage />} />
      <Route path="/dom" element={<DomPage />} />
      <Route path="/ecmascript" element={<EcmascriptPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/forms" element={<FormsPage />} />
      <Route path="/fragment" element={<FragmentPage />} />
      <Route path="/hoc" element={<HocPage />} />
      <Route path="/hooks" element={<HooksPage />} />
      <Route path="/jsx" element={<JsxPage />} />
      <Route path="/lazy" element={<SuspensePage />} />
      <Route path="/lifecycle" element={<LifecyclePage />} />
      <Route path="/modularize" element={<ModularizePage />} />
      <Route path="/propsstate" element={<PropsstatePage />} />
      <Route path="/reactjs" element={<ReactjsPage />} />
      <Route path="/reactrender" element={<ReactrenderPage />} />
      <Route path="/reactvsangular" element={<ReactvsangularPage />} />
      <Route path="/redux" element={<ReduxPage />} />
      <Route path="/refs" element={<RefsPage />} />
      <Route path="/router" element={<RouterPage />} />
      <Route path="/stateless" element={<StatelessPage />} />
      <Route path="/styling" element={<StylingPage />} />
      {
        //#endregion
      }

      <Route path="*" element={<Navigate to="/reactjs" />} />
    </Routes>
  );
}
