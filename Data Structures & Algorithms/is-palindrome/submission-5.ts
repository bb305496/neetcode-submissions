class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let p1 = 0;
        let p2 = s.length - 1;

        const isAlphanumerical = (char) => {
            return (
                (char >= 'a' && char <= 'z') ||
                (char >= 'A' && char <= 'Z') ||
                (char >= '0' && char <= '9')
            )
        }

        while (p1 < p2) {
            while(p1 < p2 && !isAlphanumerical(s[p1])) {
                p1++
            };

            while(p1 < p2 && !isAlphanumerical(s[p2])) {
                p2--;
            };

            if(s[p1].toLowerCase() !== s[p2].toLowerCase()) {
                return false;
            }

            p1++;
            p2--;
        }

        return true;

    }
}
