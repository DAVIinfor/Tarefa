/* celsius-to-fahrenheit.js */
 conversores  const =  require ( './converters.js' ) ;

// Pega a 3ª entrada de uma lista de argumentos
const  celsiusInput  =  process . argv [ 2 ] ; 
const  fahrenheitValue  =  conversores . celsiusToFahrenheit ( celsiusInput ) ;
consola . log ( ` ${ celsiusInput } graus Celsius = ${ fahrenheitValue } graus Fahrenheit` )