const url = 'http:localhost:3000/api/aportaciones'
const contenedor = document.querySelector('tbodyAportaciones')
let resultados = ''

const modalAportaciones = document.getElementById('modalAportaciones')
const formAportaciones = document.querySelector('formAportaciones')


const analista = document.getElementById('analista')
const fecha = document.getElementById('fecha')
const empresa = document.getElementById('empresa')
const afavor = document.getElementById('afavor')
const taportacion = document.getElementById('taportacion')
const cliente = document.getElementById('cliente')
const sindicato = document.getElementById('sindicato')
const nomina = document.getElementById('nomina')
const periodo = document.getElementById('periodo')
const referencia = document.getElementById('referencia')
const referbancaria = document.getElementById('referbancaria')
const fahorro = document.getElementById('fahorro')
const n1 = document.getElementById('n1')
const n2 = document.getElementById('n2')
const n3 = document.getElementById('n3')
const n4 = document.getElementById('n4')
const n5 = document.getElementById('n5')
const totpercep = document.getElementById('totpercep')
const desc = document.getElementById('desc')
const vales = document.getElementById('vales')
const tottrasfact = document.getElementById('tottrasfact')
const ruta = document.getElementById('ruta')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')
const p4 = document.getElementById('p4')
const p5 = document.getElementById('p5')
const comvales = document.getElementById('comvales')
const iva = document.getElementById('iva')
let opcion = ''

btnCrear.addEventListener("click", () => {
    analista.value = ''
    fecha.value = ''
    empresa.value = ''
    afavor.value = ''
    taportacion.value = ''
    cliente.value = ''
    sindicato.value = ''
    nomina.value = ''
    periodo.value = ''
    referencia.value = ''
    referbancaria.value = ''
    fahorro.value = ''
    n1.value = ''
    n2.value = ''
    n3.value = ''
    n4.value = ''
    n5.value = ''
    totpercep.value = ''
    desc.value = ''
    vales.value = ''
    tottrasfact.value = ''
    ruta.value = ''
    p1.value = ''
    p2.value = ''
    p3.value = ''
    p4.value = ''
    p5.value = ''
    comvales.value = ''
    iva.value = ''
    modalAportaciones.show();
    opcion = 'crear'
});

//Funcion para mostrar resultados
const mostrar = (aportaciones) =>{
    aportaciones.forEach(aportacion => {

        resultados += `<tr>
        <td>${aportaciones.id}</td>
        <td>${aportaciones.analista}</td>
        <td>${aportaciones.fecha}</td>
        <td>${aportaciones.empresa}</td>
        <td>${aportaciones.afavor}</td>
        <td>${aportaciones.taportacion}</td>
        <td>${aportaciones.cliente}</td>
        <td>${aportaciones.sindicato}</td>
        <td>${aportaciones.nomina}</td>
        <td>${aportaciones.periodo}</td>
        <td>${aportaciones.referencia}</td>
        <td>${aportaciones.referbancaria}</td>
        <td>${aportaciones.fahorro}</td>
        <td>${aportaciones.n1}</td>
        <td>${aportaciones.n2}</td>
        <td>${aportaciones.n3}</td>
        <td>${aportaciones.n4}</td>
        <td>${aportaciones.n5}</td>
        <td>${aportaciones.totpercep}</td>
        <td>${aportaciones.desc}</td>
        <td>${aportaciones.vales}</td>
        <td>${aportaciones.tottrasfact}</td>
        <td>${aportaciones.ruta}</td>
        <td>${aportaciones.p1}</td>
        <td>${aportaciones.p2}</td>
        <td>${aportaciones.p3}</td>
        <td>${aportaciones.p4}</td>
        <td>${aportaciones.p5}</td>
        <td>${aportaciones.comvales}</td>
        <td>${aportaciones.iva}</td>
        <td class="text-center"><a class="btnEditar btn btn-primary">Editar</a><a class="btnBorrar btn btn-primary">Borrar</a></td>
        <td></td>
    </tr>`

    })
    contenedor.innerHTML = resultados
}



fetch(url)
    .then( response => response.json())
    .then( data => mostrar(data))
    .catch(error => console.log(error))







// const btnCrear = document.getElementById('btnCrear');
// const modalAportaciones = document.getElementById('modalAportaciones');
// const close = document.getElementById('close');

// btnCrear.addEventListener('click', () => {
//     modalAportaciones.classList.add('show');  
// });

// close.addEventListener('click', () => {
//     modalAportaciones.classList.remove('show');
// });