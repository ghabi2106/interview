
import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "highlight.js/styles/stackoverflow-light.css";

export default function Pipes() {
  return (
    <>
      <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
        <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
        <nav className="small" id="toc">
          <ul className="list-unstyled">
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Contents
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#pipes"
                  >
                    pipes
                  </a>
                </li>
              </ul>
            </li>
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Related links
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/angular"
                  >
                    Angular
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Pipes</h3>
          <article id="pipes">
            <h6>pipes</h6>
            <div>
              <p>
                Les Pipes sont des filtres utilisables directement depuis la vue
                afin de transformer les valeurs lors du "binding".
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Pipes</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>DatePipe</code>
                    </td>
                    <td>
                      Formate une valeur de date selon les règles locales.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>UpperCasePipe</code>
                    </td>
                    <td>Transforme le texte en majuscules.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>LowerCasePipe</code>
                    </td>
                    <td>Transforme le texte en minuscules.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>CurrencyPipe</code>
                    </td>
                    <td>
                      transforme un nombre en une chaîne de devise, formatée
                      selon les règles locales.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>DecimalPipe</code>
                    </td>
                    <td>
                      Transforme un nombre en une chaîne avec un point décimal,
                      formaté selon les règles locales.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>PercentPipe</code>
                    </td>
                    <td>
                      Transforme un nombre en une chaîne de pourcentage,
                      formatée selon les règles locales.
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    src/app/app.component.html
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <Highlight className="language-html">
                    {`<p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }} </p>`}
                  </Highlight>
                </div>
              </div>
              <ul className="nav nav-pills mb-3" id="pills-tab-1" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab-1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-home-1"
                    aria-selected="true"
                  >
                    price.pipe.ts
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab-1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile-1"
                    aria-selected="false"
                  >
                    price.module.ts
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-features-tab-1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-features-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-features-1"
                    aria-selected="false"
                  >
                    price.ts
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent-1">
                <div
                  className="tab-pane fade show active"
                  id="pills-home-1"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab-1"
                >
                  <Highlight className="language-ts">
                    {`@Pipe({
    name: 'price'
})
export class PricePipe implements PipeTransform {

    transform(price: Price): string {

        if (price == null) {
            return null;
        }

        const amount = price.coefficient * Math.pow(10, price.exponent);

        return '$//{amount} $//{price.currency}';

    }

}`}
                  </Highlight>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile-1"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab-1"
                >
                  <Highlight className="language-ts">
                    {`@NgModule({
    declarations: [
        PricePipe
    ],
    exports: [
        PricePipe
    ]
})
export class PriceModule {
}`}
                  </Highlight>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-features-1"
                  role="tabpanel"
                  aria-labelledby="pills-features-tab-1"
                >
                  <Highlight className="language-ts">
                    {`export class Price {

coefficient?: number;
exponent?: number;
currency?: string;

constructor(args: Price = {}) {
    this.coefficient = args.coefficient;
    this.exponent = args.exponent;
    this.currency = args.currency;
}

}`}
                  </Highlight>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
