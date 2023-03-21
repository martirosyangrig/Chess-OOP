import Figure from "./Figure.js";

class Rook extends Figure {
    constructor(color, cell, board){
        super(color, cell);
        this.name = "Rook";
        this.board = board
    }

    canMoveTo(destination) {
        const deltaX = destination.x - this.position.x;
        const deltaY = destination.y - this.position.y;
    
        // Rook can only move horizontally or vertically
        if ((deltaX !== 0 && deltaY !== 0) || (deltaX === 0 && deltaY === 0)) {
            return false;
        }
        // Check if the destination is occupied by a figure of the same color
        if (destination.getPiece() && destination.getPiece().color === this.color) {
            // Can't move to a cell containing our own figure
            return false;
        }
        // Check for obstacles in the rook's path
        const stepX = deltaX === 0 ? 0 : deltaX > 0 ? 1 : -1;
        const stepY = deltaY === 0 ? 0 : deltaY > 0 ? 1 : -1;
        let x = this.position.x + stepX;
        let y = this.position.y + stepY;
        while (x !== destination.x || y !== destination.y) {
            if (!this.board.getCell(x, y).isEmpty()) {
                return false;
            }
            x += stepX;
            y += stepY;
        }
    
        return true;
    }
    
    moveTo(destination) {
        if (this.canMoveTo(destination)) {
            this.position = destination;
        } else {
            throw new Error("Invalid move for Rook");
        }
    }
}