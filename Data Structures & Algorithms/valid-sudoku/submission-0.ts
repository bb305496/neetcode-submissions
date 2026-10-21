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

                rows[r] = rows[r] | mask;
                cols[c] = cols[c] | mask;
                boxes[boxIndex] = boxes[boxIndex] | mask;

            }
        }
        return true;
    }
}

// 000000000 -> mask (for example number 4) -> 000010000 -> 5th position (start from 0)