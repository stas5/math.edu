function tabliczka_losowanie()
{
	if (answers <= 4)
	{
			jeden = (Math.floor((Math.random() * 5) + 1))*1; 
			document.forms['tabl'].pierwsza.value=jeden*1;
			dwa = (Math.floor((Math.random() * 5) + 1))*1;
			document.forms['tabl'].druga.value=dwa*1;
	}
	if (answers >= 5 && answers <9)
	{
			jeden = (Math.floor((Math.random() * 4) + 6))*1; 
			document.forms['tabl'].pierwsza.value=jeden*1;
			dwa = (Math.floor((Math.random() * 4) + 6))*1;
			document.forms['tabl'].druga.value=dwa*1;
	}
	if (answers == 10)
	{
			jeden = (Math.floor((Math.random() * 5) + 1))*1; 
			document.forms['tabl'].pierwsza.value=jeden*1;
			dwa = (Math.floor((Math.random() * 5) + 1))*1;
			document.forms['tabl'].druga.value=dwa*1;
	}
}

var tries = 1;
var goodanswers = 0;
var answers = 0;
var lifes = 2;

function tabliczka_zasady()
{
	alert("Przeznaczeniem gry jest utrwalenie tabliczki mnożenia. Gra kończy się, gdy gracz odpowie 10 razy poprawnie, przy czym może popełnić tylko 2 błędy.");
}

function tabliczka_mnozenie()
{
	var wynikmn = document.forms['tabl'].wynik.value;
	if (wynikmn==jeden*dwa)
	{
		alert("Poprawna odpowiedź");
		$(function()
		{
			tries++;
			$('#tries').text("Próba: "+tries);
			goodanswers++;
			$('#goodanswers').text("Poprawne odpowiedzi: "+goodanswers+"/10");
			tabliczka_losowanie();
			wynik.value="";
			answers++;
		});
	}
	else
	{
		alert("Błędna odpowiedź\nPoprawna odpowiedź wynosi: "+jeden*dwa);
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
				tries = 1;
				goodanswers = 0;
				$('#tries').text("Próba: "+tries);
				$('#goodanswers').text("Poprawne odpowiedzi: "+goodanswers+"/10");
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
		$('#goodanswers').text("Poprawne odpowiedzi: "+goodanswers+"/10");
		$('#lifes').text("Zostało żyć: "+lifes);
	}
}
