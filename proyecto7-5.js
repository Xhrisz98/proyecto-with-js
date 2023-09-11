/*const conteiner=document.querySelector('.conteiner');

const fragmento=document.createDocumentFragment();
for(let i=0; i<20;i++){
const elementLabel=document.createElement('DIV');
const textInLabel=document.createTextNode('Llave '+(i+1));
elementLabel.appendChild(textInLabel);
fragmento.appendChild(elementLabel);
}
conteiner.appendChild(fragmento);*/

/*const contenedor=document.querySelector('.flex-container'); 
let count=0;
function setKeys(name,model, price ){
    count++;
    img='<img class="llave-img" src ="llave.png">'; 
    name= `<h2> ${name} </h2>`;
    model= `<h3 id='${model}'> ${model} </h3>`;
    price= `<p>Price: <b>$${price}</b> </p>`;
    return [img, name,model,price];
}

//const llave=setKeys('Llave','ModeloX','33');
//contenedor.innerHTML= llave[0] + llave[1] + llave[2]+llave[3];

let fragmento=document.createDocumentFragment();
for(var i=1; i<=20;i++){
    
    let modeloRandom=Math.floor(Math.random()*1000);
    let precioRandom=Math.floor(Math.random()*10+30);
    let llave = setKeys(`llave ${i}`,`modelo: ${modeloRandom}`, ` ${precioRandom}`);
    
    let div= document.createElement("DIV");
    div.tabIndex = i;
    div.classList.add(`item-${i}`,`flex-item`);//agrego una clase
    div.innerHTML = llave[0]+ llave[1]+ llave[2]+ llave[3];
    fragmento.appendChild(div);
}
contenedor.appendChild(fragmento);*/

const conteiner=document.querySelector('.flex-container');
let fragmento=document.createDocumentFragment()
for(i=1; i<=20; i++){
    let modeloRandom=Math.floor(Math.random()*1000+100);
    let precioRandom=Math.floor(Math.random()*30+10);
    
    const textElement1=document.createTextNode(`Llave ${i}`);
    const textElement2=document.createTextNode(`Modelo ${modeloRandom}:`);
    const textElement3=document.createTextNode(`Precio: $${precioRandom}`);
    const elemento1=document.createElement('DIV');
    const elemento2=document.createElement('H2');
    const elemento3=document.createElement('H3');
    const elemento4=document.createElement('B');
     
    elemento1.addEventListener('click',()=>{
        document.querySelector('.key-data').value=modeloRandom;
    });

    
    elemento2.appendChild(textElement1);
    elemento3.appendChild(textElement2);
    elemento4.appendChild(textElement3);
    elemento1.tabIndex=i;
    elemento1.innerHTML=`<img class="llave-img" src ="llave.png">';`
    elemento1.appendChild(elemento2);
    elemento1.appendChild(elemento3);
    elemento1.appendChild(elemento4);
    
    elemento1.classList.add(`item-${i}`,`flex-item`);
    
    fragmento.appendChild(elemento1);


    console.log(elemento1)
}
conteiner.appendChild(fragmento);