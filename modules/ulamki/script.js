function ulamki_NWD(e, f) {
  while (e!=f) { 
    if (e<f) f = f-e; 
    else e = e-f;
  }
  return e;
}

		var proba=1;
		var poprawna=0;
		var bledna=0;
function ulamki_dodawanielicznikow()
{

	var licznik3 = document.forms['wsio'].licznik3s.value;
	var licznik4 = document.forms['wsio'].licznik4s.value;

	var mianownik3 = document.forms['wsio'].mianownik3s.value;
	var mianownik4 = document.forms['wsio'].mianownik4s.value;
	var caloscx = document.forms['wsio'].caloscs.value;



	if(b!=d){
	var lx1=(a*d)*1;
	var mx1=(b*d)*1;
	var lx2=(c*b)*1;
	var mx2=(d*b)*1;
	
	var lwynik=(lx1+lx2)*1;
	var mwynik=mx1*1;
	var nwd = ulamki_NWD(lwynik, mwynik);
	lwynik=(lwynik/nwd)*1;
	mwynik=(mwynik/nwd)*1;
		if(lwynik>mwynik){
		var calosc = Math.floor((lwynik/mwynik));
		var caloscl = (lwynik%mwynik);
		var caloscm = mwynik;
	var nwd = ulamki_NWD(lwynik, mwynik);
	lwynik=(lwynik/nwd)*1;
	mwynik=(mwynik/nwd)*1;
		
		}
		else if(lwynik<mwynik){
		var calosc = 0;
		var caloscl = lwynik;
		var caloscm = mwynik;
	var nwd = ulamki_NWD(lwynik, mwynik);
	lwynik=(lwynik/nwd)*1;
	mwynik=(mwynik/nwd)*1;
		
		}
	}
	
	else if(b==d){
	var lwynik=(a+c)*1;
	var mwynik=b*1;
	lwynik=lwynik;
	mwynik=mwynik;
	
		
	var nwd = ulamki_NWD(lwynik, mwynik);
	lwynik=(lwynik/nwd)*1;
	mwynik=(mwynik/nwd)*1;
		if(lwynik>mwynik){
		var calosc = Math.floor((lwynik/mwynik));
		var caloscl = (lwynik%mwynik);
		var caloscm = mwynik;
	var nwd = ulamki_NWD(lwynik, mwynik);
	lwynik=(lwynik/nwd)*1;
	mwynik=(mwynik/nwd)*1;
		
		}
		else if(lwynik<mwynik){
		var calosc = 0;
		var caloscl = lwynik;
		var caloscm = mwynik;

		
		}
	
	}

	if((licznik3==lwynik)&&(mianownik3==mwynik)&&(licznik4==caloscl)&&(mianownik4==caloscm)&&(caloscx==calosc)){
	alert("Poprawna odpowiedź");
		
		$(function(){
			proba++;
			$('#proby').text("Przykład: "+proba);
			poprawna++;
			$('#poprawne').text("Poprawne odpowiedzi: "+poprawna);
			if(proba<11){
			ulamki_losowanie();
			}
			else if(proba==11){
				if(poprawna==9)
				{
			$('#proby').text("Przykład: 10");
			alert("Ukończyłeś pierwszy poziom z wynikiem "+poprawna+"/10. Zapraszamy do kolejnego poziomu!");
			ulamki_losowanie2();
			bledna=0;
			poprawna=0;
			$('#poprawne').text("Poprawne odpowiedzi: 0");
			$('#bledne').text("Błędne odpowiedzi: 0");
			$('#proby').text("Przykład: "+(proba-10));
			$('#poziom').text("Poziom: 2/3");
			}
	
				
				
				else{
				poprawna=0;
				bledna=0;
				$('#proby').text("Przykład: 10");
				alert("W pierwszym poziomie uzyskałeś wynik "+poprawna+"/10. To za mało, by przejść do kolejnego poziomu. Spróbuj jeszcze raz");
				if((proba>=11)){
				$('#bledne').text("Błędne odpowiedzi: 0");
				ulamki_losowanie();
				$('#proby').text("Przykład: 1");
				proba=1;
				}
				}
				
				
				
				
				
			}
			else if((proba>11)&&(proba<21)){
				ulamki_losowanie2();
				$('#proby').text("Przykład: "+(proba-10));
				$('#poziom').text("Poziom: 2/3");	
			
			}
			
			else if(proba==21){
				
				if(poprawna==9){
				
			$('#proby').text("Przykład: 10");
			alert("Ukończyłeś drugi poziom z wynikiem "+poprawna+"/10. Zapraszamy do ostatniego poziomu!");
			ulamki_losowanie3();
			bledna=0;
			poprawna=0;
			$('#poprawne').text("Poprawne odpowiedzi: 0");
			$('#bledne').text("Błędne odpowiedzi: 0");
			$('#proby').text("Przykład: "+(proba-20));	
			$('#poziom').text("Poziom: 3/3");	
			}
				
				else{
				poprawna=0;
				bledna=0;
				$('#proby').text("Przykład: 10");
				alert("W drugim poziomie uzyskałeś wynik "+poprawna+"/10. To za mało, by przejść do kolejnego poziomu. Spróbuj jeszcze raz");
				if((proba>=21)&&(proba<31)){
				$('#bledne').text("Błędne odpowiedzi: 0");
				ulamki_losowanie2();
				$('#proby').text("Przykład: 1");
				proba=11;

				}
				}
    				
			}
				else if((proba>21)&&(proba<31)){
				ulamki_losowanie3();
				$('#proby').text("Przykład: "+(proba-20));	
			
			}
			else if(proba>=31){
				if(poprawna==9){
			$('#proby').text("Przykład: 10");
			alert("Ukończyłeś trzeci poziom z wynikiem "+poprawna+"/10");
			alert("Gratuluję! Przeszedłeś całą grę!");
			window.location.reload();
			}
				else{
				poprawna=0;
				bledna=0;
				$('#proby').text("Przykład: 10");
				alert("W trzecim poziomie uzyskałeś wynik "+poprawna+"/10. To za mało, by przejść trzeci poziom. Spróbuj jeszcze raz");
				if((proba>=21)&&(proba<=31)){
				$('#bledne').text("Błędne odpowiedzi: 0");
				ulamki_losowanie2();
				$('#proby').text("Przykład: 1");
				proba=21;
				}
				}
			}
			mianownik3s.value="";
			mianownik4s.value="";
			licznik3s.value="";
			licznik4s.value="";
			caloscs.value="";

			});
	}
	

	
	else{
	alert("Błędna odpowiedź");
			$(function(){
			proba++;
			$('#proby').text("Przykład: "+proba);
			bledna++;
			$('#bledne').text("Błędne odpowiedzi: "+bledna);
			if(proba<11){
			ulamki_losowanie();
			}
			else if(proba==11){
				if(poprawna==9)
				{
			$('#proby').text("Przykład: 10");
			alert("Ukończyłeś pierwszy poziom z wynikiem "+poprawna+"/10. Zapraszamy do kolejnego poziomu!");
			ulamki_losowanie2();
			bledna=0;
			poprawna=0;
			$('#poprawne').text("Poprawne odpowiedzi: 0");
			$('#bledne').text("Błędne odpowiedzi: 0");
			$('#proby').text("Przykład: "+(proba-10));
			$('#poziom').text("Poziom: 2/3");
			}
				else{
				poprawna=0;
				bledna=0;
				$('#proby').text("Przykład: 10");
				alert("W pierwszym poziomie uzyskałeś wynik "+poprawna+"/10. To za mało, by przejść do kolejnego poziomu. Spróbuj jeszcze raz");
				if((proba>=11)){
				$('#bledne').text("Błędne odpowiedzi: 0");
				ulamki_losowanie();
				$('#proby').text("Przykład: 1");
				proba=1;
				}
				}
			}
			else if((proba>11)&&(proba<21)){
				ulamki_losowanie2();
				$('#proby').text("Przykład: "+(proba-10));
				$('#poziom').text("Poziom: 2/3");	
			
			}
			
			else if(proba==21){
				
				if(poprawna==9){
				
			$('#proby').text("Przykład: 10");
			alert("Ukończyłeś drugi poziom z wynikiem "+poprawna+"/10. Zapraszamy do ostatniego poziomu!");
			ulamki_losowanie3();
			bledna=0;
			poprawna=0;
			$('#poprawne').text("Poprawne odpowiedzi: 0");
			$('#bledne').text("Błędne odpowiedzi: 0");
			$('#proby').text("Przykład: "+(proba-20));	
			$('#poziom').text("Poziom: 3/3");	
			}
				
				else{
				poprawna=0;
				bledna=0;
				$('#proby').text("Przykład: 10");
				alert("W drugim poziomie uzyskałeś wynik "+poprawna+"/10. To za mało, by przejść do kolejnego poziomu. Spróbuj jeszcze raz");
				if((proba>=21)&&(proba<31)){
				$('#bledne').text("Błędne odpowiedzi: 0");
				ulamki_losowanie2();
				$('#proby').text("Przykład: 1");
				proba=11;

				}
				}
    				
			}
				else if((proba>21)&&(proba<31)){
				ulamki_losowanie3();
				$('#proby').text("Przykład: "+(proba-20));	
			
			}
			else if(proba>=31){
				if(poprawna==9){
			$('#proby').text("Przykład: 10");
			alert("Ukończyłeś trzeci poziom z wynikiem "+poprawna+"/10");
			alert("Gratuluję! Przeszedłeś całą grę!");
			window.location.reload();
			}
				else{
				poprawna=0;
				bledna=0;
				$('#proby').text("Przykład: 10");
				alert("W trzecim poziomie uzyskałeś wynik "+poprawna+"/10. To za mało, by przejść trzeci poziom. Spróbuj jeszcze raz");
				if((proba>=21)&&(proba<=31)){
				$('#bledne').text("Błędne odpowiedzi: 0");
				losowanie2();
				$('#proby').text("Przykład: 1");
				proba=21;
				}
				}
			}
			mianownik3s.value="";
			mianownik4s.value="";
			licznik3s.value="";
			licznik4s.value="";
			caloscs.value="";

			});
	}
		}
		

		


function ulamki_losowanie()
{
	a = (Math.floor((Math.random() * 4) + 1))*1; 
	document.forms['wsio'].licznik1s.value=a*1;
	b = (Math.floor((Math.random() * 4) + 1))*1;
	document.forms['wsio'].mianownik1s.value=b*1;
	c = (Math.floor((Math.random() * 4) + 1))*1; 
	document.forms['wsio'].licznik2s.value=c*1;
	d = (Math.floor((Math.random() * 4) + 1))*1;
	document.forms['wsio'].mianownik2s.value=d*1;
}

function ulamki_losowanie2()
{
	a = (Math.floor((Math.random() * 6) + 3))*1; 
	document.forms['wsio'].licznik1s.value=a*1;
	b = (Math.floor((Math.random() * 6) + 3))*1;
	document.forms['wsio'].mianownik1s.value=b*1;
	c = (Math.floor((Math.random() * 6) + 3))*1; 
	document.forms['wsio'].licznik2s.value=c*1;
	d = (Math.floor((Math.random() * 6) + 3))*1;
	document.forms['wsio'].mianownik2s.value=d*1;
}

function ulamki_losowanie3()
{
	a = (Math.floor((Math.random() * 8) + 5))*1; 
	document.forms['wsio'].licznik1s.value=a*1;
	b = (Math.floor((Math.random() * 8) + 5))*1;
	document.forms['wsio'].mianownik1s.value=b*1;
	c = (Math.floor((Math.random() * 8) + 5))*1; 
	document.forms['wsio'].licznik2s.value=c*1;
	d = (Math.floor((Math.random() * 8) + 5))*1;
	document.forms['wsio'].mianownik2s.value=d*1;
}

