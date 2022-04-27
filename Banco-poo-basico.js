class ContaBanco {
    // Atributos
    numConta;
    tipo;
    dono;
    saldo;
    status;

    // Métodos Personalizados: regras de negócio passadas dentro de métodos
    estadoAtual() {
        console.log('------------------------------')
        console.log('Conta: ', this.getNumConta());
        console.log('Tipo: ', this.getTipo());
        console.log('Dono: ', this.getDono());
        console.log('Saldo: ', this.getSaldo());
        console.log('Status: ', this.getStatus());
    }

    abrirConta(t) {
        this.setTipo(t);
        this.setStatus(true);

        if (t == 'CC') {
            this.setSaldo(50);

        } else if (t == 'CP') {
            this.setSaldo(150);
        }

        console.log('Conta aberta com sucesso');
    }

    fecharConta() {
        if (this.getSaldo() > 0) {
            console.log('Conta não pode ser fechada pois ainda tem dinheiro');

        } else if(this.getSaldo() < 0) {
            console.log('Conta não pode ser fechada pois ainda tem débito');

        } else {
            this.setStatus(false);
            console.log('Conta fechada com sucesso');

        }
    }

    depositar(valor) {
        if (this.getStatus()) {
            this.setSaldo(this.getSaldo() + valor);
            console.log('Depósito realizado na conta de', this.getDono());
        } else {
            console.log('Impossível depositar, conta não existe ou conta fechada');

        }

    }
    sacar(valor) {
        if (this.getStatus()) {

            if (valor > this.getSaldo()) {
                console.log('Saldo da sua conta é insuficiente para o saque, deposite mais');

            } else if (this.getSaldo() > 0) {
                this.setSaldo(this.getSaldo() - valor);
                console.log('Saque realizado na conta de', this.getDono());
    
            }
            
        } else {
            console.log('Impossível sacar, conta não existe ou conta fechada');

        }
    }
    pagarMensal() {
        let valor = 0;

        if (this.getTipo() == 'CC') {
            valor = 12;
            
        } else if (this.getTipo() == 'CP') {
            valor = 20;
            
        }

        if (this.getStatus()) {
            this.setSaldo(this.getSaldo() - valor);
            console.log('Mensalidade paga com sucesso por', this.getDono());

        } else {
            console.log('Impossível pagar uma conta fechada ou inexistente');

        }
    }

    // Métodos Especiais: o construtor inicia o objeto com os valores passado para ele. O get retorna o atributo e o set retorna uma
    // atualização do atributo passada pelo seu parâmetro.
    constructor() {
        this.saldo = 0;    
        this.status = false;
    }

    setNumConta(numConta) {
        this.numConta = numConta;
    }
    getNumConta() {
        return this.numConta;
    }
    
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getTipo() {
        return this.tipo;
    }
    
    setDono(dono) {
        this.dono = dono;
    }
    getDono() {
        return this.dono;
    }
    
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    getSaldo() {
        return this.saldo;
    }
    
    setStatus(status) {
        this.status = status;
    }
    getStatus() {
        return this.status;
    }
}

const p1 = new ContaBanco

p1.setNumConta(1111);
p1.setDono('Marcelo');
p1.abrirConta('CC');
p1.sacar(50);
p1.depositar(50);
p1.sacar(60)

console.log(p1);

const p2 = new ContaBanco

p2.setNumConta(2222);
p2.setDono('Pedro');
p2.abrirConta('CP');

console.log(p2);