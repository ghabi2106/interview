import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//#region react
import ArrowfuncPage from "../../pages/en/react/Arrowfunc";
import ComponentsPage from "../../pages/en/react/Components";
import ControlledPage from "../../pages/en/react/Controlled";
import DomPage from "../../pages/en/react/Dom";
import EcmascriptPage from "../../pages/en/react/Ecmascript";
import EventsPage from "../../pages/en/react/Events";
import FormsPage from "../../pages/en/react/Forms";
import FragmentPage from "../../pages/en/react/Fragment";
import HocPage from "../../pages/en/react/Hoc";
import HooksPage from "../../pages/en/react/Hooks";
import JsxPage from "../../pages/en/react/Jsx";
import SuspensePage from "../../pages/en/react/Suspense";
import LifecyclePage from "../../pages/en/react/Lifecycle";
import ModularizePage from "../../pages/en/react/Modularize";
import PropsstatePage from "../../pages/en/react/Propsstate";
import ReactjsPage from "../../pages/en/react/Reactjs";
import ReactrenderPage from "../../pages/en/react/Reactrender";
import ReactvsangularPage from "../../pages/en/react/Reactvsangular";
import ReduxPage from "../../pages/en/react/Redux";
import RefsPage from "../../pages/en/react/Refs";
import RouterPage from "../../pages/en/react/Router";
import StatelessPage from "../../pages/en/react/Stateless";
import StylingPage from "../../pages/en/react/Styling";
//#endregion

export default function Routereacten() {
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
