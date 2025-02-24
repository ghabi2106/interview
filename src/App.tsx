import React, { useState } from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import stringSimilarity from "string-similarity";

import Nav from "./components/Nav";
import Routing from "./components/Routing";

//#region import json
import { pagesdotnet } from "./json/search/searchdotnet";
import { pagesreact } from "./json/search/searchreact";
import { pagesangular } from "./json/search/searchangular";
import { pagessql } from "./json/search/searchsql";
import { pagesagile } from "./json/search/searchagile";

import { urlsdotnet } from "./json/urls/urlsdotnet";
import { urlsreact } from "./json/urls/urlsreact";
import { urlsangular } from "./json/urls/urlsangular";
import { urlssql } from "./json/urls/urlssql";
import { urlsagile } from "./json/urls/urlsagile";
//#endregion

//import logo from './logo.svg';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const LangContext = React.createContext("");
export const CourseContext = React.createContext("");

function App() {
  const initialLang = localStorage.getItem("lang") ?? "FR";
  const [lang, setLang] = useState(initialLang);
  const initialCourse = localStorage.getItem("course") ?? "dotnet";
  const [selectedCourse, setSelectedCourse] = useState(initialCourse);
  const initialPages = () => {
    switch (initialCourse) {
      case "dotnet":
        return pagesdotnet;
      case "react":
        return pagesreact;
      case "angular":
        return pagesangular;
      case "sql":
        return pagessql;
      case "agile":
        return pagesagile;
      default:
        return pagesdotnet;
    }
  };
  const [pages, setPages] = useState(initialPages);
  const initialUrls = () => {
    switch (initialCourse) {
      case "dotnet":
        return urlsdotnet;
      case "react":
        return urlsreact;
      case "angular":
        return urlsangular;
      case "sql":
        return urlssql;
      case "agile":
        return urlsagile;
      default:
        return urlsdotnet;
    }
  };
  const [urls, setUrls] = useState(initialUrls);

  const commands = [
    {
      command: ["*"],
      callback: (redirectPage: string) => {
        var matches = stringSimilarity.findBestMatch(redirectPage, pages);
        setRedirectUrl(matches.bestMatch.target);
      },
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let redirect = null;

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Navigate to={urls[redirectUrl]} />;
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  const handleChangeCourse = (event: any) => {
    setSelectedCourse(event.target.value);
    switch (event.target.value) {
      case "dotnet":
        setPages(pagesdotnet);
        setUrls(urlsdotnet);
        localStorage.setItem("course", "dotnet");
        break;
      case "react":
        setPages(pagesreact);
        setUrls(urlsreact);
        localStorage.setItem("course", "react");
        break;
      case "angular":
        setPages(pagesangular);
        setUrls(urlsangular);
        localStorage.setItem("course", "angular");
        break;
      case "sql":
        setPages(pagessql);
        setUrls(urlssql);
        localStorage.setItem("course", "sql");
        break;
      case "agile":
        setPages(pagesagile);
        setUrls(urlsagile);
        localStorage.setItem("course", "agile");
        break;
      default:
        setPages(pagesdotnet);
        setUrls(urlsdotnet);
        localStorage.setItem("course", "dotnet");
    }
  };

  const handleChangeLang = () => {
    setLang((prevLang) => (prevLang === "EN" ? "FR" : "EN"));
    localStorage.setItem("lang", lang === "EN" ? "FR" : "EN");
  };

  return (
    <div className="app">
      <BrowserRouter>
        <header className="bd-header bg-dark d-flex align-items-stretch border-bottom border-dark">
          <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 flex-column">
            <div className="top-nav container-fluid">
              <p className="mb-0 me-2" id="transcript">
                Transcript: {transcript}
              </p>
              <button
                className="btn btn-outline-primary me-2" onClick={(event) => SpeechRecognition.startListening()}
              >
                <i className="fa fa-microphone"></i>
              </button>
              <select
                className="form-select select-lang me-2"
                value={selectedCourse}
                onChange={handleChangeCourse}
              >
                <option value="dotnet">.Net</option>
                <option value="angular">Angular</option>
                <option value="react">React</option>
                <option value="sql">SQL</option>
                <option value="agile">Agile</option>
              </select>
              <button
                className="btn btn-outline-success"
                onClick={handleChangeLang}
              >
                {lang}
              </button>
            </div>
            <CourseContext.Provider value={selectedCourse}>
              <Nav />
            </CourseContext.Provider>
          </nav>
        </header>

        {/* <Switch> */}
        <LangContext.Provider value={lang}>
          <CourseContext.Provider value={selectedCourse}>
            <Routing />
          </CourseContext.Provider>
        </LangContext.Provider>
        {redirect}
        {/* </Switch> */}
      </BrowserRouter>
      <footer className="bd-cheatsheet container-fluid bg-body vh-100"></footer>
    </div>
  );
}

export default App;
