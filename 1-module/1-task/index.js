/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
    let i;
    let j = m;
    for (i = 1; i < n; i++) {
        j = j * m;
    }

    return j;
}
