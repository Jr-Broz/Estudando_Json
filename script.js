const objs = [
    {

        "nome": "Pedro",
        "idade": 20,
        "esta_trabalhando": true,
        "detalhes_profissao": {
    
            "profissao": "programador",
            "empresa": "x"
    
        },
    
       "hobbies": [1,"a", "verdade"]
    }
]

//JSON
    // Converter objeto pra JSON
    const jsonData = JSON.stringify(objs);
    console.log(jsonData);
    //=========
    //======
    //Converter JSON para objeto
    const objData = JSON.parse(jsonData);
    console.log(objData);
