let victoriasEn_x_rondas;
const estadisticasDelNumero_6 = (opciones, condicion) => {
    cantidadDe_6_porRonda = []
    for (let i = 0; i < opciones; i++) {
        let numeroObtenido = Math.floor((Math.random(6) * 6) + 1);
        numeroObtenido === 6 ? cantidadDe_6_porRonda.push(numeroObtenido) : null;
    }
    cantidadDe_6_porRonda.length >= condicion ? victoriasEn_x_rondas.push(1) : null;
}
const estadisticasPorCantidadDeOpciones_rondas = (cantidad, totalDeRondas) => {
    for (let i = 1; i < cantidad + 1; i++) {
        console.log(`${totalDeRondas} rondas con ${6 * i} dados (ganas con ${1 * i} seis) \n`)
        victoriasEn_x_rondas = []
        for (let rondas = 0; rondas < totalDeRondas; rondas++) {
            estadisticasDelNumero_6(6 * i, 1 * i)
        }
        console.log("ganás el ", ((victoriasEn_x_rondas.length / totalDeRondas) * 100), "% de las veces\n")
    }
}

estadisticasPorCantidadDeOpciones_rondas(100 , 10000)