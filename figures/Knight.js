import Figure from "./Figure.js";

class Knight extends Figure {
    constructor(color, cell, board){
        super(color, cell);
        this.name = "Knight";
        this.board = board;
    }
    canMoveTo(destination) {
        const xDiff = Math.abs(destination.x - this.position.x);
        const yDiff = Math.abs(destination.y - this.position.y);
        
        if (destination.getPiece() && destination.getPiece().color === this.color) {
            // Can't move to a cell containing our own piece
            return false;
        }
        // Check for obstacles
        const xDir = destination.x > this.position.x ? 1 : -1;
        const yDir = destination.y > this.position.y ? 1 : -1;
        if (xDiff === 2 && yDiff === 1) {
            // Check if diagonal cell is empty
            const diagonalCell = this.board.getCell(this.position.x + xDir, this.position.y + yDir);
            if (diagonalCell && !diagonalCell.getPiece()) {
                return true;
            }
        } else if (xDiff === 1 && yDiff === 2) {
            // Check if cell in the same row or column as destination is empty
            const rowCell = this.board.getCell(this.position.x + xDir, this.position.y);
            const colCell = this.board.getCell(this.position.x, this.position.y + yDir);
            if ((rowCell && !rowCell.getPiece()) || (colCell && !colCell.getPiece())) {
                return true;
            }
        }
        return false;
    }
    
    moveTo(destination) {
        if (this.canMoveTo(destination)) {
            this.position = destination;
        } else {
            throw new Error("Invalid move!");
        }
    }
}