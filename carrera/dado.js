export default class Dado
{
    lanzar()
    {
        return Math.ceil(Math.random()*6);
    }

    static probablidad(numero)
    {
        if (numero == 1 || numero == 2)
        {
            return 1;
        } 
        else if (numero == 3)
        {
            return 3;
        } 
        else if (numero == 4 || numero == 5 || numero == 6)
        {
            return 2;
        }
    }
}