export function idealCurve(period,curve,monto,duracion) {
 // calculamos los intervalos del periodo ajustado a la curva inicial
 let periodoDeAjuste = 1000 / duracion;
 let ideal =[];
 period.forEach(element => {
    ideal.push(curve[Math.trunc(element*periodoDeAjuste)][1]*monto);
 }); 
 return ideal;
}