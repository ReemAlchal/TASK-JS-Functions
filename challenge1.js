/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(x){
    console.log(`My Name is ${x}`)}

    printName("reem")

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birthYear,currentYeat){
    let Age = currentYeat -birthYear;
    console.log(`I am ${Age} years old`)
}
printAge(1999,2023)

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name,language){
    if (language === "en"){
        console.log(`Hello ${name}`)
    }
    else if(language === "es"){
        console.log(`Hola ${name}`)
    }
    else if (language === "fr"){
        console.log(`Bonjor ${name}`)
    }
    else if (language === "tr"){
        console.log(`Merhaba ${name}`)
    }
}
printHello("Reem","en")
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(x,y){
    if (x>y){
        console.log(x)
    }
    else {
        console.log(y)
    }
}

printMax(2,3)
