const fs = require('fs');

class Mensajes {
    constructor(){
        this.mensajes = [];
    }

    leerMensajes(){
        try{
            let contenido = fs.readFileSync( __dirname + '/chat.txt', 'utf-8');
            if (contenido) {
                this.mensajes = JSON.parse(contenido);
                return this.mensajes;
            }else { throw new Error("No hay contenido") }
        }
        catch (e) {
            console.log("Entro a error!")
            let fecha = (new Date()).toLocaleString();
            let defaultMensaje = { author: 'Admin', text: 'Bienvenidos', date: fecha}
            this.mensajes.push(defaultMensaje);
            fs.appendFileSync(__dirname + '/chat.txt', JSON.stringify(this.mensajes, null, '\t'))
            return this.mensajes;
        }
    }

    guardarMensajes(mensaje){
        this.mensajes.push(mensaje);
        fs.writeFileSync(__dirname + "/chat.txt", JSON.stringify(this.mensajes, null, '\t'));
    }
}

module.exports = Mensajes;