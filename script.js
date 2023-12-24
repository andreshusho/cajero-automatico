class Account {
    constructor(name, balance, password) {
        this.name = name;
        this.balance = balance;
        this.password = password;
    }
}

var accounts = [
    { name: "Mali", balance: 200, password: "123" },
    { name: "Gera", balance: 290, password: "456" },
    { name: "Maui", balance: 67, password: "789" }
   ];
   
   var cuentaactual = -1;
   
   function validarcontraseña() {
    var cuentaseleccionada = document.getElementById("accountList").value;
    var password = document.getElementById("password").value;
     
    if (password === accounts[cuentaseleccionada].password) {
        cuentaactual = cuentaseleccionada;
        mostrarmenu();
    } else {
       document.getElementById("output").innerHTML = "Contraseña invalida, porfavor, vuelva a intentarlo.";
    }
   }
   
   function mostrarmenu() {
    document.getElementById("output").innerHTML = `
       <p>Bienvenido, ${accounts[cuentaactual].name}!</p>
       <button onclick="checarbalance()">Checar balance</button>
       <button onclick="depositar()">Depositar</button>
       <button onclick="retirar()">Retirar</button>
    `;
   }
   
   function checarbalance() {
    document.getElementById("output").innerHTML = `
       <p>Balance actual: $${accounts[cuentaactual].balance}</p>
    `;
   }
   
   function depositar() {
    var amount = prompt("Digite la cantidad a depositar:");

    if (parseInt(amount) <= 990 && accounts[cuentaactual].balance + parseInt(amount) <= 990) {
        accounts[cuentaactual].balance += parseInt(amount);
        checarbalance();
    } else {
        alert("Deposito invalido. El balance no puede ser mayor a 990");
    }
}
   function retirar() {
    var amount = prompt("Digite la cantidad a retirar:");
    if (parseInt(amount) <= accounts[cuentaactual].balance) {
        accounts[cuentaactual].balance -= parseInt(amount);

       
        if (accounts[cuentaactual].balance >= 10 && accounts[cuentaactual].balance <= 990) {
            checarbalance();
        } else {
            alert("Retiro invalido. El balance no puede ser menor a 10");
        }
    } else {
        alert("Retiro invalido. El balance no puede ser menor a 10");
    }
}