function multiplicar(){
	var a1 = parseFloat(document.getElementsByTagName('input')[0].value), a2 = parseFloat(document.getElementsByTagName("input")[1].value);

	var multiplicacion = 0;
	const numero1 = a1; 
	if (a1 > 0)
	while(a1){
		multiplicacion += a2;
		a1--;
	}
	else
	while(a1){
		multiplicacion -= a2;
		num1++;
	} 
	alert(numero1+" * "+a2+" = "+multiplicacion);
}