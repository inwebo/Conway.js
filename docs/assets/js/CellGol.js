import {Cell} from "@inwebo/grid.js";

export default class CellGol extends Cell {
    /**
     * @param {boolean} bool
     */
    setAlive(bool) {
        this._isAlive = bool;
    }

    /**
     * @return {boolean}
     */
    isAlive() {
        return this._isAlive;
    }
    /**
     * @return {boolean}
     */
    hasMutate() {
        return this._hasMutate;
    }
    /**
     * @param {boolean} bool
     */
    setHasMutate(bool) {
        this._hasMutate = bool;
    }

    constructor(index) {
        super(index);
        this._isAlive   = false;
        this._hasMutate = true;
    }
}