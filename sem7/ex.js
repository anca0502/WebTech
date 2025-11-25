class InvalidType extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidType";
    }
}

function distance(text1, text2){
    if (
        !(
            (typeof text1 === "string" || text1 instanceof String) &&
            (typeof text2 === "string" || text2 instanceof String)
        )
    ) {
        throw new InvalidType('Both inputs must be Strings or strings');
    }

    text1 = text1.toString();
    text2 = text2.toString();

    if ((text1.length === 0 && text2.length === 0) || text1 === text2) {
        return 0;
    }
    else {
        let dist = 0;

        const n = text1.length;
        const m = text2.length;

        let matrix = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

        for (let i = 0; i <= n; i++) {
            matrix[i][0] = i;
        }

        for (let j = 0; j <= m; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                const cost = text1.charAt(i - 1) === text2.charAt(j - 1) ? 0 : 1;

                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j - 1] + cost
                );
            }
        }

        dist = matrix[n][m];
        return dist;
    }
}
