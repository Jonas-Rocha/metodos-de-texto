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
