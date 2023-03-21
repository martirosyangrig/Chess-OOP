import Figure from "./Figure.js";

class Pawn extends Figure {
    constructor(color, position, board){
        super(color, position);
        this.name = "Pawn";
        this.board = board;
    }

    canMoveTo(destCell) {
        const currentCell = this.position;
        const currentX = currentCell.x;
        const currentY = currentCell.y;
        const destX = destCell.x;
        const destY = destCell.y;
        const deltaX = Math.abs(destX - currentX);
        const deltaY = destY - currentY;
        
        if (destCell.getPiece() && destCell.getPiece().color === this.color) {
            // Can't move to a cell containing our own piece
            return false;
        }
        if (this.color === "white") {
            if (deltaY === -1 && deltaX === 0 && destCell.isEmpty()) {
                return true;
            } else if (deltaY === -2 && deltaX === 0 && currentX === 6 && destCell.isEmpty() && this._isPathEmpty(currentCell, destCell)) {
                return true;
            } else if (deltaY === -1 && deltaX === 1 && !destCell.isEmpty() && destCell.getPiece().color === "black") {
                return true;
            }
        } else if (this.color === "black") {
            if (deltaY === 1 && deltaX === 0 && destCell.isEmpty()) {
                return true;
            } else if (deltaY === 2 && deltaX === 0 && currentX === 1 && destCell.isEmpty() && this._isPathEmpty(currentCell, destCell)) {
                return true;
            } else if (deltaY === 1 && deltaX === 1 && !destCell.isEmpty() && destCell.getPiece().color === "white") {
                return true;
            }
        }

        return false;
    }

    moveTo(destCell) {
        if (this.canMoveTo(destCell)) {
            destCell.piece = this;
            this.position = destCell;
            return true;
        }
        return false;
    }

    _isPathEmpty(startCell, endCell) {
        const direction = startCell.y - endCell.y > 0 ? -1 : 1;

        for (let i = startCell.y + direction; i !== endCell.y; i += direction) {
            if (!startCell.isEmpty()) {
                return false;
            }
        }
        return true;
    }
}