/*
Pablo ha perdido su móvil y quiere buscar un teléfono de la marca Xiaomi 
que valga menos de 150 euros.
*/
db.moviles.find(
    {
        $and:[
            {"precio.precio": {$lt: 150}},
            {marca: {$eq: "Xiaomi"}}
        ]   
    }
)

//El móvil Redmi Note 8 cumple con las condiciones anteriores.

/*
José Francisco quiere buscar un teléfono móvil cuya fecha de lanzamiento
se encuentre entre julio de 2019 y octubre del siguiente año. Además 
también quiere que el móvil tenga una batería cuya capacidad sea de 4000 
mAh o más y cuente además con la tecnología NFC.
*/
db.moviles.find(
    {
        $and:[
            {fechalanzamiento: {$gte: new Date("2019-07-01"), $lte: new Date("2020-10-31")}},
            {"hardware.bateria.capacidad":{$gte:4000}},
            {"conectividad.nfc":true}
        ]
    }
)

//El móvil Samsung Galaxy A30s cumple con las condiciones anteriores.

/*
Alberto desea comprar un móvil pero no quiere que sea de una marca china
y sea de color azul o rojo.
*/
db.moviles.find(
    {
        $and:[
            {pais: {$ne:"China"}},
            {"diseño.color": {$in: ["azul","rojo"]}}        
        ]
    }
)
//Esta es otra forma de hacer la misma consulta, mediante el operador lógico $not, y el operador $or, aunque en este caso el operador $or no tiene mucho sentido
db.moviles.find(
    {
        $and:[
            {pais: {$not: {$eq:"China"}}},
            {$or: [
                {"diseño.color":"azul"},
                {"diseño.color":"rojo"}
            ]}        
        ]
    }
)

//Los móviles Apple iPhone 13 Pro Max, Apple iPhone 7 y Motorola Moto E20 cumplen con las condiciones anteriores.

/*
José quiere buscar un móvil que tenga una altura superior a 150 
milímetros o que las pulgadas sean mayores que 6,50
*/
db.moviles.find(
    {$or:[
        {"diseño.alto":{$gt:160}},
        {"pantalla.pulgadas":{$gt:7}}
    ]}
)
//Los móviles Redmi Note 10S, Apple iPhone 13 Pro Max, Motorola Moto E20, Samsung Galaxy A22 5G

/*
Lola quiere buscar un móvil que no esté hecho de plástico ni 
policarbonato y que tenga cobertura 5G o 4G.
*/
db.moviles.find(
    {$and: [
    {"diseño.materiales":{$nin: ["plastico", "policarbonato"]}},
    {"conectividad.banda":{$in: ["5G", "4G"]}}
    ]}
)

//Los móviles Huawei P50, Apple iPhone 7 Apple iPhone 13 Pro Max cumplen con las condiciones anteriores.

/*
Juan Manuel quiere un móvil que disponga de una cámara dual con una 
resolución que sea mayor que 10 megapixeles y una apertura mayor que 2.
*/
db.moviles.find(
    {$and: [
        {"hardware.camara.dual": {$exists:true}}, 
        {"hardware.camara.caracteristicasdual.resolucion":{$gt:10}},
        {"hardware.camara.caracteristicasdual.apertura":{$gt:2}}
    ]
    }
)

//El móvil huawei P50 cumple con las condiciones anteriores.

/*
Juan quiere buscar un móvil cuya altura no sea más que 155 milímetros y 
que su fecha de lanzamiento no sea anterior al año 2020. Además quiere 
que el puerto USB sea de tipo C.
*/
db.moviles.find(
    {$and: [
            {"conectividad.tipousb":{$eq:"C"}},
        {$nor:[
            {"diseño.alto":{$gt:155}},
            {fechalanzamiento:{$lte:new Date("2020-01-01")}}
            ]
        }
    ]
    }
)

//El móvil Google Pixel 4a cumple oon las condiciones anteriores.

/*
Andrés desea buscar un móvil que tenga solo las opciones de 64 y de 128 
gigabytes, y que además el precio sea inferior a 200 euros.
*/
db.moviles.find(
    {$and: [
        {"hardware.almacenamiento.memoriainterna":{$all: [64,128]}},
        {"precio.precio":{$lt:200}}
    ]
    }    
)

//Los móviles Redmi Note 10S y Redmi Note 8 cumplen con las condiciones anteriores.

/*
Rocío quiere buscar un móvil que tenga un tamaño de memoria interna de
entre 100 y 500 gigabytes y que además el teléfono sea de una marca
estadounidense.
*/
db.moviles.find(
    {$and: [
    {"hardware.almacenamiento.memoriainterna":{$elemMatch: {$gte:100, $lte:550}}},
    {pais:{$regex: /estados unidos/i}} 
    ]}   
).pretty({$comment:"Esta consulta muestra los datos de una forma mas facil de ver en Power Shell cuando usamos mongo. Si usamos mongo shell no es necesario"})

//El Apple iPhone 13 Pro Max y el Apple iPhone 7 cumplen con las condiciones anteriores.

/*
Esta consulta sirve para saber cuantos moviles de una marca china tienen
huella dactilar.
*/
db.moviles.find(
    {$and:[
        {pais:{$regex: /china/i}},
        {"diseño.huelladactilar":{$exists:true}}
    ]
    }
).count({$comment:"Esta consulta cuenta el numero de moviles que son de una marca china y tienen huella dactilar"})

/*
Hugo quiere buscar los móviles que tengan un procesador Qualcomm y que 
la batería sea de 3500 mHa o más.
*/
db.moviles.find(
    {$and:[
        {"hardware.procesador.modelo":{$regex: /^Qualcomm/m}},
        {"hardware.bateria.capacidad":{$gte:3500}}
    ]}    
)

//Los móviles Redmi Note 8 y el Huawei P50 cumplen las condiciones anteriores

/*
Deseamos buscar un móvil cuya fecha de lanzamiento sea posterior a 2019 y 
tenga dos opciones de color
*/
db.moviles.find(
    {$and:[
        {fechalanzamiento: {$gte: new Date(2019-01-01)}},
        {"diseño.color": {$size:2}}
    ]}
)
//Los móviles Alcatel 3 (2019) y Motorola Moto E20 cumplen con las condiciones anteriores

/*
Para ver únicamente los diferentes modelos de la colección hacemos esto
*/
db.moviles.distinct("modelo")

/*
[
  'Alcatel 3 (2019)',
  'Apple iPhone 13 Pro Max',
  'Apple iPhone 7',
  'Google Pixel 4a',
  'Huawei P50',
  'Motorola Moto E20',
  'Redmi Note 10S',
  'Redmi Note 8',
  'Samsung Galaxy A22 5G',
  'Samsung Galaxy A30s'
]
*/

/*
Para ver únicamente el modelo y la memoria ram que lleva o puede llevar
ese modelo.
*/
db.moviles.aggregate(
    [
        {$group: {_id: "$modelo", total: {$push: "$hardware.almacenamiento.memoriaram"}}},
        {$sort: {total:1}}
    ]
)
//El operador $sort está configurado para que nos muestre los datos en un orden ascendente.
/*
[
  { _id: 'Apple iPhone 7', total: [ 2 ] },
  { _id: 'Motorola Moto E20', total: [ 2 ] },
  { _id: 'Samsung Galaxy A30s', total: [ 4 ] },
  { _id: 'Alcatel 3 (2019)', total: [ 4 ] },
  { _id: 'Apple iPhone 13 Pro Max', total: [ 6 ] },
  { _id: 'Google Pixel 4a', total: [ 6 ] },
  { _id: 'Huawei P50', total: [ 8 ] },
  { _id: 'Redmi Note 8', total: [ [ 3, 4 ] ] },
  { _id: 'Samsung Galaxy A22 5G', total: [ [ 4, 6, 8 ] ] },
  { _id: 'Redmi Note 10S', total: [ [ 6, 8 ] ] }
]
*/

/*
Para ver el modelo y la memoria ram que lleva o puede llevar ese modelo,
pero solo de las marcas Xiaomi, Huawei y Samsung.
*/
db.moviles.aggregate(
    [
        {$match: {marca: {$in: ["Xiaomi", "Huawei", "Samsung"]}}},
        {$group: {_id: "$modelo", total: {$push: "$hardware.almacenamiento.memoriaram"}}},
        {$sort: {total:1}}
    ]
)

/*
[
  { _id: 'Samsung Galaxy A30s', total: [ 4 ] },
  { _id: 'Huawei P50', total: [ 8 ] },
  { _id: 'Redmi Note 8', total: [ [ 3, 4 ] ] },
  { _id: 'Samsung Galaxy A22 5G', total: [ [ 4, 6, 8 ] ] },
  { _id: 'Redmi Note 10S', total: [ [ 6, 8 ] ] }
]
*/