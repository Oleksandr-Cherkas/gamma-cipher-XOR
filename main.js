window.addEventListener('DOMContentLoaded', function() {
    var UserText = document.getElementById('text-to-work');
    var Key = document.getElementById('key');
    // var UserSelectStap = document.getElementById('encrypt-step');
    // var User_A = document.getElementById('encrypt-a');
    // var User_B = document.getElementById('encrypt-b');
    // var User_C = document.getElementById('encrypt-c');
    // var A = Number(User_A.value);
    // var B = Number(User_B.value);
    // var C = Number(User_C.value);

    var result = document.getElementById('output');
    var Encrypt = document.getElementById('encrypt-btn');
    var Decrypt = document.getElementById('decrypt-btn');
    var Reset = document.getElementById('btn-reset');
    // var Power = document.getElementById('power');
    // var File = document.getElementById('btn-file');
    var TextToWork;
    var pos, what;
    var number_x;
    var k;
    var X;
    var temp= 0;

    var OtherSymbols = [' ',',','.',':',';','!','?','-','_','=','+','(',')','[',']','@','`',"'",'"','<','>','|','/','%','$','^','&','*','~'];
    var Numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var EngAlfUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var EngAlfLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var UkrAlfUp = ['А','Б','В','Г','Ґ','Д','Е','Є','Ж','З','И','І','Ї','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ь','Ю','Я'];
    var UkrAlfLower = ['а','б','в','г','ґ','д','е','є','ж','з','и','і','ї','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ь','ю','я'];
    var EngAlfUpEncrypt = Array(26);
    var EngAlfLowerEncrypt = Array(26);
    var UkrAlfUpEncrypt = Array(33);
    var UkrAlfLowerEncrypt = Array(33);
    var NumbersEncrypt = Array(10);
    var OtherSymbolsEnc = Array(29);

    // initEncrypt();

    // UserSelectStap.addEventListener('change', function() {
    //   UserStep = 2;
    //   initEncrypt();
    // });
    // User_A.addEventListener('change', function() {
    //   A = Number(this.value);
    //   initEncrypt();
    // });
    // User_B.addEventListener('change', function() {
    //   B = Number(this.value);
    //   initEncrypt();
    // });
    // User_C.addEventListener('change', function() {
    //   C = Number(this.value);
    //   initEncrypt();
    // });

    // function initEncrypt() {
    //   NumbersEncrypt = XOREncrypt(X, Numbers);
    //   EngAlfUpEncrypt = XOREncrypt(X, EngAlfUp);
    //   EngAlfLowerEncrypt = XOREncrypt(X, EngAlfLower);
    //   UkrAlfUpEncrypt = XOREncrypt(X, UkrAlfUp);
    //   UkrAlfLowerEncrypt = XOREncrypt(X, UkrAlfLower);
    //   OtherSymbolsEnc = XOREncrypt(X, OtherSymbols);
    // }

    function quality () {
      let length = X.length;
      if (temp < length) {
        temp++;
      }
      else {
        temp = 0;
      }
    }

    function XOREncrypt(hm, x_, arr) {
      var CopyAlf = arr.slice();
      var number_g = 0;
      var L = 0;
      console.log("i:");
      console.log(hm);
      console.log("x_[temp]");
      console.log(x_[temp]);
      // let kek = ;
      for_x(x_[temp]);

      // k = (A*number_x*number_x + B*number_x + C);
      // console.log('k:');
      // console.log(k);
      console.log("what");
      console.log(what);
      console.log("number_x:");
      console.log(number_x);
      L = ((number_x+what)%(CopyAlf.length));
      console.log(L);

      // if (L > CopyAlf.length) {
      //   var lol = stap % CopyAlf.length;
      //   stap = lol;
      // }
      // while ((i + L) < (CopyAlf.length)) {
      //   var buff = CopyAlf[i];
      //   CopyAlf[i] = CopyAlf[i + L];
      //   CopyAlf[i + L] = buff;
      //   i++;
      // }
      quality ()
      return CopyAlf[L];
    }

    function XORDecrypt(hm, x_, arr) {
      var CopyAlf = arr.slice();
      var number_g = 0;
      var L = 0;
      console.log("i:");
      console.log(hm);
      console.log("x_[temp]");
      console.log(x_[temp]);
      // let kek = ;
      for_x(x_[temp]);

      // k = (A*number_x*number_x + B*number_x + C);
      // console.log('k:');
      // console.log(k);
      console.log("what");
      console.log(what);
      console.log("number_x:");
      console.log(number_x);
      //L = ((number_x+what)%(CopyAlf.length));
      L = ((number_x + CopyAlf.length - (what%(CopyAlf.length)))%(CopyAlf.length));
      console.log(L);

      // if (L > CopyAlf.length) {
      //   var lol = stap % CopyAlf.length;
      //   stap = lol;
      // }
      // while ((i + L) < (CopyAlf.length)) {
      //   var buff = CopyAlf[i];
      //   CopyAlf[i] = CopyAlf[i + L];
      //   CopyAlf[i + L] = buff;
      //   i++;
      // }
      quality ()
      return CopyAlf[L];
    }

    function for_x(symb) {
      if (contain(symb, OtherSymbols)) {
        return true;
      }
      if (contain(symb, Numbers)) {
        return true;
      }
      if (contain(symb, EngAlfUp)) {
        return true;
      }
      if ((contain(symb, EngAlfLower))) {
        return true;
      }
      if (contain(symb, UkrAlfUp)) {
        return true;
      }
      if ((contain(symb, UkrAlfLower))) {
        return true;
      }
    }


    function contains(symb, arr) {
      var letter = symb;
      pos = 0;
      for (let i = 0; i < arr.length; i++) {
        if (letter === arr[i]) {
          pos = i;
          return true;
          break;
        }
      }
    }
    function contain(sym, arr) {
      var lett = sym;
      what = 0;
      for (let ii = 0; ii < arr.length; ii++) {
        if (lett === arr[ii]) {
          what = ii;
          return true;
          break;
        }
      }
    }

    function encrypt(text, X_) {
      var result = '';
      for (var i = 0; i <= text.length; i++) {
        var symbol = text[i];
        console.log("symbol:");
        console.log(symbol);
        if (contains(symbol, OtherSymbols)) {
          number_x = i;
          symbol = XOREncrypt(i, X_, OtherSymbols);
          result += symbol;
        }
        if (contains(symbol, Numbers)) {
          number_x = i;
          symbol = XOREncrypt(i, X_, Numbers);
          result += symbol;
        }
        if (contains(symbol, EngAlfUp)) {
          number_x = i;
            symbol = XOREncrypt(i, X_, EngAlfUp);
            result += symbol;
        }
        if ((contains(symbol, EngAlfLower))) {
          number_x = i;
          console.log(pos);
          symbol = XOREncrypt(i, X_, EngAlfLower);
          result += symbol;
        }
        if (contains(symbol, UkrAlfUp)) {
          number_x = i;
            symbol = XOREncrypt(i, X_, UkrAlfUp);
            result += symbol;
        }
        if ((contains(symbol, UkrAlfLower))) {
          number_x = i;
          console.log(pos);
            symbol = XOREncrypt(i, X_, UkrAlfLower);
            result += symbol;
        }
      }
      return result;
    }

    function decrypt(text, X_) {
      var result = '';
      for (var i = 0; i <= text.length; i++) {
        var symbol = text[i];
        console.log("symbol:");
        console.log(symbol);
        if (contains(symbol, OtherSymbols)) {
          number_x = i;
          symbol = XORDecrypt(i, X_, OtherSymbols);
          result += symbol;
        }
        if (contains(symbol, Numbers)) {
          number_x = i;
          symbol = XORDecrypt(i, X_, Numbers);
          result += symbol;
        }
        if (contains(symbol, EngAlfUp)) {
          number_x = i;
            symbol = XORDecrypt(i, X_, EngAlfUp);
            result += symbol;
        }
        if ((contains(symbol, EngAlfLower))) {
          number_x = i;
          console.log(pos);
          symbol = XORDecrypt(i, X_, EngAlfLower);
          result += symbol;
        }
        if (contains(symbol, UkrAlfUp)) {
          number_x = i;
            symbol = XORDecrypt(i, X_, UkrAlfUp);
            result += symbol;
        }
        if ((contains(symbol, UkrAlfLower))) {
          number_x = i;
          console.log(pos);
            symbol = XORDecrypt(i, X_, UkrAlfLower);
            result += symbol;
        }
      }
      return result;
    }

    Encrypt.addEventListener('click', function() {
      TextToWork = UserText.value;
      X = Key.value;
      temp= 0
      result.value = encrypt(TextToWork, X);
    });
    Decrypt.addEventListener('click', function() {
      TextToWork = UserText.value;
      X = Key.value;
      temp= 0
      result.value = decrypt(TextToWork, X);
    });
    Reset.addEventListener('click', function() {
      UserText.value = '';
      result.value = '';
    });
    document.getElementById('myfile')
    .addEventListener('change', function() {

    var fr=new FileReader();
    fr.onload=function(){
        document.getElementById('text-to-work')
                .textContent=fr.result;
    }
    fr.readAsText(this.files[0]);
    // TextToWork = document.getElementById('output');
    result.value = decrypt(TextToWork);
    });
    // Power.addEventListener('click', function() {
    //   TextToWork = UserText.value;
    //   let o = "";
    //   result.value = decrypt1(TextToWork);
    // });
  });