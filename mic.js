
  let audioContext = null;
  let audioSourceNode = null;
  let isMicrophoneOn = false;

  async function deviceChange(event) {
    console.log('device changed');
    try {
      if (isMicrophoneOn) {
        if (audioContext) {
          audioSourceNode.disconnect(audioContext.destination);
          await audioContext.close();
          console.log('Microphone turned off');
          isMicrophoneOn = false;
          // Update the button style for "off" state
          document.getElementById('toggleButton').classList.remove('on');
        }
      } else {
        let stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        console.log(stream);
        let audioTracks = stream.getAudioTracks();
        console.log(`Audio Tracks: ${audioTracks.length}`);
        audioContext = new AudioContext();
        audioSourceNode = audioContext.createMediaStreamSource(stream);
        audioSourceNode.connect(audioContext.destination);
        console.log('Microphone turned on');
        isMicrophoneOn = true;
        // Update the button style for "on" state
        document.getElementById('toggleButton').classList.add('on');
      }
    } catch (exception) {
      console.log('No microphone permission.');
    }
  }

  navigator.mediaDevices.ondevicechange = deviceChange;

  // Function to toggle the microphone on/off
  function toggleMicrophone() {
    deviceChange();
  }

