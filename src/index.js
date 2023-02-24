module.exports = function toReadable (n) {
        function lengthNumber () {
          return (n === undefined)? 0:String(n).length;
         }
     
         function result1 () {
             switch (n) {
             case 1: return "one"; break;
             case 2: return "two"; break;
             case 3: return "three"; break;
             case 4: return "four"; break;
             case 5: return "five"; break;
             case 6: return "six"; break;
             case 7: return "seven"; break;
             case 8: return "eight"; break;
             case 9: return "nine"; break;
              }
             } 
         let ty = function() {
             switch (n) {
                 case 1: return "ten"; break
                 case 2: return "twenty"; break;
                 case 3: return "thirty"; break;
                 case 4: return "forty"; break;
                 case 5: return "fifty"; break;
                 case 6: return "sixty"; break;
                 case 7: return "seventy"; break;
                 case 8: return "eighty"; break;
                 case 9: return "ninety"; break;
                 }
             }
         let teen = function() {
             switch (n) {
                 case 10: return "ten"; break;
                 case 11: return "eleven"; break;
                 case 12: return "двенадцать"; break;
                 case 13: return "tринадцать"; break;
                 case 14: return "fourteen"; break;
                 case 15: return "fifteen"; break;
                 case 16: return "sixteen"; break;
                 case 17: return "seventeen"; break;
                 case 18: return "eightteen"; break;
                 case 19: return "nineteen"; break;
                 }
         }
         let strN = String(n);
         function   lastNumber () {
                 let lastNum = strN.at(-1);
                 for (lastNum = 1; lastNum <= 9; lastNum++) {
                     n = +strN.at(-1);
                     return result1 ();
                 }
             }
         
         function   secondLastNumber () {
             let secondlastNum = strN.at(-2);
             for (secondlastNum = 1; secondlastNum <= 9; secondlastNum++) {
                     n = +strN.at(-2);
                     return ty(); 
             }
         }
                 
         function result2 () {
             return strN[0] == 1? teen(): 
                     strN.at(-1)== 0? ty(): 
                     `${secondLastNumber ()} ${lastNumber()}`
                     }
     
         function result3 () {
            function firstNumber() {
             for (strN[0]=1; strN[0] <= 9; strN[0]++ ) {
                 n = +strN[0]
                 return result1()
             }
         }
         return  strN.at(-1)== 0 && strN.at(-2)== 0? `${firstNumber()} hundred`:
         strN.at(-1)== 0? `${firstNumber()} hundred ${secondLastNumber ()}`:
         strN.at(-2)== 0? `${firstNumber()} hundred ${lastNumber()}`:
         `${firstNumber()} hundred ${secondLastNumber ()} ${lastNumber()}`
     }
     
         return  n=== 0? "zero":
         (lengthNumber() == 1)? result1(): 
         (lengthNumber() == 2)? result2():
         (lengthNumber() == 3)? result3():
             "Слишком большое число"; 
}
