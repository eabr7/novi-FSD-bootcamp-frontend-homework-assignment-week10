import './App.css';
import totalSold from "./helpers/totalSold";
import inStock from "./helpers/inStock";
import totalAcquisition from "./helpers/totalAcquisition";
import {inventory, bestSellingTv} from "./constants/inventory.js";
import tvName from "./helpers/tvName.js";
import tvPrice from "./helpers/tvPrice.js";
import tvSizes from "./helpers/tvSizes.js";
import tvImage from './assets/tvImage.jpeg';
import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';
import showOefeningOneInConsole from './constants/oefenbestand.js';

function App() {
    showOefeningOneInConsole();

    return (
      <>
          <main className="outer-container">
              <section className="inventory-container section">
                 <h1>Tech It Easy Dashboard</h1>
                 <h2>Verkoop overzicht</h2>
                 <div className="all-tvs-dashboard">
                     <article className="sold-tvs">
                         <p>Aantal verkochte producten</p>
                         <p>{totalSold(inventory)}</p>
                     </article>
                     <article className="bought-tvs">
                         <p>Aantal ingekochte producten</p>
                         <p>{totalAcquisition(inventory)}</p>
                     </article>
                    <article className="to-sell-tvs">
                         <p>Aantal te verkopen producten</p>
                         <p>{inStock(inventory)}</p>
                    </article>
                 </div>
              </section>
              <section className="best-selling-container section">
                  <h2>Best verkochte TV</h2>
                  <article className="best-tv">
                      <span className="tv-image-box">
                          <img src={tvImage} alt="Best stelling TV"/>
                      </span>
                      <div className="best-tv-info">
                        <p>{tvName(bestSellingTv)}</p>
                        <p className="best-tv-price">{tvPrice(bestSellingTv)}</p>
                        <p>{tvSizes(bestSellingTv)}</p>
                         <div className="options-row">
                             <img className="icons" src={checkIcon} alt="Check Icon"/>
                             <p>Wifi</p>
                             <img className="icons" src={minusIcon} alt="Check Icon"/>
                             <p>Speech</p>
                             <img className="icons" src={checkIcon} alt="Check Icon"/>
                             <p>HDR</p>
                             <img className="icons" src={checkIcon} alt="Check Icon"/>
                             <p>Bluetooth</p>
                             <img className="icons" src={minusIcon} alt="Check Icon"/>
                             <p>Ambilight</p>
                         </div>
                      </div>
                  </article>
              </section>
              <section className="all-tvs-container section">
                  <h2>Alle TVs</h2>
                  <div className="all-tvs-buttons">
                      <button type="button" className="most-sold-button" onClick={() => console.log("Meest verkocht eerst")}>Meest verkocht eerst</button>
                      <button type="button" className="cheapest-button" onClick={() => console.log("Goedkoopste eerst")}>Goedkoopste eerst</button>
                      <button type="button" className="sport-button" onClick={() => console.log("Meest geschikt voor sport eerst")}>Meest geschikt voor sport eerst</button>
                  </div>
              </section>
              <section className="all-tv-brands section">
                  <h2>Alle TV merken</h2>
                  <ul>
                      {inventory.map((tv) => {
                          return <li key={tv.type}>{tv.brand}</li>
                          }
                      )}
                  </ul>
              </section>
              <section className="all-tvs section">
                  {inventory.map((tv) => {
                      return <article className="best-tv" key={tv.type}>
                      <span className="tv-image-box">
                          <img src={tvImage} alt="Best stelling TV"/>
                      </span>
                          <div className="best-tv-info">
                              <p>{tvName(tv)}</p>
                              <p className="best-tv-price">{tvPrice(tv)}</p>
                              <p>{tvSizes(tv)}</p>
                              <div className="options-row">
                                  <img className="icons" src={checkIcon} alt="Check Icon"/>
                                  <p>Wifi</p>
                                  <img className="icons" src={minusIcon} alt="Check Icon"/>
                                  <p>Speech</p>
                                  <img className="icons" src={checkIcon} alt="Check Icon"/>
                                  <p>HDR</p>
                                  <img className="icons" src={checkIcon} alt="Check Icon"/>
                                  <p>Bluetooth</p>
                                  <img className="icons" src={minusIcon} alt="Check Icon"/>
                                  <p>Ambilight</p>
                              </div>
                          </div>
                      </article>
                  })}
              </section>
          </main>
      </>
  )
}

export default App
