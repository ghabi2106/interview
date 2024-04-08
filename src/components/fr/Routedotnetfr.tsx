import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//#region dotnet
import ControllerPage from "../../pages/fr/dotnet/Controller";
import HostedservicePage from "../../pages/fr/dotnet/Hostedservice";

//#region Architecture
import CqrsPage from "../../pages/fr/dotnet/architecture/Cqrs";
import CleanPage from "../../pages/fr/dotnet/architecture/Clean";
import MvcPage from "../../pages/fr/dotnet/architecture/Mvc";
import DddPage from "../../pages/fr/dotnet/architecture/Ddd";
//#endregion

//#region Csharp
import Csharp9Page from "../../pages/fr/csharp/csharp/Csharp9";
import Csharp10Page from "../../pages/fr/csharp/csharp/Csharp10";
import Csharp11Page from "../../pages/fr/csharp/csharp/Csharp11";
import DotnetfeatuesPage from "../../pages/fr/csharp/csharp/Dotnetfeatues";
//#endregion

//#region algorithme
import AlgoPage from "../../pages/fr/algorithme/Algo";
import RecursionPage from "../../pages/fr/algorithme/Recursion";
//#endregion

//#region Framework
import DotnetPage from "../../pages/fr/dotnet/framework/Dotnet";
import DotnetcomponentsPage from "../../pages/fr/dotnet/framework/Dotnetcomponents";
import AssemblyPage from "../../pages/fr/dotnet/framework/Assembly";
import CLRPage from "../../pages/fr/dotnet/framework/Clr";
import CodedomPage from "../../pages/fr/dotnet/framework/Codedom";
import DllexePage from "../../pages/fr/dotnet/framework/Dllexe";
import EntityframeworkPage from "../../pages/fr/dotnet/framework/Entityframework";
import GcPage from "../../pages/fr/dotnet/framework/Gc";
import GcmethodsPage from "../../pages/fr/dotnet/framework/Gcmethods";
import LinqPage from "../../pages/fr/dotnet/framework/Linq";
import NugetpackagesPage from "../../pages/fr/dotnet/framework/Nugetpackages";
//#endregion

//#region OOP
import OopPage from "../../pages/fr/dotnet/oop/Oop";
import Oop2Page from "../../pages/fr/dotnet/oop/Oop2";
import Oop3Page from "../../pages/fr/dotnet/oop/Oop3";
import CompositionPage from "../../pages/fr/dotnet/oop/Composition";
import TypesystemPage from "../../pages/fr/dotnet/oop/Typesystem";
//#endregion

//#region Http
import CachingPage from "../../pages/fr/dotnet/http/Caching";
import ControllervuedataPage from "../../pages/fr/dotnet/http/Controllervuedata";
import HttpsPage from "../../pages/fr/dotnet/http/Https";
import HttpmethodsPage from "../../pages/fr/dotnet/http/Httpmethods";
import JwtPage from "../../pages/fr/dotnet/http/Jwt";
import MiddlewarePage from "../../pages/fr/dotnet/http/Middleware";
import ServicePage from "../../pages/fr/dotnet/http/Service";
//#endregion

//#region design pattern
import AdapterPage from "../../pages/fr/dotnet/design/Adapter";
import DesignpatternPage from "../../pages/fr/dotnet/design/Designpattern";
import DiPage from "../../pages/fr/dotnet/design/Di";
import SingletonPage from "../../pages/fr/dotnet/design/Singleton";
import MediatorPage from "../../pages/fr/dotnet/design/Mediator";
import ObserverPage from "../../pages/fr/dotnet/design/Observer";
import FactoryPage from "../../pages/fr/dotnet/design/Factory";
import CommandPage from "../../pages/fr/dotnet/design/Command";
//#endregion

//#region methodology
import CleancodePage from "../../pages/fr/dotnet/methodology/Cleancode";
import Cleancode1Page from "../../pages/fr/dotnet/methodology/Cleancode1";
import SolidPage from "../../pages/fr/dotnet/methodology/Solid";
import TddPage from "../../pages/fr/dotnet/methodology/Tdd";
import IdealsPage from "../../pages/fr/dotnet/methodology/Ideals";
//#endregion

//#region Host Deployment
import DockerPage from "../../pages/fr/dotnet/hostdeploy/Docker";
import HttpsysPage from "../../pages/fr/dotnet/hostdeploy/Httpsys";
import IisPage from "../../pages/fr/dotnet/hostdeploy/Iis";
import KestrelPage from "../../pages/fr/dotnet/hostdeploy/Kestrel";
import ServerPage from "../../pages/fr/dotnet/hostdeploy/Server";
//#endregion

//#endregion

//#region csharp

//#region Keywords
import ModifiersPage from "../../pages/fr/csharp/keywords/Modifiers";
import ContextualPage from "../../pages/fr/csharp/keywords/Contextual";
import OperatorsPage from "../../pages/fr/csharp/keywords/Operators";
import ParametersPage from "../../pages/fr/csharp/keywords/Parameters";
import StatementsPage from "../../pages/fr/csharp/keywords/Statements";
import ThisbasePage from "../../pages/fr/csharp/keywords/Thisbase";
//#endregionading
import AutoResetEventPage from "../../pages/fr/csharp/threading/AutoResetEvent";
import BarrierPage from "../../pages/fr/csharp/threading/Barrier";
import ConcurrentCollectionsPage from "../../pages/fr/csharp/threading/ConcurrentCollections";
import CountdownEventPage from "../../pages/fr/csharp/threading/CountdownEvent";
import DeadlockPage from "../../pages/fr/csharp/threading/Deadlock";
import InterlockedPage from "../../pages/fr/csharp/threading/Interlocked";
import ManualResetEventPage from "../../pages/fr/csharp/threading/ManualResetEvent";
import MonitorPage from "../../pages/fr/csharp/threading/Monitor";
import MutexPage from "../../pages/fr/csharp/threading/Mutex";
import ParallelLoopsPage from "../../pages/fr/csharp/threading/ParallelLoops";
import ProcessPage from "../../pages/fr/csharp/threading/Process";
import ReaderWriterLockPage from "../../pages/fr/csharp/threading/ReaderWriterLock";
import SemaphorePage from "../../pages/fr/csharp/threading/Semaphore";
import SpinLockPage from "../../pages/fr/csharp/threading/SpinLock";
import SpinWaitPage from "../../pages/fr/csharp/threading/SpinWait";
import SyncPrimitivesPage from "../../pages/fr/csharp/threading/SyncPrimitives";
import TaskPage from "../../pages/fr/csharp/threading/Task";
import ThreadPoolPage from "../../pages/fr/csharp/threading/ThreadPool";
import TimersPage from "../../pages/fr/csharp/threading/Timers";
//#endregion
import AdvancedPage from "../../pages/fr/csharp/Advanced";
import ArrayPage from "../../pages/fr/csharp/Array";
import BindingPage from "../../pages/fr/csharp/Binding";
import BoxingPage from "../../pages/fr/csharp/Boxing";
import CollectionsPage from "../../pages/fr/csharp/Collections";
import CovariancePage from "../../pages/fr/csharp/Covariance";
import DatatypePage from "../../pages/fr/csharp/Datatype";
import DelegatePage from "../../pages/fr/csharp/Delegate";
import EnumindexerPage from "../../pages/fr/csharp/Enumindexer";
import HashPage from "../../pages/fr/csharp/Hash";
import MemberwiseclonePage from "../../pages/fr/csharp/Memberwiseclone";
import OperatoroverloadingPage from "../../pages/fr/csharp/Operatoroverloading";
import NestedPage from "../../pages/fr/csharp/Nested";
import PreprocessordirectivesPage from "../../pages/fr/csharp/Preprocessordirectives";
import String2intPage from "../../pages/fr/csharp/String2int";
import StringbuilderPage from "../../pages/fr/csharp/Stringbuilder";
import ThreadsPage from "../../pages/fr/csharp/Threads";
import TuplePage from "../../pages/fr/csharp/Tuple";
import UserdefinedtypePage from "../../pages/fr/csharp/Userdefinedtype";
//#endregion

export default function Routedotnetfr() {
  return (
    <Routes>
      {
        //#region dotnet
      }
      <Route path="/hostedservice" element={<HostedservicePage />} />
      <Route path="/controller" element={<ControllerPage />} />
      {
        //#endregion
      }

      {
        //#region Architecture
      }
      <Route path="/clean" element={<CleanPage />} />
      <Route path="/cqrs" element={<CqrsPage />} />
      <Route path="/mvc" element={<MvcPage />} />
      <Route path="/ddd" element={<DddPage />} />
      {
        //#endregion
      }

      {
        //#region Framework
      }
      <Route path="/assembly" element={<AssemblyPage />} />
      <Route path="/clr" element={<CLRPage />} />
      <Route path="/codedom" element={<CodedomPage />} />
      <Route path="/dllexe" element={<DllexePage />} />
      <Route path="/dotnet" element={<DotnetPage />} />
      <Route path="/dotnetcomponents" element={<DotnetcomponentsPage />} />
      <Route path="/entityframework" element={<EntityframeworkPage />} />
      <Route path="/gc" element={<GcPage />} />
      <Route path="/gcmethods" element={<GcmethodsPage />} />
      <Route path="/linq" element={<LinqPage />} />
      <Route path="/nugetpackages" element={<NugetpackagesPage />} />
      {
        //#endregion
      }

      {
        //#region Host Deploy
      }
      <Route path="/docker" element={<DockerPage />} />
      <Route path="/httpsys" element={<HttpsysPage />} />
      <Route path="/iis" element={<IisPage />} />
      <Route path="/kestrel" element={<KestrelPage />} />
      <Route path="/server" element={<ServerPage />} />
      {
        //#endregion
      }

      {
        //#region HTTP
      }
      <Route path="/caching" element={<CachingPage />} />
      <Route path="/controllervuedata" element={<ControllervuedataPage />} />
      <Route path="/https" element={<HttpsPage />} />
      <Route path="/httpmethods" element={<HttpmethodsPage />} />
      <Route path="/jwt" element={<JwtPage />} />
      <Route path="/middleware" element={<MiddlewarePage />} />
      <Route path="/service" element={<ServicePage />} />
      {
        //#endregion
      }

      {
        //#region OOP
      }
      <Route path="/composition" element={<CompositionPage />} />
      <Route path="/oop" element={<OopPage />} />
      <Route path="/oop2" element={<Oop2Page />} />
      <Route path="/oop3" element={<Oop3Page />} />
      <Route path="/typesystem" element={<TypesystemPage />} />
      {
        //#endregion
      }

      {
        //#region design pattern
      }
      <Route path="/adapter" element={<AdapterPage />} />
      <Route path="/command" element={<CommandPage />} />
      <Route path="/designpattern" element={<DesignpatternPage />} />
      <Route path="/di" element={<DiPage />} />
      <Route path="/factory" element={<FactoryPage />} />
      <Route path="/mediator" element={<MediatorPage />} />
      <Route path="/observer" element={<ObserverPage />} />
      <Route path="/singleton" element={<SingletonPage />} />
      {
        //#endregion
      }

      {
        //#region methodology
      }
      <Route path="/cleancode" element={<CleancodePage />} />
      <Route path="/cleancode1" element={<Cleancode1Page />} />
      <Route path="/solid" element={<SolidPage />} />
      <Route path="/tdd" element={<TddPage />} />
      <Route path="/ideals" element={<IdealsPage />} />
      {
        //#endregion
      }

      {
        //#region csharp
      }
      <Route path="/csharp9" element={<Csharp9Page />} />
      <Route path="/csharp10" element={<Csharp10Page />} />
      <Route path="/csharp11" element={<Csharp11Page />} />
      <Route path="/dotnetfeatures" element={<DotnetfeatuesPage />} />
      {
        //#endregion
      }

      {
        //#region algorithme
      }
      <Route path="/algo" element={<AlgoPage />} />
      <Route path="/recursion" element={<RecursionPage />} />
      {
        //#endregion
      }

      {
        //#region keywords
      }
      <Route path="/contextual" element={<ContextualPage />} />
      <Route path="/modifiers" element={<ModifiersPage />} />
      <Route path="/operators" element={<OperatorsPage />} />
      <Route path="/parameters" element={<ParametersPage />} />
      <Route path="/statements" element={<StatementsPage />} />
      <Route path="/thisbase" element={<ThisbasePage />} />
      {
        //#endregion
      }

      {
        //#region threading
      }
      <Route path="/autoresetevent" element={<AutoResetEventPage />} />
      <Route path="/barrier" element={<BarrierPage />} />
      <Route path="/concurrentcollections" element={<ConcurrentCollectionsPage />} />
      <Route path="/countdownevent" element={<CountdownEventPage />} />
      <Route path="/deadlock" element={<DeadlockPage />} />
      <Route path="/interlocked" element={<InterlockedPage />} />
      <Route path="/manualresetevent" element={<ManualResetEventPage />} />
      <Route path="/monitor" element={<MonitorPage />} />
      <Route path="/mutex" element={<MutexPage />} />
      <Route path="/parallelloops" element={<ParallelLoopsPage />} />
      <Route path="/process" element={<ProcessPage />} />
      <Route path="/readerwriterlock" element={<ReaderWriterLockPage />} />
      <Route path="/semaphore" element={<SemaphorePage />} />
      <Route path="/spinlock" element={<SpinLockPage />} />
      <Route path="/spinwait" element={<SpinWaitPage />} />
      <Route path="/syncprimitives" element={<SyncPrimitivesPage />} />
      <Route path="/task" element={<TaskPage />} />
      <Route path="/threadpool" element={<ThreadPoolPage />} />
      <Route path="/timers" element={<TimersPage />} />
      {
        //#endregion
      }

      {
        //#region others
      }
      <Route path="/advanced" element={<AdvancedPage />} />
      <Route path="/array" element={<ArrayPage />} />
      <Route path="/binding" element={<BindingPage />} />
      <Route path="/boxing" element={<BoxingPage />} />
      <Route path="/collections" element={<CollectionsPage />} />
      <Route path="/covariance" element={<CovariancePage />} />
      <Route path="/hashcode" element={<HashPage />} />
      <Route path="/datatype" element={<DatatypePage />} />
      <Route path="/delegate" element={<DelegatePage />} />
      <Route path="/enumindexer" element={<EnumindexerPage />} />
      <Route path="/operatoroverloading" element={<OperatoroverloadingPage />} />
      <Route path="/nested" element={<NestedPage />} />
      <Route
        path="/preprocessordirectives"
        element={<PreprocessordirectivesPage/>}
      />
      <Route path="/string2int" element={<String2intPage />} />
      <Route path="/stringbuilder" element={<StringbuilderPage />} />
      <Route path="/threads" element={<ThreadsPage />} />
      <Route path="/tuple" element={<TuplePage />} />
      <Route path="/memberwiseclone" element={<MemberwiseclonePage />} />
      <Route path="/userdefinedtype" element={<UserdefinedtypePage />} />
      {
        //#endregion
      }

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
