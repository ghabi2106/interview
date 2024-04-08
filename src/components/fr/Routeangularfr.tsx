import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//#region angular
import AngularPage from "../../pages/fr/angular/Angular";
import BindingPage from "../../pages/fr/angular/Binding";
import ComponentPage from "../../pages/fr/angular/Component";
import DIPage from "../../pages/fr/angular/DI";
import DirectivesPage from "../../pages/fr/angular/Directives";
import ElementRefPage from "../../pages/fr/angular/ElementRef";
import EncapsulationPage from "../../pages/fr/angular/Encapsulation";
import FormsPage from "../../pages/fr/angular/Forms";
import HooksPage from "../../pages/fr/angular/Hooks";
import InterceptorsPage from "../../pages/fr/angular/Interceptors";
import ModulePage from "../../pages/fr/angular/Module";
import ObservablesPage from "../../pages/fr/angular/Observables";
import PipesPage from "../../pages/fr/angular/Pipes";
import RoutingPage from "../../pages/fr/angular/Routing";
import TemplatesPage from "../../pages/fr/angular/Templates";
//#endregion

export default function Routeangularfr() {
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
