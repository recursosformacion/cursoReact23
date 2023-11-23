
const POR_SERIES = 'series';
const POR_AUTOR = 'author'

const PERSONAJES = 'characters';
const EPISODIOS = 'episodes';
const CUOTAS = 'quotes';
const MUERTOS = 'deaths'

const API_SER = 'https://www.breakingbadapi.com/api/';

/**
 * Acceso a la web https://www.breakingbadapi.com/ para recuperar
 * toda la informacion de la serie
 * Las llamadas son staticas y devuelven SIEMPRE Promise
 * Por ejemplo, en react, podriamos hacer:
 * AccesoAPI.leerPersonajes()
 *       .then(respuesta=>{
 *           this.setState({
 *               lista:respuesta,
 *           })
 */

export default class AccesoAPI {

    static async leerPersonajes(id = 0) {
        let ruta = API_SER + PERSONAJES;
        if (id !== 0) ruta += "/" + id
        return this.accederApi(ruta);
    }

    static async leerEpisodios(id = 0) {
        let ruta = API_SER + EPISODIOS;
        if (id !== 0)
            if (!isNaN(id)) {
                ruta += "/" + id;
            } else {
                ruta += "?series=" + encodeURIComponent(id);
            }
        return this.accederApi(ruta);
    }

    /**
     * Todo nulo acceso a todas las cuotas
     * 
     * @param {*} op numerico, acceso by id
     *            POR_SERIES (series)    cuota de la serie indicada en valor
     *            POR_AUTOR  (author)    cuota del actor indicado en valor
     * @param {*} valor 
     * Ejemplo (leer cuotas por series):
     * AccesoAPI.leerCuotas(AccesoAPI.POR_SERIES,"Better Call Saul")
     *  .then(respuesta=>{
     *       this.setState({
     *           lista:respuesta,
     *       })
     *   })   
     */
    static async leerCuotas(op = 0, valor = "") {
        let ruta = API_SER + CUOTAS;
        if (op !== 0)
            if (!isNaN(op)) {
                ruta += "/" + op;
            } else {
                ruta += "?" + op + "=" + encodeURIComponent(valor);
            }
        return this.accederApi(ruta);
    }

    static async leerMuertes(id = "") {
        let ruta = API_SER + MUERTOS;
        if (id !== "") ruta += "?name=" + encodeURIComponent(id);
        return this.accederApi(ruta);
    }

    /*
    *  Metodo de acceso a la API. Comun......
    */
    static async accederApi(ruta) {
        return await fetch(ruta)
            .then(res => res.json())
            .then(
                results => {
                    console.log(results);
                    return results;
                }
            )
    }


}