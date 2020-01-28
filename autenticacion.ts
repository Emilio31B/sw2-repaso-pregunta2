/*
$ node autenticacion.js sha256 usuario password
*/

import {devolverSHA256} from "./criptografia"

//Convertirlo a Singleton
class AdapterFactory{
    obtenerAdapter(tipo : string){
        if (tipo == "sha256"){
            return new sha256Adapter();
        }else{
            return null;
        }
    }
}

abstract class EncriptadorAdapter{
    abstract encriptar(username : string , password : string)
}

class sha256Adapter extends EncriptadorAdapter{
    encriptar(username: string, password: string) {
        return devolverSHA256(`${username}|${password}`)
    }

}


let autenticacion = () =>{
    let tipoAutenticacion = process.argv[2]
    let usuario = process.argv[3]
    let password = process.argv[4]
    let credencialesEncriptadas = ""

    let factory = new AdapterFactory();
    let adapter = factory.obtenerAdapter(tipoAutenticacion);

    credencialesEncriptadas = adapter.encriptar(usuario,password);
    /*if (tipoAutenticacion == "sha256")
    {
        credencialesEncriptadas = devolverSHA256(`${usuario}|${password}`)
    }*/
    console.log(`Credenciales sin encriptar: ${usuario} ${password}`)
    console.log(`Credenciales encriptadas: ${credencialesEncriptadas}`)
}
autenticacion() 