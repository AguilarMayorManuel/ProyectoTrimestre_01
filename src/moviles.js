db.moviles.insertMany(
    [
       {
            modelo:"Huawei P50",
            _id:1, 
            compañía:"Huawei", 
            pais:"China",
            precio: 885, divisa:"euro",
            fechalanzamiento: new Date("2021-07-29"), 
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
                    tamaño: 6.50, uom:"pulgadas", 
                    tipopantalla:"OLED",
                    tasarefresco:90, uom:"hercio"
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
                            dual:
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
                    wifi:["2.4", "5", "wifi AC"], uom: "gigahercio", 
                    tipousb:"C", 
                    audiojack:false, 
                    tarjetasim: 
                        {tipo:"nanosim", dualsim:true}
                }
        },
        {
            modelo:"Redmi Note 10S", 
             _id:2,
             compañia:["Redmi", "Xiaomi"],
             pais:"China",
             precio:185, divisa:"euro",
             fechalanzamiento: new Date("2021-03-11"),
             diseño: 
                {
                    ancho:74.5, alto:160.5, grosor:8.3, uom:"milimetros", 
                    peso:179, uom:"gramos",
                    materiales:["plastico", "P2i nano coating"], 
                    huelladactilar:true, 
                    colores:["blanco","azul","gris"]
                },
            pantalla: 
                {
                    tamaño:6.43, uom:"pulgadas", 
                    tipopantalla:"amoled",
                    tasarefresco:60, uom:"hercio"
                },
            audio:["Hi-Res audio","altavoces estereo"],
            sistemaoperativo:"android",
            hardware:
                { 
                    procesador:
                        {
                            modelo:"MediaTek Helio G95",
                            nucleos:8,
                            frecuencia:2, uom:"gigahercio"
                        }, 
                    almacenamiento:
                        {
                            memoriaram:[6, 8], memoriainterna:[64, 128], uom:"gigabyte"
                        },
                    gpu:"Arm Mali-G76",
                    camara: 
                        {
                            principal: 
                                {resolución:64, apertura:1.79 }, 
                            dual:
                                {resolución:8, apertura:2.2}, 
                            frontal:
                                {resolucion:13, apertura:2.45}, 
                            uom:
                                {resolucion:"megapixel", apertura:"diafragma"}
                        },
                    bateria:
                        {
                            capacidad:5000, uom:"mega-amperio", 
                            extraible:false, cargarapida:true, cargainalambrica:false
                        },
                },
            conectividad:
                {
                    banda:["4G","3G","2G"]
                    nfc:true, 
                    bluetooth:"5.0", 
                    wifi:[], uom: "", 
                    tipousb:"", 
                    audiojack:, 
                    tarjetasim: 
                    {tipo:"", dualsim: }
            }
        },