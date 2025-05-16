let input=undefined;
let m="good morning";
let f="good eve!";

greet(input);

m=input;
f=input;

function morning()
{

//console.log(input.toUpperCase());
 input=m.toUpperCase();

}

function afterNoon()
{
input=f;
input=f.toUpperCase();
}


function greet(input)
{

input=window.prompt("Enter either 'm' or 'f'");

if(input==='m')
{
morning();
}

else if(input==='f')
{
afterNoon();
}
}
console.log(input);

