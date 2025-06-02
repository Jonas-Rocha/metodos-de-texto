let message = "Estou estudando os fundamentos do Javascript.";

console.log(message);

// Exibir texto em maiúsculo.
console.log(message.toUpperCase());

// Exibir texto em minúsculo.
console.log(message.toLowerCase());

// Comprimento de uma string.
console.log(message.length);

let password = "123456";

if (password.length < 6) {
  console.log("A senha deve ter ao menos 6 caracteres");
}

// Quantos digitos tem um número

let value = 12345;

// console.log(value.length); // não funciona pois o metodo "length" é para strings

// se converter para texto funciona
console.log(String(value).length);
console.log(value.toString().length);

// Substituindo partes de um texto.
console.log(
  message.replace("os fundamentos do Javascript", "Métodos de String")
); // o conteúdo original de "message" continua o mesmo, porém eu o substituo na hora de mostrar com o .replace

//mostrando o conteúdo original
console.log(message);

// Extraindo uma parte da string (start, end)
console.log(message.slice(6, 30));

// Extraindo uma parte da string de trás para frente.
console.log(message.slice(-11));

let textWithSpace = "   Texto de exemplo   ";
console.log(textWithSpace.length);

// Remove espaços em branco no início e no final de uma string
// Ele não remove espaços no meio de uma string pois entende que faz parte da string normal.
console.log(textWithSpace.trim());

const creditCard = "1234567812344928";
console.log(creditCard.length);

const lastDigits = creditCard.slice(-4);
// console.log(lastDigits);

// O padStart preenche a string do início.
const maskedNumber = lastDigits.padStart(/*16*/ creditCard.length, "X");
console.log(maskedNumber);

// O padEnd preenche a string no final.

const number = "123";
console.log(number.padEnd(10, "#"));

// Separando e unindo strings

let text = "Estudar, Aprender, Praticar";

// Separar a String.
let separate = text.split(",");
console.log(separate);

let message1 = "Estou aprendendo Javascript";

console.log(message1.split("en"));

// Unir a String.
let joined = separate.join(" - ");
console.log(joined);

//Encontrando um conteúdo no texto
// Obtém a posição da palavra.
console.log(message.indexOf("Javascript"));

// Quando não encontra retorna -1
console.log(message.indexOf("javascript"));

// Verifica se existe a palavra na String.
// O Javascript é case sensitive então tome cuidado.
console.log(message.includes("Javascript"));

// Porem, se eu passar o texto todo para maiúsculo ou miúsculo antes, ele vai contrar pois o texto foi transformado antes.
console.log(message.toUpperCase().includes("JAVASCRIPT"));

console.log(includes("HTML"));
console.log(includes("estudando os fundamentos"));
