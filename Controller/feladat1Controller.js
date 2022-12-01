import Feladat1View from "../View/feladat1View"

class Feladat1Controller{
    constructor(){
        //feladata a view példányosítása
        const szuloelem = $("div.eredmeny")
        new Feladat1View("adat",szuloelem)
    }
}

export default Feladat1Controller;