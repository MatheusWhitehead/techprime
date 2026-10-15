export class Modelo {
    static ["lista"]
    #nome
    #credencial
    #turno
    
    constructor(nomeCompleto, credencialAcesso, turnoTrabalho) {
        this.nome = nomeCompleto;
        this.credencial = credencialAcesso;
        this.turno = turnoTrabalho;
    }
    contratarTecnico() {
        const credencial = credencialAcesso();
        const turno = turnoTrabalho();

        if (credencial === '' || turno === '') {
            alert('[CAMPO VAZIO] todos os campos tem que ser obrigatoriamente preenchidos')
        }
        listarEquipe();
   }
 }