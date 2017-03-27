// calculator
var amountRange= document.querySelector("#calculator .mebleg");
var amount = document.querySelector("#calculator .amount");
var periodRange = document.querySelector('#calculator .muddet');
var period = document.querySelector('#calculator .period');
var payment = document.querySelector('#calcPayment');
var percentTotal = document.querySelector('#calculator .percentTotal');
var percentMonth = document.querySelector("#calculator .percentMonth");
var spanFaiz =document.querySelector("#calculator .faiz")
var faiz = 11;
// meblegin deyisdirilmesi
function amountRangeValue() {
	amount.innerHTML=amountRange.value*100;
	hesabla();
}
function periodRangeValue(){
	if (periodRange.value!=12) {
		faiz=faiz+1;
	}
	period.innerHTML=periodRange.value;
	hesabla();

	faiz=11;
}
function hesabla(){
	percentTotal.innerHTML= (amountRange.value*faiz)*periodRange.value/12+".00";
	percentMonth.innerHTML=(percentTotal.innerHTML/periodRange.value).toFixed(2);
	spanFaiz.innerHTML=faiz;
}


