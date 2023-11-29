class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;

        switch(this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let mago1 = new heroi('Arduin', 25, 'mago');
let guerreiro1 = new heroi('Barbion', 32, 'guerreiro');
let monge1 = new heroi('Zephyr', 45, 'monge');
let ninja1 = new heroi('Kagen', 21, 'ninja');
let necromante1 = new heroi('Eir', 37, 'necromante');

mago1.atacar();
guerreiro1.atacar();
monge1.atacar();
ninja1.atacar();
necromante1.atacar();