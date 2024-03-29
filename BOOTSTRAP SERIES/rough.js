const depr = document.querySelector('.depriciation')
const clsValue = document.querySelector('.cls-val')

function myFunc(value, percent){
    const b = Number(percent /100)
    const aOne = (value * (b)).toFixed(2)
    const aTwo = (value - aOne).toFixed(2)
    console.log(`Depriciation: ${aOne}`);
    console.log(`Closing Value: ${aTwo}`);
    depr.innerHTML = `Depriciation: ${aOne}`
    clsValue.innerHTML = `Closing Value: ${aTwo}`

}
    myFunc( 39487.78 , 7.5 )
    // myFunc( 8510.21 , 15 )
    // myFunc( 3380.58 , 15 )
    // myFunc( 41017.33 , 15 )
    // myFunc( 6415.08 , 15 )
    // myFunc( 107471.87 , 15 )
