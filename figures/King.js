import Figure from "./Figure.js";

export default class King extends Figure {
    constructor(color, position, board) {
        super(color, position);
        this.hasMoved = false; // added to keep track if the king has moved or not
        this.board = board;
    }

    canMoveTo(destination) {
        const xDiff = Math.abs(destination.x - this.position.x);
        const yDiff = Math.abs(destination.y - this.position.y);
        
        if (destination.getPiece() && destination.getPiece().color === this.color) {
            // Can't move to a cell containing our own piece
            return false;
        }
        // Check if the destination is not the same as the current position and is within one square in any direction
        if (xDiff <= 1 && yDiff <= 1 && !(xDiff === 0 && yDiff === 0)) {
             // Check for obstacles in the king's path
            const xDir = destination.x - this.position.x > 0 ? 1 : -1;
            const yDir = destination.y - this.position.y > 0 ? 1 : -1;

            let x = this.position.x + xDir;
            let y = this.position.y + yDir;

            while (x !== destination.x || y !== destination.y) {
                if (!this.board.getCell(x, y).isEmpty()) {
                    return false;
                }
                x += xDir;
                y += yDir;
            }
            return true;
        }     
        return false;
    }

    moveTo(destination) {
        if (this.canMoveTo(destination)) {
            this.position = destination;
            this.hasMoved = true;
            return true;
        }     
        return false;
    }
}
