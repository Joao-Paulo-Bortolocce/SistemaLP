const urlBase= "http://localhost:4000/fornecedores";
// const urlBase= "https://bcc-backend-lp2.vercel.app/fornecedores";

export async function gravarFornecedor(fornecedor){
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
    const resposta = await fetch(urlBase+ "/"+ fornecedor.cnpj,{
        "method": "DELETE",
    
    })
    const resultado = await  resposta.json();
    return resultado;
    
}

export async function consultarFornecedor(termo){
    const resposta = await fetch(urlBase+"/"+termo,{
        "method": "GET",
    })
    const resultado =await  resposta.json();
    return resultado;
}