import Gol        from "./Gol";
import CellGol    from "./CellGol";
import {Vector2D} from "@inwebo/vector"
import RenderGol  from "./renderGol";

window.addEventListener("DOMContentLoaded", (event) => {
    const rand = (a,b) => a+(b-a+1)*crypto.getRandomValues(new Uint32Array(1))[0]/2**32|0;
    const golCanvas = document.getElementById('demo-2');
    const gol = new Gol(new Vector2D(150, 96), null, ([col, row]) => {
        return new CellGol(new Vector2D(col, row));
    });
    const renderGol = new RenderGol(golCanvas);
    const cells = gol.getGenerator();
    const tileSize = new Vector2D(5, 5);

    for (const cell of cells) {
        const r = rand(1, 100);

        if(r <= 50) {
            cell.setAlive(true);
        }
    }

    setInterval(() => {
        gol.update();
        renderGol._draw([gol, tileSize]);
    }, 10);
});
