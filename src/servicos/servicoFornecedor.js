// const urlBase= "http://localhost:4000/fornecedores";
const urlBase= "https://bcc-backend-lp2.vercel.app/fornecedores";

function substituiBarra(fornecedor) {
    return { 
        "cnpj": fornecedor.cnpj.replace(/\//g, "*"),
        "nome": fornecedor.nome,
        "email":fornecedor.email ,
        "estado": fornecedor.estado,
        "celular": fornecedor.celular,
        "telefone": fornecedor.telefone,
        "cep": fornecedor.cep,
        "numero": fornecedor.numero
    };
}


export async function gravarFornecedor(fornecedor){
    fornecedor=substituiBarra(fornecedor)
    const resposta = await fetch(urlBase,{
        "method": "POST",
        "headers":{
            "Content-type":"application/json"
        },
        "body":JSON.stringify(fornecedor)
    })
    const resultado = await resposta.json();
    return await resultado;
}

export async function alterarFornecedor(fornecedor){
    fornecedor=substituiBarra(fornecedor)
    const resposta = await fetch(urlBase,{
        "method": "PUT",
        "headers":{
            "Content-type":"application/json"
        },
        "body":JSON.stringify(fornecedor)
    })
    const resultado = await resposta.json();
    return resultado;
    
}

export async function excluirFornecedor(fornecedor){
    fornecedor=substituiBarra(fornecedor)
    const resposta = await fetch(urlBase+ "/"+ fornecedor.cnpj,{
        "method": "DELETE",
        
    })
    const resultado = await  resposta.json();
    return resultado;
    
}

export async function consultarFornecedor(termo){
    termo=termo.replace("/","*");
    const resposta = await fetch(urlBase+"/"+termo,{
        "method": "GET",
    })
    const resultado =await  resposta.json();
    return resultado;
}