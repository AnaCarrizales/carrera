export default class Concursante 
{
    constructor(nombre)
    {
        this._nombre = nombre;
        this._lugar = 0;
    }

    getLugar()
    {
        return this._lugar;
    }

    setLugar(numero)
    {
        this._lugar = numero;
    }

    cambiarLugar(numero)
    {
        this._lugar += numero;
        return this._position;
    }

    getNombre()
    {
        return this._nombre;
    }

    setNombre(nombre)
    {
        this._nombre = nombre;
    }
}