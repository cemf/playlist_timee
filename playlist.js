(function() {

var timeSeconds = 0;

var timestampDivList = document.querySelectorAll(".ytd-thumbnail-overlay-time-status-renderer");


for(var i = 0; i < timestampDivList.length; i++) {
	
	var timestampDiv = timestampDivList[i];

	var timeStr = timestampDiv.innerHTML
    
	var timeParts = timeStr.split(":");
    

	var seconds = (timeParts[0] * 60) + parseInt(timeParts[1]);
    if(Number.isInteger(seconds)){ 
	    timeSeconds += seconds;
    }
    else{
   
    }
}

var hours = (timeSeconds / 60) / 60;
var minutes = (timeSeconds / 60) % 60;
var seconds = (timeSeconds % 60); 

var result = parseInt(hours) + ":" + parseInt(minutes) + ":" + parseInt(seconds);

alert(result);

})();
