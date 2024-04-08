import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//#region angular
import AngularPage from "../../pages/en/angular/Angular";
import BindingPage from "../../pages/en/angular/Binding";
import ComponentPage from "../../pages/en/angular/Component";
import DIPage from "../../pages/en/angular/DI";
import DirectivesPage from "../../pages/en/angular/Directives";
import ElementRefPage from "../../pages/en/angular/ElementRef";
import EncapsulationPage from "../../pages/en/angular/Encapsulation";
import FormsPage from "../../pages/en/angular/Forms";
import HooksPage from "../../pages/en/angular/Hooks";
import InterceptorsPage from "../../pages/en/angular/Interceptors";
import ModulePage from "../../pages/en/angular/Module";
import ObservablesPage from "../../pages/en/angular/Observables";
import PipesPage from "../../pages/en/angular/Pipes";
import RoutingPage from "../../pages/en/angular/Routing";
import TemplatesPage from "../../pages/en/angular/Templates";
//#endregion

export default function Routeangularen() {
  return (
    <Routes>
      {
        //#region angular
      }
      <Route path="/angular" element={<AngularPage />} />
      <Route path="/binding" element={<BindingPage />} />
      <Route path="/component" element={<ComponentPage />} />
      <Route path="/di" element={<DIPage />} />
      <Route path="/directives" element={<DirectivesPage />} />
      <Route path="/elementref" element={<ElementRefPage />} />
      <Route path="/encapsulation" element={<EncapsulationPage />} />
      <Route path="/forms" element={<FormsPage />} />
      <Route path="/hooks" element={<HooksPage />} />
      <Route path="/interceptors" element={<InterceptorsPage />} />
      <Route path="/module" element={<ModulePage />} />
      <Route path="/observables" element={<ObservablesPage />} />
      <Route path="/pipes" element={<PipesPage />} />
      <Route path="/routing" element={<RoutingPage />} />
      <Route path="/templates" element={<TemplatesPage />} />
      {
        //#endregion
      }

      <Route path="*" element={<Navigate to="/angular" />} />
    </Routes>
  );
}
