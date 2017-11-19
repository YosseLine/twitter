//Declaramos variables
var textArea = document.getElementById('container-text');
var buttonTweet = document.getElementById('button-tweet');
var tweetsBox = document.getElementById('tweets-box');
var accountant = document.getElementById('accountant');
var date = new Date();
var hour = date.getHours() + ':' + date.getMinutes();

window.addEventListener('load', function(e){
  buttonTweet.addEventListener('click', function(e){
    var newDiv = document.createElement('div');
    var newHour = document.createElement('div');
    newDiv.textContent = textArea.textContent;
    newDiv.classList.add("tweet");
    newHour.textContent = hour;
    newHour.classList.add('hour');
    newDiv.appendChild(newHour);
    tweetsBox.insertBefore(newDiv, tweetsBox.childNodes[1]);
    textArea.textContent = '';
  });
   textArea.addEventListener('keyup', function(e) {
      if (textArea.textContent.length === 0) {
        buttonTweet.disabled = true;
      }else{
        buttonTweet.disabled = false;
      }
  });

  textArea.addEventListener('keypress', function(e){
    var sizeCharacters = textArea.textContent.length;
    accountant.textContent = 140 - sizeCharacters;
    if (sizeCharacters >= 140) {
      accountant.classList.add("red");
      accountant.classList.remove("purple");
      accountant.classList.remove("blue");
      buttonTweet.disabled = true;
    } else if (sizeCharacters >= 130 && sizeCharacters <= 140) {
      accountant.classList.add("purple");
      accountant.classList.remove("red");
      buttonTweet.disabled = false;
    } else if (sizeCharacters >= 120 && sizeCharacters <= 129) {
      accountant.classList.add("blue");
      accountant.classList.remove("red");
      accountant.classList.remove("purple");
      buttonTweet.disabled = false;
    } else {
      accountant.classList.remove("blue");
      accountant.classList.remove("red");
      accountant.classList.remove("purple");
      buttonTweet.disabled = true;
    }
   });
   
  });
