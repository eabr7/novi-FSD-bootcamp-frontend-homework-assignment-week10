import './App.css';
import totalSold from "./helpers/totalSold";
import inStock from "./helpers/inStock";
import totalAcquisition from "./helpers/totalAcquisition";
import {inventory, bestSellingTv} from "./constants/inventory.js";
import tvName from "./helpers/tvName.js";
import tvPrice from "./helpers/tvPrice.js";
import tvSizes from "./helpers/tvSizes.js";

function App() {
  return (
      <>
          <main className="outer-container">
              <section className="inventory-container">
                 <h1>Tech It Easy Dashboard</h1>
                 <h2>Verkoop overzicht</h2>
                 <div className="all-tvs">
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
              <section className="best-selling-container">
                  <h2>Best verkochte TV</h2>
                  <article className="best-tv">
                      <span>
                          <img src="/" alt="/"/>
                      </span>
                      <div>
                        <p>{tvName(bestSellingTv)}</p>
                        <p>{tvPrice(bestSellingTv)}</p>
                        <p>{tvSizes(bestSellingTv)}</p>
                      </div>
                  </article>
              </section>
          </main>
      </>
  )
}

export default App
