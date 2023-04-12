const password = prompt('Introduce la contraseña');

if (password.length >= 8 && password.length <= 16) {
    console.log('Tu contraseña es válida.')
} else {
    console.log('Tu contraseña tiene una longitud incorrecta.');
}
