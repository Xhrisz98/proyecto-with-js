//programa de la entrada a una discoteca
//programa de registro de alumonos y su asistencia
//progrma de la calculadora and factorial
//programa busqueda de un contacto por sus parametros
//programa crear 3 celulares de gama media, 2 alta y 2 apps con ciertos parametros
//progrma que me imprima el maestro y estudiante ingresando el parametro de la materia, me cuente en cuantas materias esta y las materias
//programa que me permite agragar a un estudiante si hay menos de 5 students
//agregar clases dentro html

const container=document.querySelector('.flex-container');

const fragmento=document.createDocumentFragment();
for(let i=0; i<20; i++){

let modeloRandom=Math.floor(Math.random()*(1000-1100+1) + 1100);
let precioRandom=Math.floor(Math.random()*(30-10+1) + 10);


const label1=document.createElement('DIV');
const label2=document.createElement('H2');
const label3=document.createElement('H3');
const label4=document.createElement('P');
const label5=document.createElement('B');
label1.addEventListener('click',()=>{
    document.querySelector('.key-data').value=modeloRandom;
});


label1.classList.add(`flex-${i+1}`,`item-flex`);

const textLabel1=document.createTextNode(`Llave ${i+1}`);
const textLabel2=document.createTextNode(`Modelo: ${modeloRandom}`);
const textLabel3=document.createTextNode(`Precio: $${precioRandom}`);
label1.innerHTML=`<img src='llave.png' class='llave ${i+1}'>`;
label2.appendChild(textLabel1);
label3.appendChild(textLabel2);
label5.appendChild(textLabel3);
label4.appendChild(label5);
label1.appendChild(label2);
label1.appendChild(label3);
label1.appendChild(label4);
label1.tabIndex=i;

fragmento.appendChild(label1);

console.log(label1);
}
container.appendChild(fragmento);

const buy=document.querySelector('.buy');

buy.style.backgroundColor='#2d4';
buy.style.borderRadius='20px';
buy.style.boxShadow='0px 0px 5px #b21';
