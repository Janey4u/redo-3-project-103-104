
Webcam.set ({
width:350,
height:300,
image_format : 'png',
png_quality:90


});
 camera = document.getElementById("camera");

 webcam.attach('#camera');
 mouse
        <hr>
        keyboard
        <hr>
        mouse 
        <hr>
        papper
        <hr>

 function take_snapshot()
 {
webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

});

 }
 console.log('m15 version:', m15,version);
 classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/kxOGV6YtH/model.json',modelLoaded);
 