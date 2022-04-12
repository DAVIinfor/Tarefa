/* water-limits.js */
 conversores  const =  require ( './converters.js' ) ;

const  pCongelCelsius  =  0 ;
const  pEbulicaoCelsius  =  100 ;

const  pCongelFahrenheit  =  conversores . celsiusToFahrenheit ( pCongelCelsius ) ;
const  pEbulicaoFahrenheit  =  conversores . celsiusToFahrenheit ( pEbulicaoCelsius ) ;

consola . log ( ` O ponto de congelamento da água em Fahrenheit é: ${ pCongelFahrenheit } ` ) ;
consola . log ( `O ponto de ebulição da água em Fahrenheit é: ${ pEbuliçãoFahrenheit } ` ) ;