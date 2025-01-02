 /* // 01/01/25
let count = 0;
    function Count() {
        for (let i = 0; i < 1; i++) {
            count++;
        }
        document.getElementById("counterDisplay").innerHTML = "Count: " + count;
        
        
    } 

//02/01/25
//number of sum 13 using for loop
let num = [10,11,12,13,1,2,3];
let sum =13;
for(let i=0; i<num.length; i++){
    for(let j=i+1; j<num.length; j++){
        if (num[i] + num[j] === sum){
            console.log("Pair is " + num[i] + " and " + num[j]);
        
        }

    }
}  */


//02/01/25
let bank = [
    {name:"Virat",age:19},
    {name:"Rohit",age:25},
    {name:"Hardik",age:23},
    {name:"Shrey",age:13},
    {name:"SKY",age:25},
    {name:"bumrah",age:10}
];
let person = bank.filter(a => a.age >= 18);
console.log(person);
let name = bank.map(a => a.name);
console.log(name);
let adult = bank.reduce((a,person) => {
    return person.age >= 18? a + 1 : a;
},0);
console.log(adult);


