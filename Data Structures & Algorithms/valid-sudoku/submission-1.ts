class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rows = new Uint16Array(9);
        const cols = new Uint16Array(9);
        const boxes = new Uint16Array(9);

        for(let r = 0; r < 9; r++) {
            for(let c = 0; c < 9; c++) {
                const char = board[r][c];

                if(char === '.') continue;

                const val = char.charCodeAt(0) - '0'.charCodeAt(0);
                const mask = 1 << val;
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if((rows[r] & mask) !== 0 ||
                    (cols[c] & mask) !== 0 ||
                    (boxes[boxIndex] & mask) !== 0) {
                        return false;
                }

                rows[r] |= mask;
                cols[c] |= mask;
                boxes[boxIndex] |= mask
            }
        }

        return true;
    }
}
