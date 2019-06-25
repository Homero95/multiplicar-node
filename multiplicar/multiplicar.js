
const fs = require('fs');
const colors = require('colors');


let listar = (base,limite) => {
    return new Promise((resolve,reject) => {
        if(!Number(base)){
            reject('El valor de la base no es un número');
            return;
        }

        let data = '';

        for(let i = 0; i<=limite; i++){
            data+= `${base} x ${i} = ${base*i} \n`;
        }
        resolve (data);
    })
}


let crearArchivo = (base,limite = 10) => {
    return new Promise( (resolve, reject) =>{
        if(!Number(base)){
            reject('el valor de la base no es un número')
            return;
        }
        let data = '';

        for(let i = 1; i<=limite; i++){
            data+=`${base} x * ${i} = ${base * i} \n`
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`,data, err=>{
            if(err)
                reject(err)
            else{
                resolve(`tabla-${base}.txt`)
            }
        })
    } )
}

module.exports = {
    crearArchivo,
    listar
}
