import {Cell} from "@inwebo/grid.js";

export default class CellGol extends Cell {

    setAlive(bool) {
        this._isAlive = bool;
    }

    isAlive() {
        return this._isAlive;
    }

    constructor(index) {
        super(index);
        this._isAlive   = false;
        this._hasMutate = false;
    }
}