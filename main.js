var SpeechRecognition = window.webkitSpeechRecognition;

var Content;

var recognition = new SpeechRecognition();

function start() {

 recognition.start();

}

recognition.onresult = function(event) {

 console.log(event);

 var Content = event.results[0][0].transcript;

 console.log(Content);


 if(Content == "selfie") {

  console.log("Taking Selfi");

  speak();

 }

}

function speak() {


 var synth = window.speechSynthesis;

 speak_data = "Taking your next Selfie in 5 seconds";

 var utterThis = new SpeechSynthesisUtterance(speak_data);

 synth.speak(utterThis);

 

 setTimeout(function(){

  img_id = "Selfie1";

  take_snapshot();

  speak_data = "Taking Selfi in 5 seconds";

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

 },5000);

 setTimeout(function(){

  img_id = "Selfie2";

  take_snapshot();

  speak_data = "Taking Selfi in 5 seconds";

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

 },10000);

 setTimeout(function(){

  img_id = "Selfie3";

  take_snapshot();

  speak_data = "Taking Selfi in 5 seconds";

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);

 },15000);

 }
 
Webcam.attach('#camera');

camera = document.getElementById("camera");

Webcam.set({

 width: 500,

 height: 400,

 image_format: 'png',

 jpeg_quality: 90

});

function take_snapshot() {

 Webcam.snap(function(data_uri) {

  if(img_id == "Selfie1"){

   document.getElementById("result1").innerHTML = "<img id = 'selfi1' src="+data_uri+">";

  }

  if(img_id == "Selfie2"){

   document.getElementById("result2").innerHTML = "<img id = 'selfi2' src="+data_uri+">";

  }

  if(img_id == "Selfie3"){

   document.getElementById("result3").innerHTML = "<img id = 'selfi3' src="+data_uri+">";

  }

 });

}
