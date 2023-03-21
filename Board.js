import Cell from "./Cell.js";

export default class Borard {   
    constructor() {
        this.squares = [];
    }

    initBoard() {
        for (let row = 0; row < 8; row++) {
            this.squares[row] = [];
            for (let col = 0; col < 8; col++) {
                const cell = new Cell(row, col)
                this.squares[row][col] = cell;
            }
        }
    }

    getCell(x, y) {
        if (x < 0 || x > 7 || y < 0 || y > 7) {
            return null;
        }
        return this.squares[y][x];
    }

    setUpPawns() {
        for (let col = 0; col < 8; col++) {
            this.squares[1][col] = new Pawn('black', this.squares[1, col], this);
            this.squares[6][col] = new Pawn('white', this.squares[6, col], this);
        }
    }

    setUpRooks() {
        this.squares[0][0] = new Rook('black', this.squares[0][0], this);
        this.squares[0][7] = new Rook('black', this.squares[0][7], this);
        this.squares[7][0] = new Rook('white', this.squares[7][0], this);
        this.squares[7][7] = new Rook('white', this.squares[7][7], this);
    }

    setUpKnights() {
        this.squares[0][1] = new Knight('black', this.squares[0][1], this);
        this.squares[0][6] = new Knight('black', this.squares[0][6], this);
        this.squares[7][1] = new Knight('white', this.squares[7][1], this);
        this.squares[7][6] = new Knight('white', this.squares[7][6], this);
    }

    setUpBishops() {
        this.squares[0][2] = new Bishop('black',this.squares [0][2], this);
        this.squares[0][5] = new Bishop('black', this.squares[0][5], this);
        this.squares[7][2] = new Bishop('white', this.squares[7][2], this);
        this.squares[7][5] = new Bishop('white', this.squares[7][5], this);
    }

    setUpQueens() {
        this.squares[0][3] = new Queen('black', this.squares[0][3], this);
        this.squares[7][3] = new Queen('white', this.squares[7][3], this);
    }

    setUpKings() {
        this.squares[0][4] = new King('black', this.squares[0][4], this);
        this.squares[7][4] = new King('white', this.squares[7][4], this);
    }
}
