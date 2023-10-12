//Changing human speak into 'whale speak'

const input = 'What does this phrase sound like in whale talk?';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultArray = [];

//Creates an array with only the vowels from 'input'. e's and u's are captured twice
for(let i = 0; i < input.length; i++){
  for (let j = 0; j < vowels.length; j++){
    if(input[i] == vowels[j]){
      resultArray.push(input[i]);
      if(input[i] == 'e' || input[i] == 'u'){
      resultArray.push(input[i]);
    }
  }
}
}

//Converts the resulting array to an uppercase string
resultString = (resultArray.join("")).toUpperCase();
console.log(resultString);