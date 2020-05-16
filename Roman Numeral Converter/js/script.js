function convertToRoman(num){

  const romanTable = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
}

  let storage = ''

    for (const key in romanTable){
        const romanNumber = romanTable[key];

        while (romanNumber<= num){
          num -= romanNumber;
          storage += key;
        }
    }
  
  return storage;
}

convertToRoman(36);
 