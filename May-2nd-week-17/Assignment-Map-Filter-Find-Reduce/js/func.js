//console.log(authors);
const result = authors.map((s) => {
        s.score = 0;

        return s.score += 32;
});
//console.log(result);
//onsole.log(authors);
//Score has been added. 

//Task 2-Filter() via 'number_books_published'
const res = authors.filter((s) => {

if(s. number_of_books_published<400){
return s;
}
       
    
});
//console.log("-----------");
//console.log(res);
//It will filter the objects based on the above condition.

//Task 3 to find a particular id via state="WA"
const x=authors.find((s)=>{
  return s.id=1207;
});
console.log(authors[7]);
