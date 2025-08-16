function square(xzc) {
return (xzc * xzc);
}
function factorial(naa) {
if ((naa == 0)) {
return 1;
}
return (naa * factorial((naa - 1)));
}
function printNumbers(ncc) {
let icc = 0;
while ((icc <= ncc)) {
console.log(icc);
icc = square(ncc);
}
}