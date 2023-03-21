import Figure from "./Figure.js";

export default class Bishop extends Figure {
    constructor(color, position, board){
        super(color, position);
        this.name = "Bishop";
        this.board = board;
    }
    canMoveTo(destination) {
        // Check if the destination is on the same diagonal as the bishop
        const deltaX = Math.abs(destination.x - this.position.x);
        const deltaY = Math.abs(destination.y - this.position.y);
        if (deltaX !== deltaY) {
            return false;
        }
        if (destination.getPiece() && destination.getPiece().color === this.color) {
            // Can't move to a cell containing our own piece
            return false;
        }
        // Check if there are any pieces blocking the bishop's path to the destination
        const xDir = destination.x < this.position.x ? -1 : 1;
        const yDir = destination.y < this.position.y ? -1 : 1;
        for (let i = 1; i < deltaX; i++) {
            const intermediateCell = this.board.getCell(this.position.x + i * xDir, this.position.y + i * yDir);
            if (!intermediateCell.isEmpty()) {
                return false;
            }
        }

        // The destination is on the same diagonal and the bishop's path to it is unobstructed
        return true;
    }

    moveTo(destination) {
        if (!this.canMoveTo(destination)) {
            throw new Error("Invalid move");
        }

        const currentCell = this.position;
        const destinationCell = destination.board.getCell(destination.x, destination.y);

        // Move the bishop to the destination cell
        destinationCell.piece = this;
        this.position = destinationCell;
        currentCell.piece = null;
    }
}