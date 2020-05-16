function palindromeChecker(str){
    const alphanumericOnly = str.toLowerCase().match(/[a-z0-9]/g); // string a minúsculas  y Regex indicando que debe de cumplirse de la a - z y de 0 - 9.

    return alphanumericOnly.join('') === alphanumericOnly.reverse().join(''); //Identico a su string al revés.
    
}
palindromeChecker('eye');