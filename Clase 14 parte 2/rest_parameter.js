function smarTodo(...numeros){
    return numeros.reduce((acum, n) => acum + n, 0);
}

console.log(SumarTodo(1,2,3));
console.log(SumarTodo(2, 10, 15, 20));

