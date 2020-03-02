	var btns = document.getElementsByClassName("btn");
	var random_number = document.getElementById("random_number");
	var result_text = document.getElementById("result_text");
	btns = Array.from(btns);

	function GetRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.round(Math.random() * (max - min + 1)) + min;
      }

	var size = btns.length;
	var i;

	for (i = 0; i < size; i+=1) {
		btns[i].addEventListener('click', Choise_number);
	}

	function Choise_number(event){
		var loader = setInterval(function() {
		result_text.innerHTML = '<p>секундочку... поколдуем...</p>';
		result_text.style.color = "#fff";
  		var timerRandom = GetRandomIntInclusive(1, 9);
  		random_number.innerText = timerRandom;
		}, 90);

		setTimeout(function() {
  			clearInterval(loader);

  			var btn_value = event.target.value;
			var rand = GetRandomIntInclusive(1, 9);
			random_number.innerText = rand;
				if(btn_value == rand){
					result_text.innerHTML = '<p>Поздравляем! Вы угадали число!</p>';
					result_text.style.color = "#079e23";
				}
				else{
					result_text.innerHTML = '<p>К сожалению, удача не на Вашей стороне</p>'
					result_text.style.color = "#bc1f00";
				}
		}, 1800);	
		
	}
