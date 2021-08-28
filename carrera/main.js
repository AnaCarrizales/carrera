import Dado from './dado.js';
import Concursante from './competencia.js';

let dado1 = new Dado();
let concursante1 = new Concursante("Alex");
let concursante2 = new Concursante("Piper");
let turno = 1;

for(let lugar = 0; lugar <= 100; lugar++)
{
    console.log(`Lanzamiento ${turno}`);
    let turno1 = Dado.probablidad(dado1.lanzar());
    concursante1.cambiarLugar(turno1)
    console.log(concursante1.getNombre() + " esta en el lugar " + concursante1.getLugar());
    
    let turno2 = Dado.probablidad(dado1.lanzar());
    concursante2.cambiarLugar(turno2);
    
    console.log(`${concursante2.getNombre()} esta en el lugar ${concursante2.getLugar()}`);
    turno++;
        
    if(concursante1.getLugar() > concursante2.getLugar())
    {
        lugar = concursante1.getLugar();
    } 
        
    else 
    {
        lugar = concursante2.getLugar();
    }
    
    if(concursante1.getLugar() >= 100 && concursante2.getLugar() >= 100)
    {
        console.log("Esto es un empate")
    } 
        
    else if(concursante1.getLugar() >= 100 && concursante2.getLugar() < 100)
    {
        console.log("Alex es la ganadora");
    } 
        
    else
    {
        console.log("Piper es la ganadora");
    }
}