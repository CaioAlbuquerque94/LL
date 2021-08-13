

export class Usuario {
    
    nome: string;
    email: string = 'email@email.com';
    senha: string;
    endereco: any = {
        cep: '',
        numero: '',
        complemento: ''
    };
}