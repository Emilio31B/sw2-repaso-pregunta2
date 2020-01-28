# Autenticación segura

## Instrucciones

* Modificar el archivo autenticacion.ts aplicando el/los patrones que considere pertinente.
* Instalar la librería crypto

```
$ npm install crypto
$ npm install @types/node
```

## Enunciado

Se le pide implementar un software que permita la encriptación confiable de usuarios para 
que así estos puedan autenticarse de manera segura..

Por temas de seguridad, al momento de registrar los datos de un nuevo usuario se ha optado por 
encriptar el usuario y password utilizando el algoritmo SHA256, disponible mediante la librería crypto de javascript. 
De esta manera, para realizar una autenticación, el software implementado antes encripta el string 
ingresado por el usuario, y lo compara con la contraseña encriptada que se encuentra en el software.

En un futuro, se piensa trabajar también con otro algoritmo de encriptación llamado AES, esto 
para mejorar la seguridad de la aplicación.

Se le ha entregado un código en typescript totalmente funcional que recibe
credenciales (usuario y password) por linea de comandos (ver comentarios en el codigo) y los encripta utilizando el algoritmo sha256.