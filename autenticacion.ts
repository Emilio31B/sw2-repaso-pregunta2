/*
$ node autenticacion.js sha256 usuario password
*/

import {devolverSHA256} from "./criptografia"

let autenticacion = () =>{
    let tipoAutenticacion = process.argv[2]
    let usuario = process.argv[3]
    let password = process.argv[4]
    let credencialesEncriptadas = ""

    if (tipoAutenticacion == "sha256")
    {
        credencialesEncriptadas = devolverSHA256(`${usuario}|${password}`)
    }
    console.log(`Credenciales sin encriptar: ${usuario} ${password}`)
    console.log(`Credenciales encriptadas: ${credencialesEncriptadas}`)
}
autenticacion() 