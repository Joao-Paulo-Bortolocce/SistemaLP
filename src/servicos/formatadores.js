
export  function formatarCelular(entrada) {
    var valor = entrada;
    if (valor.length === 11) {
        entrada= `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
    } else {
        entrada = valor;
    }
    return entrada;
}


export  function formatarTelefone(entrada) {
    var valor = entrada;
    if (valor.length === 10) {
        entrada = `(${valor.slice(0, 2)}) ${valor.slice(2, 6)}-${valor.slice(6)}`;
    } else {
        entrada = valor;
    }
    return entrada;
}


export  function formatarCPF(entrada) {
    var valor = entrada;
    if (valor.length === 11) {
        entrada = `${valor.slice(0, 3)}.${valor.slice(3, 6)}.${valor.slice(6, 9)}-${valor.slice(9)}`;
    } else {
        entrada = valor;
    }
    return entrada;
}


export  function formatarCNPJ(entrada) {
    var valor = entrada;
    if (valor.length === 14) {
        entrada = `${valor.slice(0, 2)}.${valor.slice(2, 5)}.${valor.slice(5, 8)}/${valor.slice(8, 12)}-${valor.slice(12)}`;
    } else {
        entrada = valor;
    }
    return entrada;
}


export  function formatarCEP(entrada){
    var valor = entrada;
    if (valor.length === 8) {
        entrada = `${valor.slice(0, 5)}-${valor.slice(5)}`;
    } else {
        entrada = valor;
    }
    return entrada;
}