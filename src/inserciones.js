db.moviles.drop()
db.moviles.insertMany(
    [
       {
            modelo:"Huawei P50",
            _id:1, 
            marca:"Huawei", 
            pais:"China",
            precio: [885, 988], divisa:"euro",
            fechalanzamiento: new Date("2021-07-01"), 
            diseño: 
                {
                    ancho:73.8, alto:156.5, grosor:7.9, uom:"milimetro", 
                    peso:181, uom:"gramo",
                    materiales:["aleacion de aluminio", "cristal"], 
                    huelladactilar: true, 
                    colores:["oro", "blanco", "negro", "plata", "amarillo"]
                },
            pantalla: 
                {
                    pulgadas: 6.50, 
                    tipopantalla:"OLED"
                },
            sitemaoperativo: "android",
            hardware: 
                {
                    procesador:
                        {
                            modelo:"Qualcomm Snapdragon 888 4G",
                            nucleos:8,
                            frecuencia:2.84, uom:"gigahercio"
                        }, 
                    almacenamiento:
                        {
                            memoriaram: 8, memoriainterna: [128, 256], uom:"gigabyte"
                        },
                    camara: 
                        {
                            principal: 
                                {resolucion:50, apertura: 1.8}, 
                            dual:true,
                            caracteristicasdual:
                                {resolucion:13, apertura:2.2},  
                            frontal:
                                {resolucion:13, apertura:2.4}, 
                            uom:
                                {resolucion:"megapixel", apertura:"diafragma"}
                        },
                    bateria:
                        {
                            capacidad:4100, uom:"mega-amperio", 
                            extraible:false, cargarapida:true
                        }
                    },
            conectividad:
                {
                    banda:["4G", "3G", "2G"],
                    nfc:true, 
                    bluetooth:"5.2",  
                    tipousb:"C", 
                    audiojack:false 
                }
        },
            {modelo:"Redmi Note 10S", _id:2, marca:"Xiaomi", pais:"China", precio:[179,189,232], divisa:"euro", fechalanzamiento: new Date("2021-03-01"), diseño:{ancho:74.5, alto:160.5, grosor:8.3, uom:"milimetros", peso:179, uom:"gramos", materiales:["plastico", "P2i nano coating"], huelladactilar:true, colores:["blanco","azul","gris"]}, pantalla:{pulgadas:6.43, tipopantalla:"amoled"},sistemaoperativo:"android", hardware: {procesador: {modelo:"MediaTek Helio G95", nucleos:8, frecuencia:2, uom:"gigahercio"}, almacenamiento:{memoriaram:[6, 8], memoriainterna:[64, 128], uom:"gigabyte"},camara: {principal: {resolucion:64, apertura:1.79 }, dual:false,caracteristicasdual:{resolucion:null, apertura:null},frontal:{resolucion:13, apertura:2.45}, uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:5000, uom:"mega-amperio", extraible:false, cargarapida:true}},conectividad:{banda:["4G","3G","2G"],nfc:true, bluetooth:"5.0",  tipousb:"C", audiojack:true}},
            {modelo:"Alcatel 3 (2019)", _id:3, marca:"Alcatel", pais:"China",precio:90 , divisa:"euro", fechalanzamiento: new Date("2019-02-01"), diseño:{ancho:69.7, alto:151.1, grosor:8, uom:"milimetro",peso:145, uom:"gramo",materiales:"plastico", huelladactilar:true , colores:["negro","azul"]},pantalla:{pulgadas:5.9,tipopantalla:"LCD IPS"},sitemaoperativo: "android",hardware:{ procesador:{modelo:"MediaTek Helio P23",nucleos:8,frecuencia:2, uom:"gigahercio"},almacenamiento:{memoriaram:4, memoriainterna:64, uom:"gigabyte"},camara:{principal:{resolucion:13, apertura:2},dual:false,caracteristicasdual:{resolucion:null, apertura:null},frontal:{resolucion:5, apertura:2.4},uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:3000, uom:"mega-amperio",extraible:false, cargarapida:false}},conectividad:{banda:["4G","3G","2G"], nfc:true, bluetooth:"4.2",tipousb:"microUSB 2.0",audiojack:true}},
            {modelo:"Apple iPhone 13 Pro Max", _id:4, marca:"Apple", pais:"Estados Unidos",precio:[1259,1354,1579,1804] , divisa:"euro",fechalanzamiento: new Date("2021-09-01"),diseño:{ancho:78.1, alto:168.8, grosor:7.4, uom:"milimetro",peso:228, uom:"gramo",materiales:["cristal","aluminio"], huelladactilar:false, colores:["azul","oro","plata","gris"]},pantalla:{pulgadas:6.7,tipopantalla:"oled"},sitemaoperativo: "iOS",hardware:{ procesador:{modelo:"Apple A15 Bionic",nucleos:6,frecuencia:3.1, uom:"gigahercio"},almacenamiento:{memoriaram:6, memoriainterna:[128,256,512,1000], uom:"gigabyte"},camara:{principal:{resolucion:12, apertura:1.5},dual:true,caracteristicasdual:{resolucion:12, apertura:1.8},frontal:{resolucion:12, apertura:2.2},uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:4373, uom:"mega-amperio",extraible:false, cargarapida:true}},conectividad:{banda:["2G","3G","4G","5G"],nfc:true, bluetooth:"5.0",tipousb:"2.0",audiojack:false}},
            {modelo:"Samsung Galaxy A30s", _id:5, marca:"Samsung", pais:"China",precio:[259,269], divisa:"euro",fechalanzamiento: new Date("2019-08-01"),diseño:{ancho:74.7, alto:158.5, grosor:7.8, uom:"milimetro",peso:166, uom:"gramo",materiales:"plastico", huelladactilar:true, colores:["negro","blanco","verde","violeta"]},pantalla:{pulgadas:6.4,tipopantalla:"amoled"},sitemaoperativo:"android",hardware:{ procesador:{modelo:"Samsung Exynos 7 Octa 7904",nucleos:8,frecuencia:1.8,uom:"gigahercio"},almacenamiento:{memoriaram:4, memoriainterna:[64,128],uom:"gigabyte"},camara:{principal:{resolucion:16, apertura:1.7},dual:true,caracteristicasdual:{resolucion:5, apertura:2.2},frontal:{resolucion:16, apertura:2},uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:4000, uom:"mega-amperio",extraible:false, cargarapida:true}},conectividad:{banda:["4G","3G","2G"],nfc:true, bluetooth:"5.0",tipousb:"microUSB 2.0",audiojack:true}},
            {modelo:"Google Pixel 4a", _id:6, marca:"Google", pais:"Estados Unidos",precio:399, divisa:"euro",fechalanzamiento: new Date("2020-08-01"),diseño:{ancho:69.4, alto:144.2, grosor:8.2, uom:"milimetro",peso:143, uom:"gramo",materiales:"policarbonato", huelladactilar:true, colores:"negro"},pantalla:{pulgadas:5.81,tipopantalla:"OLED"},sitemaoperativo: "android",hardware:{ procesador:{modelo:"Qualcomm Snapdragon 730G",nucleos:8,frecuencia:2.2, uom:"gigahercio"},almacenamiento:{memoriaram:6, memoriainterna:128, uom:"gigabyte"},camara:{principal:{resolucion:12.2, apertura:1.7 },dual:false,caracteristicasdual:{resolucion:null, apertura:null},frontal:{resolucion:8, apertura:2},uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:3120, uom:"mega-amperio",extraible:false, cargarapida:true}},conectividad:{banda:["4G","3G","2G"],nfc:true, bluetooth:"5.1",tipousb:"c",audiojack:true}},
            {modelo:"Apple iPhone 7", _id:7, marca:"Apple", pais:"Estados Unidos",precio:[164,234,438], divisa:"euro",fechalanzamiento: new Date("2016-09-01"),diseño:{ancho:67.1, alto:138.3, grosor:7.1, uom:"milimetro",peso:138, uom:"gramo",materiales:"aleacion de aluminio", huelladactilar:true, colores:["negro","oro","plata","rojo","oro rosa","negro brillante"]},pantalla:{pulgadas:4.7,tipopantalla:"LCD IPS"},sitemaoperativo:"iOS",hardware:{ procesador:{modelo:"Apple A10 Fusion",nucleos:4,frecuencia:2.4, uom:"gigahercio"},almacenamiento:{memoriaram:2, memoriainterna:[32,128,256], uom:"gigabyte"},camara:{principal:{resolucion:12, apertura:1.8},dual:false,caracteristicasdual:{resolucion:null, apertura:null},frontal:{resolucion:7, apertura:2.2},uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:1960, uom:"mega-amperio",extraible:false, cargarapida:false}},conectividad:{banda:["2G","3G","4G"],nfc:true, bluetooth:"4.2",tipousb:"Conector Lightning",audiojack:false}},
            {modelo:"Motorola Moto E20", _id:8, marca:"Motorola", pais:"Estados Unidos",precio:108, divisa:"euro",fechalanzamiento: new Date("2021-09-01"),diseño:{ancho:75.6, alto:185, grosor:8.5, uom:"milimetro",peso:185, uom:"gramo",materiales:"plastico", huelladactilar:true, colores:["negro","azul"]},pantalla:{pulgadas:6.5,tipopantalla:"TFT LCD"},sitemaoperativo:"android",hardware:{ procesador:{modelo:"Unisoc T700",nucleos:8,frecuencia:1.8, uom:"gigahercio"},almacenamiento:{memoriaram:2, memoriainterna:32, uom:"gigabyte"},camara:{principal:{resolucion:13, apertura:2},dual:false,caracteristicasdual:{resolucion:null, apertura:null},frontal:{resolucion:5, apertura:2.2},uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:4000, uom:"mega-amperio",extraible:false, cargarapida:true}},conectividad:{banda:["4G","3G","2G"],nfc:false, bluetooth:"5.0",tipousb:"C",audiojack:true}},
            {modelo:"Redmi Note 8", _id:9, marca:"Xiaomi", pais:"China",precio:[144,168,197], divisa:"euro",fechalanzamiento: new Date("2019-08-01"),diseño:{ancho:75.3, alto:158.3, grosor:8.4, uom:"milimetro",peso:190, uom:"gramo",materiales:["plastico","cristal","P2i nano coating"], huelladactilar:true, colores:["negro","blanco","azul"]},pantalla:{pulgadas:6.3,tipopantalla:"LTPS LCD"},sitemaoperativo:"android",hardware:{ procesador:{modelo:"Qualcomm Snapdragon 665",nucleos:8,frecuencia:2, uom:"gigahercio"},almacenamiento:{memoriaram:4, memoriainterna:[64,128], uom:"gigabyte"},camara:{principal:{resolucion:48, apertura:1.79},dual:true,caracteristicasdual:{resolucion:8, apertura:2.2},frontal:{resolucion:13, apertura:2},uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:4000, uom:"mega-amperio",extraible:false, cargarapida:true}},conectividad:{banda:["4G","3G","2G"],nfc:false, bluetooth:"4.2",tipousb:"C",audiojack:true}},
            {modelo:"Samsung Galaxy A22 5G", _id:10, marca:"Samsung", pais:"China",precio:[219,229,205,242], divisa:"euro",fechalanzamiento: new Date("2021-06-01"),diseño:{ancho:76.4, alto:167.2, grosor:9, uom:"milimetro",peso:203, uom:"gramo",materiales:"plastico", huelladactilar:true, colores:["blanco","gris","morado","verde"]},pantalla:{pulgadas:6.6,tipopantalla:"TFT LCD"},sitemaoperativo:"android",hardware:{ procesador:{modelo:"MediaTek Dimensity 700",nucleos:8,frecuencia:2.2, uom:"gigahercio"},almacenamiento:{memoriaram:[4,6,8], memoriainterna:[64,128], uom:"gigabyte"},camara:{principal:{resolucion:48, apertura:1.8},dual:false,caracteristicasdual:{resolucion:null, apertura:null},frontal:{resolucion:8, apertura:2},uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:5000, uom:"mega-amperio",extraible:false, cargarapida:true}},conectividad:{banda:["5G","4G","3G","2G"],nfc:true, bluetooth:"5.0",tipousb:"C",audiojack:true}},
    ]
)