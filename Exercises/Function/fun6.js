function converteUnidades(dias, horas, minutos, segundos) {
    dias = dias * 86400
    horas = horas * 3600
    minutos = minutos * 60
return dias + horas + minutos + segundos
}
console.log(converteUnidades(1,1,1,1));