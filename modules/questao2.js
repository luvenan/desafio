//Questão 2 - Débora se inscreveu em uma rede social para se manter em contato com seus amigos. A página de cadastro exigia o preenchimento dos campos de nome e senha, porém a senha precisa ser forte. O site considera uma senha forte quando ela satisfaz os seguintes critérios:
    //Possui no mínimo 6 caracteres.
    //Contém no mínimo 1 digito.
    //Contém no mínimo 1 letra em minúsculo.
    //Contém no mínimo 1 letra em maiúsculo.
    //Contém no mínimo 1 caractere especial. Os caracteres especiais são: !@#$%^&*()-+
// Débora digitou uma string aleatória no campo de senha, porém ela não tem certeza se é uma senha forte. Para ajudar Débora, construa um algoritmo que informe qual é o número mínimo de caracteres que devem ser adicionados para uma string qualquer ser considerada segura.

function validarSenha(senha) {
    let charAdicionais = 0;
    let minChar = 0;
    //Verifica se a senha tem no minimo 6 caracteres
    if(senha.length < 6) {
        // console.log("A senha precisa ter no minimo 6 caracteres");
        minChar = 6 - senha.length;
    }
    //Verifica se a senha contém números
    if(!senha.match(/\d/)) {
        // console.log("A senha precisa ter no minimo 1 numero");
        charAdicionais++;
    }
    //Verifica se a senha contém letras maiúsculas
    if(!senha.match(/[A-Z]/)) {
        // console.log("A senha precisa ter pelo menos uma letra maiúscula");
        charAdicionais++;
    }
    //Verifica se a senha contém letras minúsculas
    if(!senha.match(/[a-z]/)) {
        // console.log("A senha precisa ter pelo menos uma letra minúscula");
        charAdicionais++;
    }
    //Verifica se a senha contém caracteres especiais
    if(!senha.match(/[!@#$%^&*()-+]/)) {
        // console.log("A senha precisa ter pelo menos um caractere especial: !@#$%^&*()-+");
        charAdicionais++;
    }

    //Confere qual o número mais alto: o número mínimo de caracteres que falta para completar 6 ou o número de caracteres necessários para preencher os requisitos restantes. Atualiza o número de caracteres adicionais necessários.
    if (charAdicionais < minChar) {
        charAdicionais = minChar;
    }
    console.log("A senha precisa ter no minimo " + charAdicionais + " caracteres adicionais");
    return charAdicionais;
}



//Exporta a funnção para o app.js
exports.validarSenha = validarSenha;