window.onload = function(){
    const url = '/api/users';
    fetch(url)
        .then(function(response){
            return response.json(); // Devuelve respuesta decodificada de json
        })
        .then(function(dataDecode){
            console.log(dataDecode);
        })
        .catch(function(error){
            console.log(error);
        });

}