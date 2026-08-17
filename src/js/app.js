import "../css/style.css";
import goblinImage from "../img/goblin.png";

class GoblinGame {
  constructor(containerId) {
    this.container = this.container =
      typeof document !== "undefined"
        ? document.querySelector(containerId)
        : null;
    this.boardSize = 4;
    this.cells = [];
    this.currentCellIndex = null;
    this.goblinElement = null;
  }

  init() {
    this.createBoard();
    this.createGoblin();
    this.startMovementLoop();
  }

  createBoard() {
    const totalCells = this.boardSize ** 2;
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.container.appendChild(cell);
      this.cells.push(cell);
    }
  }

  createGoblin() {
    const img = document.createElement("img");
    img.src = goblinImage;
    img.alt = "Goblin";
    img.classList.add("goblin-image");

    this.goblinElement = img;
  }

  getRandomIndex() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.cells.length);
    } while (newIndex === this.currentCellIndex);

    return newIndex;
  }

  moveGoblin() {
    const nextIndex = this.getRandomIndex();

    this.cells[nextIndex].appendChild(this.goblinElement);

    this.currentCellIndex = nextIndex;
  }

  startMovementLoop() {
    this.moveGoblin();

    setInterval(() => {
      this.moveGoblin();
    }, 1000);
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   const game = new GoblinGame(".game-container");
//   game.init();
// });
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const game = new GoblinGame("game-container");
    game.init();
  });
}
export { GoblinGame };
