//console.log("Hey!");



let count_of_HUTZ = 0;
let count_of_NBP = 0;
let count_of_IBS = 0;





const people = [

        {
                fname: "Anudeep",
                lname: "Nayakoti",
                subject: "Lit",
                banking: 'IBS'
        },

        {
                fname: "krishna",
                lname: "Singh",
                subject: "Defence",
                banking: 'IBS'
        },

        {
                fname: "Arjun",
                lname: "kuru",
                subject: "Sports",
                banking: 'IBS'
        },
        {
                fname: "Madri",
                lname: "Pandu",
                subject: "Medicine",
                banking: 'NBP'
        },

        {
                fname: "karlz",
                lname: "Ford",
                subject: "Engineering",
                banking: "HUTZ"
        },
        {
                fname: "Kyle",
                lname: "Hankcock",
                subject: "Contruction",
                banking: "HUTZ"
        },
        {
                fname: "Abuzz",
                lname: "Singh",
                subject: "IT",
                banking: "HUTZ"
        },
        {
                fname: "Pulz",
                lname: "Baap",
                subject: "Economics",
                banking: "HUTZ"
        },
];

const result = people.reduce(

        (x, y) => {



                if (y.banking === 'HUTZ') {
                        // console.log(y.lname);
                        count_of_HUTZ++;
                } else if (y.banking === 'IBS') {
                        // console.log(y.lname);
                        count_of_IBS++;
                } else if (y.banking === 'NBP') {
                        // console.log(y.lname);
                        count_of_NBP++;
                }


        }, {});

console.log("Survey Results:");
console.log("----------------------------------------------");
console.log("HUTZ :" + count_of_HUTZ);
console.log("IBS :" + count_of_IBS);
console.log("NBP :" + count_of_NBP);
const maxer = Math.max(count_of_HUTZ, count_of_IBS, count_of_NBP);
console.log("Highest score:" + maxer);
let winner = people[4].banking;
console.log(`Congratulations ${winner}!`);