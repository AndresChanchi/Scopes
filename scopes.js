var a; // declarando
var b = 'b'; // declaramos / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaración


// Global Scope

var fruit = 'Orange'; // global
console.log(fruit);

function worstFruit()
{
  alert(fruit);
}

worstFruit();


function countries()
{
  country = 'Mexico'; // global
  console.log(country);
}

countries();
console.log(country);
