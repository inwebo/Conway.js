import {Renderer2D} from "@inwebo/render.js";
import {Vector2D} from "@inwebo/vector";

export default class RenderGol extends Renderer2D {
    constructor(canvas) {
        super(canvas);
        this._ctx = this.getCtx();
    }

    _draw([grid, tileSize]) {

        this._clear();
        const cells = grid.getGenerator();

        for (let cell of cells) {
            const origin = new Vector2D(cell.getIndex().getX() * tileSize.getX(), cell.getIndex().getY() * tileSize.getY());

            if(cell.isAlive()) {
                this._ctx.fillStyle = 'black';
            } else {
                this._ctx.fillStyle = 'white';
            }

            this._ctx.fillRect(
                origin.getX(),
                origin.getY(),
                tileSize.getX(),
                tileSize.getY()
            );
        }
    }
}