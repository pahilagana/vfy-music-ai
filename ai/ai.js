
        let isVoiceRecognitionOn = false;
        let recognitionTimeout;
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        const toggleButton = document.getElementById('toggleButton');

        toggleButton.addEventListener('click', function () {
            if (isVoiceRecognitionOn) {
                recognition.stop();
                clearTimeout(recognitionTimeout);
                speak("Please click again");
            } else {
                speak("sir how can i help you"); // Speech is not delayed
                setTimeout(function () {
                    recognition.start();
                    recognitionTimeout = setTimeout(function () {
                        recognition.stop();
                        speak("don't worry i am always here for you");
                    }, 5000); // Automatically turn off after 1 second
                }, 1500); // Delay for 3 seconds before starting voice recognition
            }
            isVoiceRecognitionOn = !isVoiceRecognitionOn;
        });

      recognition.onresult = function(event) {
        const lastResult = event.results[event.results.length - 1][0].transcript;

        if (lastResult.toLowerCase() === 'mp3') {
          const button1 = document.getElementById('pahilagana');
          button1.click();
          speak('okay i clicked on mp3');
        }
	    if (lastResult.toLowerCase() === 'download mp3') {
          const button1 = document.getElementById('pahilagana');
          button1.click();
          speak('okay i clicked on mp3 ');
        }  
if (lastResult.toLowerCase() === 'music') {
          const button1 = document.getElementById('pahilagana');
          button1.click();
          speak('okay i am downloading music ');
        }  
	    if (lastResult.toLowerCase() === 'download music') {
          const button1 = document.getElementById('pahilagana');
          button1.click();
          speak('okay i am downloading music ');
        }   

if (lastResult.toLowerCase() === 'download') {
          const button1 = document.getElementById('search-basic');
          button1.click();
          speak('click again on the magic icon and say mp3 for audio download and say mp4 for video download');
        }   
if (lastResult.toLowerCase() === 'tips') {
          const button1 = document.getElementById('search-basic');
          button1.click();
          speak('click again on the magic icon and say mp3 for audio download and say mp4 for video download');
        }   
	      
	      
	    if (lastResult.toLowerCase() === 'music download') {
          const button1 = document.getElementById('pahilagana');
          button1.click();
          speak('okay music downloading activete');
        }   
if (lastResult.toLowerCase() === 'back') {
          const button1 = document.getElementById('rewindButton');
          button1.click();
          speak('okay music 5 second back');
        }   
if (lastResult.toLowerCase() === 'start') {
          const button1 = document.getElementById('play');
          button1.click();
          speak('okay music start');
        }   

	if (lastResult.toLowerCase() === 'play') {
          const button1 = document.getElementById('play');
          button1.click();
          speak('okay music play');
        }         
	      
if (lastResult.toLowerCase() === 'piche') {
          const button1 = document.getElementById('rewindButton');
          button1.click();
          speak('okay music 5 second back');
        } 
if (lastResult.toLowerCase() === 'rewind') {
          const button1 = document.getElementById('rewindButton');
          button1.click();
          speak('okay music 5 second back');
        }   
	      
	      
	 if (lastResult.toLowerCase() === 'aage') {
          const button1 = document.getElementById('fastForwardButton');
          button1.click();
          speak('okay music 20 second forward');
        }
if (lastResult.toLowerCase() === 'forward') {
          const button1 = document.getElementById('fastForwardButton');
          button1.click();
          speak('okay music 20 second forward');
        }
	    
	     if (lastResult.toLowerCase() === 'gana') {
          const button1 = document.getElementById('pahilagana');
          button1.click();
          speak('okay i am downloading song');
        }     
	      
	    if (lastResult.toLowerCase() === 'mp3 download') {
          const button1 = document.getElementById('pahilagana');
          button1.click();
          speak('okay mp3 downloading');
        }    
	
	if (lastResult.toLowerCase() === 'audio') {
          const button1 = document.getElementById('pahilagana');
          button1.click();
          speak('okay i clicked on audio');
        }
	if (lastResult.toLowerCase() === 'audio download') {
          const button1 = document.getElementById('pahilagana');
          button1.click();
          speak('okay i clicked on audio for download');
        }

	if (lastResult.toLowerCase() === 'download audio') {
          const button1 = document.getElementById('pahilagana');
          button1.click();
          speak('okay i clicked on audio for download');
        }		
	else if (lastResult.toLowerCase() === 'mp4') {
          const button2 = document.getElementById('vivekmasona');
          button2.click();
          speak('okay i clicked on mp4.');
        }
		
else if (lastResult.toLowerCase() === 'dowload mp4') {
          const button2 = document.getElementById('vivekmasona');
          button2.click();
          speak('okay i clicked on mp4.');
        }

	else if (lastResult.toLowerCase() === 'mp4 download') {
          const button2 = document.getElementById('vivekmasona');
          button2.click();
          speak('okay i clicked on mp4.');
        }    
		else if (lastResult.toLowerCase() === 'video download') {
          const button2 = document.getElementById('vivekmasona');
          button2.click();
          speak('okay i clicked on video for download.');
        }
	else if (lastResult.toLowerCase() === 'download video') {
          const button2 = document.getElementById('vivekmasona');
          button2.click();
          speak('okay i clicked on video for download.');
        }		

	  else if (lastResult.toLowerCase() === 'video') {
          const button2 = document.getElementById('vivekmasona');
          button2.click();
          speak('okay i clicked on video.');
        }    
      };

      // Function to add text-to-speech
      function speak(text) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
      }
    
