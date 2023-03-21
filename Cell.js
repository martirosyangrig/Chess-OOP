class Cell {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.piece = null;
    }
    
    getPiece() {
      return this.piece;
    }
    
    isEmpty() {
        return !this.piece;
    }

    setPiece(piece) {
      this.piece = piece;
    }
}