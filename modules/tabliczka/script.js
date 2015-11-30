function tabliczka_losowanie()
{
	if (answers <= 4)
	{
			a = (Math.floor((Math.random() * 5) + 1))*1; 
			document.forms['tabl'].pierwsza.value=a*1;
			b = (Math.floor((Math.random() * 5) + 1))*1;
			document.forms['tabl'].druga.value=b*1;
	}
	if (answers >= 5 && answers <9)
	{
			a = (Math.floor((Math.random() * 4) + 6))*1; 
			document.forms['tabl'].pierwsza.value=a*1;
			b = (Math.floor((Math.random() * 4) + 6))*1;
			document.forms['tabl'].druga.value=b*1;
	}
	if (answers == 10)
	{
			a = (Math.floor((Math.random() * 5) + 1))*1; 
			document.forms['tabl'].pierwsza.value=a*1;
			b = (Math.floor((Math.random() * 5) + 1))*1;
			document.forms['tabl'].druga.value=b*1;
	}
}

var tries = 1;
var goodanswers = 0;
var answers = 0;
var lifes = 2;

function tabliczka_zasady()
{
	alert("Gra jest podzielona na 2 etapy trudności. Ukończymy grę dopiero, gdy odpowiemy poprawnie 10 razy poprawnie. W grze możesz popełnić tylko 2 błędy. Powodzenia!");
}

function tabliczka_mnozenie()
{
	var wynikmn = document.forms['tabl'].wynik.value;
	if (wynikmn==a*b)
	{
		alert("Poprawna odpowiedź");
		$(function()
		{
			tries++;
			$('#tries').text("Próba: "+tries);
			goodanswers++;
			$('#goodanswers').text("Poprawne odpowiedzi: "+goodanswers);
			tabliczka_losowanie();
			wynik.value="";
			answers++;
		});
	}
	else
	{
		alert("Błędna odpowiedź");
		alert("Poprawna odpowiedź wynosi: "+a*b);
		$(function()
		{
			tries++;
			$('#tries').text("Próba: "+tries);
			--lifes;
			$('#lifes').text("Zostało żyć: "+lifes);
			tabliczka_losowanie();
			wynik.value="";
			if (lifes == 0)
			{
				alert("Przegrałeś! Musisz zacząć od nowa!");
				answers = 0;
				lifes = 2;
				$('#lifes').text("Zostało żyć: "+lifes);
			}
		});
	}
	if(answers==10)
	{
		alert("Ukończyłeś grę!");
		tries = 1;
		goodanswers = 0;
		answers = 0;
		lifes = 2;
		tabliczka_losowanie();
		$('#tries').text("Próba: "+tries);
		$('#goodanswers').text("Poprawne odpowiedzi: "+goodanswers);
		$('#lifes').text("Zostało żyć: "+lifes);
	}
}
