console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
function showMood() {
  var name = document.getElementById('name').value;
  var mood = document.getElementById('mood').value;
  var face;

  if (!name || !mood) {
    alert("please fill in all fields!");
    return false;
  };
  
  if ( mood === "happy") {
    face = ":-)";
  } 
  else if (mood === "sad") {
    face = ":-(";
  } 
  else {
    face = ":-|";
  };

  var moodString  = name + " is feeling " + mood + " today! " + face;
  var holder = document.getElementById('holder');

  holder.innerHTML = moodString;  
};

function clearMood () {
  document.getElementById('moodForm').reset();
  document.getElementById('holder').innerHTML = '';
}