// const urlBase= "http://localhost:4000/clientes";
const urlBase= "https://bcc-backend-lp2.vercel.app/clientes";

export async function gravarCliente(cliente){
    const resposta = await fetch(urlBase,{
        "method": "POST",
        "headers":{
            "Content-type":"application/json"
        },
        "body":JSON.stringify(cliente)
    })
    const resultado = await resposta.json();
    return await resultado;
}

export async function alterarCliente(cliente){
    const resposta = await fetch(urlBase,{
        "method": "PUT",
        "headers":{
            "Content-type":"application/json"
        },
        "body":JSON.stringify(cliente)
    })
    const resultado = await resposta.json();
    return resultado;
    
}

export async function excluirCliente(cliente){
    const resposta = await fetch(urlBase+ "/"+ cliente.cpf,{
        "method": "DELETE",
    
    })
    const resultado = await  resposta.json();
    return resultado;
    
}

export async function consultarCliente(termo){
    const resposta = await fetch(urlBase+"/"+termo,{
        "method": "GET",
    })
    const resultado =await  resposta.json();
    return resultado;
}