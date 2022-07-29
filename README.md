# DOCUMENTACION

===== USUARIOS =====

## Registro de nuevo usuario

## Request 
POST: http://localhost:3000/users/registro
Body:
{
    "name":"nombre",
    "user":"users",
    "password":"password_here"
}

## Response
{
    "_id": "1a234567e8iou90ae123io45",
    "name": "nombre",
    "user": "user",
    "password": "******",
    "__v": 0
}

## Login de usuario existente
### Request:
POST: http://localhost:3000/users/login
Body:
{
    "user":"nombre",
    "password":"password_here"
}

### Response
{
    "token": "******"
}

Guardar el token en un sitio seguro, va a ser necesario para algunos endpoints de productos

===== PRODUCTOS =====

## Solicitar la lista completa de productos
### Request
GET: http://localhost:3000/productos/

#### Response
[
    {
        "_id": "5f1cbecad369a3adff42bd72",
        "ciudad": "GBA",
        "contacto": "feli@feli.com",
        "descripcion": "Bici a bateria - joya nunca taxi",
        "foto": "https://images-na.ssl-images-amazon.com/images/I/71XBJh3RgML._AC_SL1500_.jpg",
        "precio": 4000,
        "sku": "12345678",
        "titulo": "Bici electrica"
    },
    {
        "_id": "5f1dce582b56173554eefd8d",
        "titulo": "Bici vintage",
        "sku": "34567890",
        "descripcion": "Bici antigua. No anda pero queda hermosa en el living",
        "contacto": "11612345678",
        "precio": 2500,
        "ciudad": "CABA",
        "foto": "https://cdn.mos.cms.futurecdn.net/iR4WthbKP8UEtZMCdbhZK9-320-80.jpg",
        "__v": 0
    }
]

IMPORTANTE: El servicio incluye un paginado de 4 productos por pagina

## Solicitar un producto especifico
Se necesita un access token (usuario logueado)

### Request
GET http://localhost:3000/productos/[PRODUCTO-ID]
Headers: {
    x-access-token: [token-del-login]
}

### Response
{
    "_id": "[PRODUCTO-ID]",
    "titulo": "Bici Plegable Electrica",
    "sku": "0987654321",
    "descripcion": "Una maravilla - ultra liviana y mucha vida util",
    "contacto": "11698765432",
    "precio": 6000,
    "ciudad": "CABA",
    "foto": "https://images-na.ssl-images-amazon.com/images/I/7154NNdjE4L._SX425_.jpg",
    "__v": 0
}

En caso de que la ID de producto sea inexistente, la respuesta sera "null"

## Crear un producto nuevo
### Request
POST: http://localhost:3000/productos/
Headers: {
    x-access-token: [token-del-login]
}

Body: 
 {
    "ciudad": "GBA",
    "contacto": "156151111111",
    "descripcion": "Cruiser",
    "foto": "https://www.sarajevotimes.com/wp-content/uploads/2016/01/Cruiser-Bicycles-ekapija.ba_.jpg",
    "precio": 9500,
    "sku": "789012345",
    "titulo": "Cruiser Bike"
  }


### Response
{
    "_id": "5f209da3b7649336c0890071",
    "titulo": "CRUISER BIKE",
    "sku": "789012345",
    "descripcion": "Cruiser",
    "contacto": "156151111111",
    "precio": 9500,
    "ciudad": "GBA",
    "foto": "https://www.sarajevotimes.com/wp-content/uploads/2016/01/Cruiser-Bicycles-ekapija.ba_.jpg",
    "__v": 0
}

## Modificar un producto existente

### Request
PUT: http://localhost:3000/productos/[Id-del-producto]
Headers: {
    x-access-token: [token-del-login]
}

Body:
{
    "ciudad": "GBA",
    "contacto": "156151111111",
    "descripcion": "Cruiser",
    "foto": "https://www.sarajevotimes.com/wp-content/uploads/2016/01/Cruiser-Bicycles-ekapija.ba_.jpg",
    "precio": 9500,
    "sku": "789012345",
    "titulo": "Cruiser Bike"
  }

### Response
{
    "n": 1,
    "nModified": 1,
    "ok": 1
}

## Eliminar un producto existente ###
### Request
DELETE: http://localhost:3000/productos/[Id-del-producto]
Headers: {
    x-access-token: [token-del-login]
}

### Response
{
    "n": 1,
    "ok": 1,
    "deletedCount": 1
}

===== ERRORES =====
"jwt must be provided": Se necesita un token para la solicitud
"jwt expired": El token esta vencido. El usuario debera reingresar usuario y contrasena
"error de parametros": id de producto invalida, o parametros de la solicitud invalidos
