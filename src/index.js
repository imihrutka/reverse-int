module.exports = function reverse (n) {
    let reversed = n.toString().split('').reverse().join('');
    return Math.abs(parseInt(reversed) * 1);
}
