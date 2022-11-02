// This function is the main function that call others functions
// Here the data is storage
// Import functions
import { ajuste } from './dataAdjust.mjs'
import { createPeriods } from './createPeriods.mjs'
import { idealCurve } from "./idealCurve.mjs";
import { s_curve } from "./s_curve.mjs"
// duplicate data 
let cpMonto;
let curva;
let period;
let ideal;
let s_Curve;
// APP
export function App(monto,duracion,id) {
    // Import data
    cpMonto = monto;
    curva = ajuste.curve;
    period = createPeriods(duracion);
    ideal = idealCurve(period,curva,monto,duracion);
    s_Curve = s_curve(ideal);
    return [s_Curve, ideal,id];
}


