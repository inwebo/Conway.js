import {Vector2D} from "@inwebo/vector";
import {Grid, Cartesian} from "@inwebo/grid.js";
import CellGol from "./CellGol";

export default class Gol extends Grid {

    constructor(dimensions, defaultCellValue = null,  fnFill = null) {
        super(dimensions, defaultCellValue,  fnFill);
        this._cartesian = new Cartesian();
    }

    mustLive(cell) {
        const n = this._cartesian.getNeighbors(cell.getIndex());
        let aliveNeighbours = 0;

        const wasAlive = cell.isAlive();

        n.forEach((v)=> {
            if(this.hasCell(v.getX(), v.getY())) {
                /**
                 * @type {CellGol}
                 */
                const c = this.getCell(v.getX(), v.getY());

                if(c.isAlive()) {
                    aliveNeighbours += 1;
                }
            }
        });

        if(cell.isAlive() && aliveNeighbours < 2) {
            cell.setAlive(false);
            // return false;
        }

        if(cell.isAlive() && (aliveNeighbours === 2 && aliveNeighbours === 3)) {
            cell.setAlive(true);
            // return true;
        }

        if(cell.isAlive() && aliveNeighbours > 3) {
            // return false;
            cell.setAlive(false);
        }

        if(!cell.isAlive() && aliveNeighbours === 3) {
            cell.setAlive(true);
        }

        const isAlive = cell.isAlive();

        if (wasAlive !== isAlive) {
            cell.setHasMutate(true);
        }
    }

    update() {
        const rowsLength = this._dimensions.getY();
        const colsLength = this._dimensions.getX();

        for(let y = 0; y < rowsLength; y++) {

            for(let x = 0; x < colsLength; x++) {
                const cell = this.getCell(x, y);
                this.mustLive(cell);
            }
        }

        // const rows = new Array(this._dimensions.getY()).fill(this._defaultCellValue);
        // Object.seal(rows);
        //
        // const rowsLength = rows.length;
        //
        // for(let y = 0; y < rowsLength; y++) {
        //
        //     let cols = [];
        //
        //     const colsLength = this._dimensions.getX();
        //
        //     for(let x = 0; x < colsLength; x++) {
        //         const cell = this.getCell(x, y);
        //         const mustLive = this.mustLive(cell);
        //         const newCell = new CellGol(new Vector2D(x, y));
        //
        //         newCell.setAlive(mustLive);
        //         cols.push(newCell);
        //     }
        //     Object.seal(cols);
        //     rows[y] = cols;
        // }
        //
        // this._rows = rows;
    }
}