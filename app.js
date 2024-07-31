console.log("Buenas espectadores");  

        //Variables  
        let pais = "Paraguay"; //string  
        
        //funcion typeof devuelve el tipo de dato  
        console.log(typeof(pais));  
        
        let peso = 75;  
        console.log(typeof(peso));  

        debugger;  
        let altura = 1.80;  
        console.log(typeof(altura));  

        let soyDelgado = true;  
        console.log(typeof(soyDelgado));  

        //arreglo, vector o matriz  
        let matriz = [  
            pais, peso,  
            altura, soyDelgado  
        ];  
        const Vielma = "Teoria del BingBang";  
        console.log(matriz);  
        console.log(matriz.length); //Length, devuelve el largo de la variable  
        
        //comando para realizar recorridos  
        for(let i=0; i<matriz.length; i++){  
            debugger; //comando de ejecución   
            console.log(matriz[i]);  
        }