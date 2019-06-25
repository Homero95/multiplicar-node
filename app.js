


const { crearArchivo } = require('./multiplicar/multiplicar');
const { listar } = require ('./multiplicar/multiplicar')
const argv = require ('./config/yargs').argv;




console.log(argv);

let comando = argv._[0];

switch( comando ){
    case 'listar':
        console.log('Listar')
        listar(argv.base,argv.limite)
            .then(lista => {console.log(lista)})
            .catch(e => console.log(e))
        break;
    case 'crear':
        console.log('Crear')
        crearArchivo(argv.base,argv.limite)
           .then(archivo => {console.log(`Archivo creado: ${ archivo }`)})
           .catch(e => console.log(e));
        break;
    default:
    console.log('comando no reconocido')
}


//let parametro = argv[2];
//let base = parametro.split('=')[1];

//console.log(base);
