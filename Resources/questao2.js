function verificaSenha(senha) {
    //Verifica se a senha tem no minimo 6 caracteres
    if(senha.length < 6) {
        console.log(senha);
        console.log("A senha precisa ter no minimo 6 caracteres");
        return false;
    }
    //Verifica se a senha contém números
    if(!senha.match(/\d/)) {
        console.log(senha);
        console.log("A senha precisa ter no minimo 1 numero");
        return false;
    }
    //Verifica se a senha contém letras maiúsculas
    if(!senha.match(/[A-Z]/)) {
        console.log(senha);
        console.log("A senha precisa ter pelo menos uma letra maiúscula");
        return false;
    }
    //Verifica se a senha contém letras minúsculas
    if(!senha.match(/[a-z]/)) {
        console.log(senha);
        console.log("A senha precisa ter pelo menos uma letra minúscula");
        return false;
    }
    //Verifica se a senha contém caracteres especiais
    if(!senha.match(/[!@#$%^&*()-+]/)) {
        console.log(senha);
        console.log("A senha precisa ter pelo menos um caractere especial: !@#$%^&*()-+");
        return false;
    }
    console.log(senha);
    console.log('A senha é segura!');
    return true;
}

//Problema: a senha pode ter mais de um erro, e eu gostaria de que ela não deixasse de conferir os outros erros se o primeiro erro for pego, mas ao mesmo tempo, eu só quero que ela imprima o resultado final se não tiver erros. Usar uma variável como boleean pra verificar?


//Senhas testes

//Senha curta
verificaSenha("a2C@");
//Senha sem letra minúscula
verificaSenha('ERQEDV3%');
//Senha sem letra maiúscula
verificaSenha('qeiruqo1&');
//Senhas sem caracteres especiais
verificaSenha('41u34ihQE');
//Senhas seguras
verificaSenha('QEereq1&');
verificaSenha('abcd12EF*');
verificaSenha('senhA2$%');
verificaSenha('senhA2+(0)');