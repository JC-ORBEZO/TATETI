//let corteGanador=0;

let simboloGanador1;
let simboloGanador2;

var contador=1;

const muestra1=[];
const muestra2=[];

const vec1=[];
const vec2=[];
const vec3=[];
const vec4=[];
const vec5=[];
const vec6=[];
const vec7=[];
const vec8=[];

const bec1=[];
const bec2=[];
const bec3=[];
const bec4=[];
const bec5=[];
const bec6=[];
const bec7=[];
const bec8=[];

const desahaiblitar=()=>{    
    document.getElementById("space1").disabled=true;
    document.getElementById("space2").disabled=true;
    document.getElementById("space3").disabled=true;
    document.getElementById("space4").disabled=true;
    document.getElementById("space5").disabled=true;
    document.getElementById("space6").disabled=true;
    document.getElementById("space7").disabled=true;
    document.getElementById("space8").disabled=true;
    document.getElementById("space9").disabled=true;   
}

const verificar1=(muestra1,aca)=>{    
    var valor1=0;
    for(let i=0;i<muestra1.length;i++){
       muestra1[i]===aca ? valor1++ : null;
       //console.log(valor1);
    }
    if(valor1===3){
    document.getElementById("gana").innerHTML=`Tenemos un ganador ${simboloGanador1}`;
    desahaiblitar();
    //console.log("Tenemos un ganador");
    //corteGanador=5;
       
    }
        
}

const verificar2=(muestra2,aca)=>{      
    var valor2=0;
    for(let i=0;i<muestra2.length;i++){
       muestra2[i]===aca ? valor2++ : null;
       //console.log(valor2);
       
    }
    if(valor2===3){
    document.getElementById("gana").innerHTML=`Tenemos un ganador ${simboloGanador2}`;
    desahaiblitar();
    //console.log("Tenemos un ganador");
    //corteGanador=5;
    
    }
    
    
}

opera1=(cad)=>{    
    switch(cad){        
        case 'a':            
            vec1.push("a");
            vec4.push("d");
            vec7.push("g");
            verificar1(vec1,"a");
            verificar1(vec4,"d");
            verificar1(vec7,"g");
        break;
        case 'b':
            vec2.push("b");
            vec4.push("d");
            verificar1(vec2,"b");
            verificar1(vec4,"d");
        break;
        case 'c':
            vec3.push("c");
            vec8.push("h");
            vec4.push("d");
            verificar1(vec3,"c");
            verificar1(vec8,"h");
            verificar1(vec4,"d");
        break;
        case 'd':
            vec1.push("a");
            vec5.push("e");
            verificar1(vec1,"a");
            verificar1(vec5,"e");
        break;
        case 'e':
            vec2.push("b");
            vec7.push("g");
            vec8.push("h");
            vec5.push("e");
            verificar1(vec2,"b");
            verificar1(vec7,"g");
            verificar1(vec8,"h");
            verificar1(vec5,"e");
        break;
        case 'f':
            vec3.push("c");
            vec5.push("e");
            verificar1(vec3,"c");
            verificar1(vec5,"e");
        break;
        case 'g':
            vec1.push("a");
            vec6.push("f");
            vec8.push("h");
            verificar1(vec1,"a");
            verificar1(vec6,"f");
            verificar1(vec8,"h");
        break;
        case 'h':
            vec2.push("b");
            vec6.push("f");
            verificar1(vec2,"b");
            verificar1(vec6,"f");
        break;
        case 'i':
            vec3.push("c");
            vec6.push("f");
            vec7.push("g");
            verificar1(vec3,"c");
            verificar1(vec6,"f");
            verificar1(vec7,"g");
        break;
    }
}

opera2=(cad)=>{
    switch(cad){        
        case 'a':            
            bec1.push("a");
            bec4.push("d");
            bec7.push("g");
            verificar2(bec1,"a");
            verificar2(bec4,"d");
            verificar2(bec7,"g");
        break;
        case 'b':
            bec2.push("b");
            bec4.push("d");
            verificar2(bec2,"b");
            verificar2(bec4,"d");
        break;
        case 'c':
            bec3.push("c");
            bec8.push("h");
            bec4.push("d");
            verificar2(bec3,"c");
            verificar2(bec8,"h");
            verificar2(bec4,"d");
        break;
        case 'd':
            bec1.push("a");
            bec5.push("e");
            verificar2(bec1,"a");
            verificar2(bec5,"e");
        break;
        case 'e':
            bec2.push("b");
            bec7.push("g");
            bec8.push("h");
            bec5.push("e");
            verificar2(bec2,"b");
            verificar2(bec7,"g");
            verificar2(bec8,"h");
            verificar2(bec5,"e");
        break;
        case 'f':
            bec3.push("c");
            bec5.push("e");
            verificar2(bec3,"c");
            verificar2(bec5,"e");
        break;
        case 'g':
            bec1.push("a");
            bec6.push("f");
            bec8.push("h");
            verificar2(bec1,"a");
            verificar2(bec6,"f");
            verificar2(bec8,"h");
        break;
        case 'h':
            bec2.push("b");
            bec6.push("f");
            verificar2(bec2,"b");
            verificar2(bec6,"f");
        break;
        case 'i':
            bec3.push("c");
            bec6.push("f");
            bec7.push("g");
            verificar2(bec3,"c");
            verificar2(bec6,"f");
            verificar2(bec7,"g");
        break;
    }
}

const cambiar=(e)=>{
    if(contador<=9){
        if(contador%2===1){
            e.target.textContent="❌";            
            opera1(e.target.value);
            simboloGanador1="❌";
            //corteGanador=5;            
        }else{            
            e.target.textContent="⭕";            
            opera2(e.target.value);  
            simboloGanador2="⭕";
           // corteGanador=5;
        }  
        //simboloGanador=e.target.textContent;      
    }    
    contador++;   
}
/*
cambiar=(e)=>{
    if(contador<=9){
        if(contador%2===1){
            turno.value=jugador1.value;
            e.target.textContent="❤";
            //console.log(e.target.textContent);            
            oper1(parseInt(e.target.value));
            console.log(acum1);
            
        }else{
            turno.value=jugador2.value;
            e.target.textContent="✝";
            //console.log(e.target.textContent);            
            oper2(parseInt(e.target.value));  
            console.log(acum2);          
        }        
    }    
    contador++;   
}
*/

start=()=>{    
    document.getElementById("space1").addEventListener("click",cambiar);
    document.getElementById("space2").addEventListener("click",cambiar);
    document.getElementById("space3").addEventListener("click",cambiar);
    document.getElementById("space4").addEventListener("click",cambiar);
    document.getElementById("space5").addEventListener("click",cambiar);
    document.getElementById("space6").addEventListener("click",cambiar);
    document.getElementById("space7").addEventListener("click",cambiar);
    document.getElementById("space8").addEventListener("click",cambiar);
    document.getElementById("space9").addEventListener("click",cambiar);
    
}

window.onload=start;