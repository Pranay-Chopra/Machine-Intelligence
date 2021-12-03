const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
// recognition.interimResults = true;
const btn = document.getElementById("btn");
const result = document.getElementById("result");

recognition.onstart = function() {
  console.log("You can speak now!!!");
}

recognition.onresult = function(event) {
  var text = event.results[0][0].transcript;
  console.log(text);
  // document.getElementById("result").innerHTML = text
  text = text.toLowerCase();
  read(text);
}

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('cyclone'))
    speech.text = "In meteorology, a cyclone is a large scale air mass that rotates around a strong center of low atmospheric pressure.";
    else if(text.includes('cyclones'))
    speech.text = "In meteorology, a cyclone is a large scale air mass that rotates around a strong center of low atmospheric pressure.";
    else if(text.includes('disaster'))
    speech.text = "Disaster means a catastrophe, mishap, calamity or grave occurrence affecting any area from natural and manmade causes, which results in substantial loss of life and human suffering.";
    else if(text.includes('disasters'))
    speech.text = "Disaster means a catastrophe, mishap, calamity or grave occurrence affecting any area from natural and manmade causes, which results in substantial loss of life and human suffering.";

    else if(text.includes('tornado'))
    speech.text = 'A tornado is a violently rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud.';
    else if(text.includes('tornadoes'))
    speech.text = 'A tornado is a violently rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud.';

    else if(text.includes('earthquake'))
    speech.text = "An earthquake is the shaking of the surface of the Earth resulting from a sudden release of energy in the Earth's lithosphere that creates seismic waves.";
    else if(text.includes('earthquakes'))
    speech.text = "An earthquake is the shaking of the surface of the Earth resulting from a sudden release of energy in the Earth's lithosphere that creates seismic waves";


    else if(text.includes('drought'))
    speech.text = "A drought is an event of prolonged shortages in the water supply, whether atmospheric, surface water or ground water.";
    else if(text.includes('droughts'))
    speech.text = "A drought is an event of prolonged shortages in the water supply, whether atmospheric, surface water or ground water.";
    else if(text.includes('draught'))
    speech.text = "A drought is an event of prolonged shortages in the water supply, whether atmospheric, surface water or ground water.";
    else if(text.includes('draughts'))
    speech.text = "A drought is an event of prolonged shortages in the water supply, whether atmospheric, surface water or ground water.";

    else if(text.includes('flood'))
    speech.text = 'A flood is an overflow of water that submerges land that is usually dry. In the sense of "flowing water", the word may also be applied to the inflow of the tide.';
    else if(text.includes('floods'))
    speech.text = 'A flood is an overflow of water that submerges land that is usually dry. In the sense of "flowing water", the word may also be applied to the inflow of the tide.';

    else if(text.includes('landslides'))
    speech.text = "The term landslide or landslip refers to several forms of mass wasting that may include a wide range of ground movements, such as rockfalls, deep-seated slope failures, mudflows, and debris flows.";
    else if(text.includes('landslide'))
    speech.text = "The term landslide or landslip refers to several forms of mass wasting that may include a wide range of ground movements, such as rockfalls, deep-seated slope failures, mudflows, and debris flows.";

    else if(text.includes('thunderstrom'))
    speech.text = "A thunderstorm or an electrical storm or a lightning storm, is a storm characterized by the presence of lightning and its acoustic effect on the Earth's atmosphere, known as thunder";
    else if(text.includes('thunderstroms'))
    speech.text = "A thunderstorm or an electrical storm or a lightning storm, is a storm characterized by the presence of lightning and its acoustic effect on the Earth's atmosphere, known as thunder.";

    else if(text.includes('tsunami'))
    speech.text = "A tsunami 'harbour wave', is a series of waves in a water body caused by the displacement of a large volume of water, generally in an ocean or a large lake.";
    else if(text.includes('tsunamis'))
    speech.text = "A tsunami 'harbour wave', is a series of waves in a water body caused by the displacement of a large volume of water, generally in an ocean or a large lake.";

    else if(text.includes('wildfire'))
    speech.text = "A wildfire, bushfire, wildland fire or rural fire is an unplanned, unwanted, uncontrolled fire in an area of combustible vegetation starting in rural areas and urban areas.";
    else if(text.includes('wildfires'))
    speech.text = "A wildfire, bushfire, wildland fire or rural fire is an unplanned, unwanted, uncontrolled fire in an area of combustible vegetation starting in rural areas and urban areas.";

    else{
    speech.text = "Sorry, I didn't get that, Please try searching for common terminologies like tornado or earthquake"
    }
    // if (text.includes('whatsapp')){
    //   window.open("https://web.whatsapp.com")
    // }
    // else if (text.includes('youtube')){
    //   window.open("https://youtube.com")
    // }
    window.speechSynthesis.speak(speech);
}