const palindromes = function (string) { // 'A car, a man, a maraca.'

    let str1 = string.replace(/\s/g, '');
    let str2 = str1.replace(/,/g, '');
    let str3 = str2.replace(/\./g, "");
    let lowerCasestr3 = str3.toLowerCase();
    let finalstr = lowerCasestr3.replace("!","")


    let array = [...string];  // ['A', ' ', 'c', 'a', 'r', ',', ' ', 'a', ' ', 'm', 'a', 'n', ',', ' ', 'a', ' ', 'm', 'a', 'r', 'a', 'c', 'a', '.']
    revArray = array.reverse(); // ['.', 'a', 'c', 'a', 'r', 'a', 'm', ' ', 'a', ' ', ',', 'n', 'a', 'm', ' ', 'a', ' ', ',', 'r', 'a', 'c', ' ', 'A']
    let revString = revArray.join(""); // .acaram a ,nam a ,rac A'

    let rstr = revString.replace(/\s/g, '');
    let rstr2 = rstr.replace(/,/g, '');
    let rstr3 = rstr2.replace(/\./g, "") //'acaramanamaracA'
    let lowerCaserstr3 = rstr3.toLowerCase(); //'acaramanamaraca'
    let finalrstr = lowerCaserstr3.replace("!","")



    if(finalrstr === finalstr){
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
