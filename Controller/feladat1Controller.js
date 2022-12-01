import Feladat1View from "../View/feladat1View.js"

class Feladat1Controller {
    constructor() {
        //feladata a view példányosítása
        const szuloelem = $("div.eredmeny");
        const feladat1View = new Feladat1View("adat", szuloelem);
        const gomb = $("button");
        gomb.on("click", () => {
            feladat1View.setErtek("emezt");
        })
    }
}

export default Feladat1Controller;