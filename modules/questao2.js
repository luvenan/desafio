function validarSenha(senha) {
    let senhaValida = true;
    //Verifica se a senha tem no minimo 6 caracteres
    if(senha.length < 6) {
        console.log("A senha precisa ter no minimo 6 caracteres");
        senhaValida = false;
    }
    //Verifica se a senha contém números
    if(!senha.match(/\d/)) {
        console.log("A senha precisa ter no minimo 1 numero");
        senhaValida = false;
    }
    //Verifica se a senha contém letras maiúsculas
    if(!senha.match(/[A-Z]/)) {
        console.log("A senha precisa ter pelo menos uma letra maiúscula");
        senhaValida = false;
    }
    //Verifica se a senha contém letras minúsculas
    if(!senha.match(/[a-z]/)) {
        console.log("A senha precisa ter pelo menos uma letra minúscula");
        senhaValida = false;
    }
    //Verifica se a senha contém caracteres especiais
    if(!senha.match(/[!@#$%^&*()-+]/)) {
        console.log("A senha precisa ter pelo menos um caractere especial: !@#$%^&*()-+");
        senhaValida = false;
    }
    if(senhaValida) {
        console.log('A senha é segura!');
        return true;
    } else {
        return false;
    }
}

//Senhas testes

/*//Senha curta
validarSenha("a2C@");
//Senha sem letra minúscula
validarSenha('ERQEDV3%');
//Senha sem letra maiúscula
validarSenha('qeiruqo1&');
//Senhas sem caracteres especiais
validarSenha('41u34ihQE');
//Senhas seguras
validarSenha('QEereq1&');
validarSenha('abcd12EF*');
validarSenha('senhA2$%');
validarSenha('senhA2+(0)');

//senhas com vários erros
validarSenha('qoru3');
validarSenha('ek');*/

//Exporta a funnção para o app.js
exports.validarSenha = validarSenha;