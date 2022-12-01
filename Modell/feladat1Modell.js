class Feladat1Model{
    #modelladat;
    constructor(){
        this.#modelladat = 22;
    }

    getModellAdat(){
        //mindenféle bonyolult műveletek az adatokon
        this.#modelladat*=2;
        return this.#modelladat;
    }
}
export default Feladat1Model;