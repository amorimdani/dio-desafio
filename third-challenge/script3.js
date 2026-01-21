class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    if (this.tipo === "mago") {
      ataque = "magia";
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
}
let heroAttack = new Hero("João", 33, "ninja");

heroAttack.atacar();
