import Feladat1View from "../View/feladat1View.js"
import Feladat1Model from "../Modell/feladat1Modell.js";

class Feladat1Controller {
    constructor() {
        //feladata a view példányosítása
        const szuloelem = $("div.eredmeny");
        const feladat1View = new Feladat1View("adat", szuloelem);
        const gomb = $("button");
        //feladata a modell példányosítása
        const feladat1Model = new Feladat1Model();
        gomb.on("click", () => {
            //itt utasítom a modellt a számítás elvégzésére
            let eredmeny = feladat1Model.getModellAdat()
            //lekérem a modellből az eredményt
            //átadom a view-nak
            feladat1View.setErtek(eredmeny);
        });
    }
}

export default Feladat1Controller;