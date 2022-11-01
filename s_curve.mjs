export function s_curve(ideal) {
    let curv = [0];
    for(let i = 0; i < ideal.length-1; i++){
        curv.push(ideal[i+1]-ideal[i]);
    }
    return curv;
}