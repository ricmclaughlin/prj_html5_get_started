function showMood(){var a,b=document.getElementById("name").value,c=document.getElementById("mood").value;if(!b||!c)return alert("please fill in all fields!"),!1;a="happy"===c?":-)":"sad"===c?":-(":":-|";var d=b+" is feeling "+c+" today! "+a,e=document.getElementById("holder");e.innerHTML=d}function clearMood(){document.getElementById("moodForm").reset(),document.getElementById("holder").innerHTML=""}console.log("'Allo 'Allo!");