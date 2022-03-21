prediction_1 = "";
prediction_2 = "";
Webcam.set({
width: 350,
height: 300, 
image_format: 'png',

png_quality: 90,

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot() {

    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured_img" src="' + data_uri + '">';

    });

}

console.log('ML5 Version:  ' , ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1yV74xRam/model.json', modelLoaded);

function modelLoaded() {

    console.log('Model Is Loaded!')
}

function check() {

    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);

}

function gotResult(error, results) {
    
    if (error) {

console.error(error);
    }
    else {
 console.log(results);
 document.getElementById("result_emotion_name").innerHTML= results[0].label;
 document.getElementById("result_emotion_name2").innerHTML= results[1].label; 
 
 if (results[0].label=="happy") {

    document.getElementById("update_emoji").innerHTML = "&#128522;";
 }

 if (results[0].label=="sleep") {

    document.getElementById("update_emoji").innerHTML = "&#128564;";
 }

 if (results[0].label=="Angry") {

    document.getElementById("update_emoji").innerHTML = "&#128545;";
 }

 if (results[0].label=="frightened") {

    document.getElementById("update_emoji").innerHTML = "&#58381;";
 }

 if (results[0].label=="Sad") {

    document.getElementById("update_emoji").innerHTML = "&#128532;";
 }

 
    }
}


if (results[1].label=="happy") {

    document.getElementById("update_emoji").innerHTML = "&#128522;";
 }

 if (results[1].label=="sleep") {

    document.getElementById("update_emoji").innerHTML = "&#128564;";
 }

 if (results[1].label=="Angry") {

    document.getElementById("update_emoji").innerHTML = "&#128545;";
 }

 if (results[1].label=="frightened") {

    document.getElementById("update_emoji").innerHTML = "&#58381;";
 }

 if (results[1].label=="Sad") {

    document.getElementById("update_emoji").innerHTML = "&#128532;";
 }

 
    