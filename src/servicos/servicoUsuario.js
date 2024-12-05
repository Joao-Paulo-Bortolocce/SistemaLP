// const urlBase= "http://localhost:4000/produtos";
const urlBase= "https://bcc-backend-lp2.vercel.app/usuarios";

export async function gravarUsuario(usuario){
    const resposta = await fetch(urlBase,{
        "method": "POST",
        "headers":{
            "Content-type":"application/json"
        },
        "body":JSON.stringify(usuario)
    })
    const resultado = await resposta.json();
    return await resultado;
}

export async function alterarUsuario(usuario){
    const resposta = await fetch(urlBase+"/"+usuario.id,{
        "method": "PUT",
        "headers":{
            "Content-type":"application/json"
        },
        "body":JSON.stringify(usuario)
    })
    const resultado = await resposta.json();
    return await resultado;
    
}

export async function excluirUsuario(usuario){
    const resposta = await fetch(urlBase+ "/"+ usuario.id,{
        "method": "DELETE",
    
    })
    const resultado = await  resposta.json();
    return await resultado;
    
}

export async function consultarUsuario(id){
    const resposta = await fetch(urlBase+'/'+id,{
        "method": "GET",
    })
    const resultado =await  resposta.json();
    return resultado;
    
}