//exercío 1
//a) O construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe. Para chama-lo é necessário declara-lo como a função construtor.

//b)

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

const user1 = new UserAccount("111.111.222-22", "luisa", 30);
const user2 = new UserAccount("222.222.111-11", "oliver", 32);

const newTransaction = new Transaction("tranferência", 8000, "10/10/22");
user1.setTransactions(newTransaction);

//c) Através dos métodos getter e setter.
