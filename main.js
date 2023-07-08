var sr=window.webkitSpeechRecognition
var rec=new sr()
function start(){
    document.getElementById("textbox").innerHTML=""
    rec.start()
}
rec.onresult=function(e){
    console.log(e)
    var myWords=e.results[0][0].transcript
    document.getElementById("textbox").innerHTML=myWords
    if(myWords== "take my selfie"){
        speak()
    }
    

}

function speak(){
    var api=window.speechSynthesis;
    sd="Taking your Selfie in 5 seconds"
    bolo=new SpeechSynthesisUtterance(sd)
    api.speak(bolo)
    Webcam.attach(camera)
    setTimeout(function()  {
        takepic();
        save();
    }, 5000);
}
function save(){
    l=document.getElementById("link")
    i=document.getElementById("selfie_img").src
    l.href=i
    l.click()

}
Webcam.set({width:360,height:250,image_format:"png",png_quality:90});
camera=document.getElementById("camera");
function takepic(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id ="selfie_img" src="'+data_uri+'">'
    })
}
