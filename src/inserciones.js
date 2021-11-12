db.moviles.insertMany(
    [
       {
            modelo:"Huawei P50",
            _id:0, 
            compañía:"Huawei", 
            pais:"China",
            precio: [885, 988], divisa:"euro",
            fechalanzamiento: new Date("2021-07-01"), 
            diseño: 
                {
                    ancho:73.8, alto:156.5, grosor:7.9, uom:"milimetros", 
                    peso:181, uom:"gramos",
                    materiales:["aleacion de aluminio", "cristal"], 
                    huelladactilar: true, 
                    colores:["oro", "blanco", "negro", "plata", "amarillo"]
                },
            pantalla: 
                {
                    pulgadas: 6.50, 
                    tipopantalla:"OLED"
                },
            audio:["dolby atmos", "altavoces estereo"],
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
                            memoriaram: 8, memoriainterna: [128, 256], uom:"gygabyte"
                        },
                    gpu:"adreno 660",
                    camara: 
                        {
                            principal: 
                                {resolución:50, apertura: 1.8}, 
                            dual:true,
                            caracteristicasdual:
                                {resolución:13, apertura:2.2},  
                            frontal:
                                {resolucion:13, apertura:2.4}, 
                            uom:
                                {resolucion:"megapixel", apertura:"diafragma"}
                        },
                    bateria:
                        {
                            capacidad:4100, uom:"mega-amperio", 
                            extraible:false, cargarapida:true, cargainalambrica:false
                        },
                    },
            conectividad:
                {
                    banda:["4G", "3G", "2G"],
                    nfc:true, 
                    bluetooth:"5.2",  
                    tipousb:"C", 
                    audiojack:false, 
                }
        },
            {modelo:"Redmi Note 10S", _id:1, marca:["Redmi", "Xiaomi"], pais:"China", precio:[179,189,232], divisa:"euro", fechalanzamiento: new Date("2021-03-01"), diseño:{ancho:74.5, alto:160.5, grosor:8.3, uom:"milimetros", peso:179, uom:"gramos", materiales:["plastico", "P2i nano coating"], huelladactilar:true, colores:["blanco","azul","gris"]}, pantalla:{pulgadas:6.43, tipopantalla:"amoled"}, audio:["Hi-Res audio","altavoces estereo"], sistemaoperativo:"android", hardware: {procesador: {modelo:"MediaTek Helio G95", nucleos:8, frecuencia:2, uom:"gigahercio"}, almacenamiento:{memoriaram:[6, 8], memoriainterna:[64, 128], uom:"gigabyte"},gpu:"Arm Mali-G76",camara: {principal: {resolución:64, apertura:1.79 }, dual:false,frontal:{resolucion:13, apertura:2.45}, uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:5000, uom:"mega-amperio", extraible:false, cargarapida:true, cargainalambrica:false},},conectividad:{banda:["4G","3G","2G"],nfc:true, bluetooth:"5.0",  tipousb:"C", audiojack:true, }},
            {modelo:"Alcatel 3 (2019)", _id:2, marca:"Alcatel", pais:"China",precio:90 , divisa:"euro", fechalanzamiento: new Date("2019-02-01"), diseño:{ancho:69.7, alto:151.1, grosor:8, uom:"milimetro",peso:145, uom:"gramo",materiales:"plastico", huelladactilar:true , colores:["negro","azul"]},pantalla:{pulgadas:5.9,tipopantalla:"LCD IPS"},audio:"altavoces estereo",sitemaoperativo: "android",hardware:{ procesador:{modelo:"MediaTek Helio P23",nucleos:8,frecuencia:2, uom:"gigahercio"},almacenamiento:{memoriaram:4, memoriainterna:64, uom:"gigabyte"},gpu:"ARM Mali-G71 MP2",camara:{principal:{resolución:13, apertura:2},dual:false,frontal:{resolucion:5, apertura:2.4},uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:3000, uom:"mega-amperio",extraible:false, cargarapida:false, cargainalambrica:false},},conectividad:{banda:["4G","3G","2G"], nfc:true, bluetooth:"4.2",tipousb:"microUSB 2.0",audiojack:true}},
            {modelo:"Apple iPhone 13 Pro Max", _id:3, compañia:"Apple", pais:"Estados Unidos",precio:[1259,1354,1579,1804] , divisa:"euro",fechalanzamiento: new Date("2021-09-01"),diseño:{ancho:78.1, alto:168.8, grosor:7.4, uom:"milimetro",peso:228, uom:"gramo",materiales:["cristal","aluminio"], huelladactilar:false, colores:["azul","oro","plata","gris"]},pantalla:{pulgadas:"6.7",tipopantalla:"oled"},audio:["Dolby Atmos","Dolby Digital Plus","altavoces estereo"],sitemaoperativo: "iOS",hardware:{ procesador:{modelo:"Apple A15 Bionic",nucleos:6,frecuencia:, uom:"gigahercio"},almacenamiento:{memoriaram:, memoriainterna: [], uom:"gigabyte"},gpu:"",camara:{principal:{resolución:, apertura: },dual:,caracteristicasdual:{resolución:, apertura:},frontal:{resolucion:, apertura:},uom:{resolucion:"megapixel", apertura:"diafragma"}},bateria:{capacidad:, uom:"mega-amperio",extraible:, cargarapida:, cargainalambrica:},},conectividad:{banda:[]nfc:, bluetooth:"",tipousb:"",audiojack:,}},
    ]
)