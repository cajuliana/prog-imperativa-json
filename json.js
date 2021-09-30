//exercicio

let cadastro = {
    "nome": "Carla",
    "apelido": "caju",
    "idade": 30,
    "usuario": "cajuliana",
    "email": "carlajldantas@gmail.com"
}

console.log(cadastro.email);

//mesa de trabalho 

let Conta = function (numero, tipoConta, saldo, titular){
    this.numero = numero;
    this.tipo = tipoConta;
    this.saldo = saldo;
    this.titular = titular;
}  

let user = new Conta(5486273622, "Conta Corrente", 27771, "Abigael Natte",);


let clientes = [ 
    {
    "numero": "5486273622",
    "tipo": "Conta Corrente",
    "saldo": 27771,
    "titular": "Abigael Natte"
},
{
    "numero": "1183971869",
    "tipo": "Conta Poupança",
    "saldo": 8675,
    "titular": "Ramon Connell" 
},
{
    "numero": "9582019689",
    "tipo": "Conta Poupança",
    "saldo": 27363,
    "titular": "Jarret Lafuente" 
},
{
    "numero": "1761924656",
    "tipo": "Conta Poupança",
    "saldo": 32415,
    "titular": "Ansel Ardley" 
},
{
    "numero": "7401971607",
    "tipo": "Conta Poupança",
    "saldo": 18789,
    "titular": "Jacki Shurmer" 
},
{
    "numero": "630841470",
    "tipo": "Conta Corrente",
    "saldo": 28776,
    "titular": "Jobi Mawtus" 
},
{
    "numero": "4223508636",
    "tipo": "Conta Corrente",
    "saldo": 2177,
    "titular": "Thomasin Latour" 
},
{
    "numero": "185979521",
    "tipo": "Conta Poupança",
    "saldo": 25994,
    "titular": "Lonnie Verheijden" 
},
{
    "numero": "3151956165",
    "tipo": "Conta Corrente",
    "saldo": 7601,
    "titular": "Alonso Wannan" 
},
{
    "numero": "2138105881",
    "tipo": "Conta Poupança",
    "saldo": 33196,
    "titular": "Bendite Huggett" 
},
];

let listaContas = []; // lista de objetos criada


for (let i = 0; i < clientes.length; i++) {
    listaContas.push(new Conta(clientes[i].numero, clientes[i].tipo, clientes[i].saldo, clientes[i].titular));
}

// console.log(listaContas);

let Banco = {
    clientes : listaContas,
    consultarCliente : function(nome) {   // Pesquisar cliente
        for (i in listaContas) {
            if (listaContas[i].titular == nome) {
                return listaContas[i];
            }
        }
        return "Cliente não localizado";
    },

    // Depósito
    deposito : function(nome, valor) {
        for (i in listaContas) {
            if (listaContas[i].titular == nome) {
                listaContas[i].saldo += valor;
                return "Depósito realizado, seu novo saldo é de R$ " + listaContas[i].saldo;
            }
        }
        return "Depósito não realizado. O Titular não foi encontrado."
    },

    // Saque
    saque : function(nome, valor) {
        for (i in listaContas) {
            if (listaContas[i].titular == nome) {
                listaContas[i].saldo -= valor;
                if (listaContas[i].saldo < 0) {
                    return "Operação não realizada. Saldo insuficiente.";
                } else {
                    return "Extração feita com sucesso, seu novo saldo é de R$ " + listaContas[i].saldo;
                }
            }
        }
    },
}

// Testes
console.log(Banco.consultarCliente("Thomasin Latour"));
console.log(Banco.deposito("Thomasin Latour", 2000));
console.log(Banco.saque("Thomasin Latour", 3000));
console.log(Banco.saque("Thomasin Latour", 10000));
