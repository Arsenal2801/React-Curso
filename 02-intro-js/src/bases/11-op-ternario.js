
/*
const active = true;
let msg='';
if(active) msg = 'activo'; else msg = 'inactivo';
*/

const active = true;
//const msg = (active)?'Activo':'Inactivo';
const msg = (active) && 'Activo';

console.log(msg);
