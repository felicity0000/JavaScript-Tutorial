let fruits = ["Apple", "Banana", "Mango", "Orange", "Papaya"];
document.write(fruits[0]+"<br>"); //Apple

document.write(fruits.length); // 5

for(let i = 0; i < fruits.length; i++) {    
    document.write(fruits[i] + "<br>"); // Print array element
}

//for-of loop
for(let fruit of fruits) {    
    document.write(fruit + "<br>"); // Print array element
}

//for-in loop
// Loop through all the elements in the array 
for(let i in fruits) {  
    document.write(fruits[i] + "<br>");
}