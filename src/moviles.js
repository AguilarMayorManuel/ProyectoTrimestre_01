db.moviles.insertMany(
    [
       {
            modelo:"Huawei P50",
            _id:1, 
            compañía:"Huawei", 
            pais:"China",
            precio: 885, uom:"euro",
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
            audio:
                    ["dolby atmos", "altavoces estereo"],
            software: 
                    {
                        sitemaoperativo: "HarmonyOS 2"
                    },
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
                            memoriaram: 8, 
                            memoriainterna: [128, 256], 
                            uom:"gygabyte"
                        },
                        graficos:"adreno 660",
                        camara: 
                        {
                            principal: 
                                {resolución:50, apertura: 1.8}, 
                            dual:
                                {resolución:13, apertura:2.2}, 
                            frontal:
                                {resolucion:13, apertura:2.4}, 
                            uom:
                                {resolucion:"megapixel", apertura:"diafragma"},
                        bateria:
                            {
                                capacidad:4100, uom:"mega-amperio", 
                                extraible:false, cargarapida:true, cargainalambrica:false
                            },
                        }
                    },
            conectividad:
                    {
                        bandas:["4G", "3G", "2G"],
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
             precio: , uom:"euro",
             fechalanzamiento: new Date(""),
             diseño: 
                {
                    ancho:, alto:, grosor:, uom:"", 
                    peso:, uom:"",
                    materiales:[], 
                    huelladactilar: , 
                    colores:[]
                },
            pantalla: 
                {
                    tamaño: , uom:"", 
                    tipopantalla:"",
                    tasarefresco: , uom:""
                },
            audio:
                [],
            software: 
                {
                    sitemaoperativo: "",
                },
            hardware:
                { 
                    procesador:
                        {
                            modelo:"",
                            nucleos:,
                            frecuencia:, uom:""
                        }, 
                    almacenamiento:
                        {
                            memoriaram:, memoriainterna: [], uom:""
                        },
                    graficos:"",
                    camara: 
                        {
                            principal: 
                                {resolución:, apertura: }, 
                            dual:
                                {resolución:, apertura:}, 
                            frontal:
                                {resolucion:, apertura:}, 
                            uom:
                                {resolucion:"", apertura:""}
                        },
                    bateria:
                        {
                            capacidad:, uom:"", 
                            extraible:, cargarapida:, cargainalambrica:
                        },
                },
            conectividad:
                {
                    bandas:[]
                    nfc:, 
                    bluetooth:"", 
                    wifi:[], uom: "", 
                    tipousb:"", 
                    audiojack:, 
                    tarjetasim: 
                    {tipo:"", dualsim: }
            
        }
    ]
)
        