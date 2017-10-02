/**
 * hasDoubleLetters()
 *
 * Write a function called `hasDoubleLetters` that takes a string as
 *
**/

function hasDoubleLetters(word) {
  var double = false
  for (i=0; i<word.length-1; i++) {
    if (word[i].toLowerCase() === word[i+1].toLowerCase()) {
      return true
    }
  }
  return false
}


console.group('JS Iterations Week');
  console.log('%cFunction: hasDoubleLetters', 'background-color: green; color: white')
  console.groupCollapsed('Should return true for "shutter"');
    console.assert(hasDoubleLetters('stutter') === true)
  console.groupEnd();

  console.groupCollapsed('Should return false for "prospect"');
    console.assert(hasDoubleLetters('prospect') === false)
  console.groupEnd();

  console.groupCollapsed('Should return false for "shoehorn"');
    console.assert(hasDoubleLetters('shoehorn') === false)
  console.groupEnd();

  console.groupCollapsed('Should return true for "Aardvark"');
    console.assert(hasDoubleLetters('Aardvark') === true)
  console.groupEnd();
console.groupEnd();
