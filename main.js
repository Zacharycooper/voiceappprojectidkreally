var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
window.webkitSpeechRecognition;

function start() {
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    if(content == "selfie"){
        speak();
    }
}       

camera = document.getElementById('camera');
Webcam.set({
    width: 500,
    height:400,
    image_format : 'png',
    png_quality: 90 
});

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = 'Taking your selfie in 5 seconds';
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}