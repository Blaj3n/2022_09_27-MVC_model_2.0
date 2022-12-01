class Feladat1View {
    constructor(adat, szuloelem) {
        szuloelem.append("<p>");
        this.pElem = szuloelem.children("p")
        this.setErtek(adat);
    }

    setErtek(jel) {
        this.pElem.html(jel);
    }
}

export default Feladat1View;