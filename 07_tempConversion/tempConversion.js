const ftoc = function(farenh) {
  let celc = (farenh - 32) * (5/9);
  Number(celc);
  celc = Math.round(celc *10) / 10;
  return celc;
};

const ctof = function(celc) {
  let farenh = (celc * (9/5) +32);
  Number(farenh);
  farenh = Math.round(farenh *10) / 10;
  return farenh;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
