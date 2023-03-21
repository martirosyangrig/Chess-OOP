import Figure from "./Figure.js";

class Queen extends Figure {
    constructor(color, cell, board){
        super(color, cell);
        this.name = "Queen";
        this.board = board
    }

    canMoveTo(destination) {
        const dx = Math.abs(destination.x - this.position.x);
        const dy = Math.abs(destination.y - this.position.y);

        if (destination.getPiece() && destination.getPiece().color === this.color) {
            // Can't move to a cell containing our own piece
            return false;
        }
        // Check for obstacles in the Queen's path
        const xDir = destination.x > this.position.x ? 1 : destination.x < this.position.x ? -1 : 0;
        const yDir = destination.y > this.position.y ? 1 : destination.y < this.position.y ? -1 : 0;
        let currX = this.position.x + xDir;
        let currY = this.position.y + yDir;
        while (currX !== destination.x || currY !== destination.y) {
            const cell = this.board.getCell(currX, currY);
            if (cell && !cell.isEmpty()) {
                return false; // Obstacle in the way
            }
            currX += xDir;
            currY += yDir;
        }

        // Queen can move horizontally, vertically or diagonally
        return (dx === dy) || (dx === 0) || (dy === 0);
    }
    
    moveTo(destination) {
        if (this.canMoveTo(destination)) {
            this.position = destination;
            return true;
        } else {
            return false;
        }
    }
}