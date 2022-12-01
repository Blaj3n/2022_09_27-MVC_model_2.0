class Feladat1View {
    constructor(adat, szuloelem){
        szuloelem.append("p");
        this.pElem = szuloelem.children("p")
        this.pElem.html(adat);
    }
}

export default Feladat1View;