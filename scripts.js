    
  // function for lanuchpad to earth, and nav to launchpad

    // Document ready shorthand statement
    $(function() {
        // Select link by id and add click event
        $('#launch').click(function() {
  
          // Animate Scroll to #bottom
          $('html,body').animate({
            scrollTop: $("#earth").offset().top }, // Tell it to scroll to the top #bottom
            7000 // How long scroll will take in milliseconds
          );
  
          // Prevent default behavior of link
          return false;
        });
      });

      $(function() {
        $('#launch-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#launch").offset().top }, 
            7000 
          );
          return false;
        });
      });

// functions for planet to planet, they are all the same, just different IDs 

      $(function() {
        $('#neptune-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#neptune").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#uranus-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#uranus").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#saturn-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#saturn").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#jupiter-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#jupiter").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#mars-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#mars").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#earth-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#earth").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#venus-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#venus").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#mercury-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#mercury").offset().top }, 
            1000 
          );
          return false;
        });
      });

      $(function() {
        $('#sun-btn').click(function() {
          $('html,body').animate({
            scrollTop: $("#sun").offset().top }, 
            1000 
          );
          return false;
        });
      });

// earth population 

/*
* World Populution Counter - By JavaScript Kit (http://www.javascriptkit.com)
* Based on code by Adam Brown
* This notice MUST stay intact for use
* Visit JavaScript Kit (http://www.javascriptkit.com) for this script and more
*/

function worldpopulation(){
	startdate = new Date()
	now(startdate.getYear(),startdate.getMonth(),startdate.getDate(),startdate.getHours(),startdate.getMinutes(),startdate.getSeconds())
}


function ChangeValue(number,pv){
	numberstring =""
	var j=0 
	var i=0
	while (number > 1)
	 { 
	    numberstring = (Math.round(number-0.5) % 10) + numberstring
	    number= number / 10
	    j++
	    if (number > 1 && j==3) { 
			numberstring = "," + numberstring 
			j=0}
	    i++
	 }

	 numberstring=numberstring

if (pv==1) {document.getElementById("worldpop").innerHTML=numberstring }
}

function now(year,month,date,hours,minutes,seconds){       
startdatum = new Date(year,month,date,hours,minutes,seconds)

var now = 5600000000.0
var now2 = 5690000000.0
var groeipercentage = (now2 - now) / now *100
var groeiperseconde = (now * (groeipercentage/100))/365.0/24.0/60.0/60.0 
nu = new Date ()                
schuldstartdatum = new Date (96,1,1)                            
secondenoppagina = (nu.getTime() - startdatum.getTime())/1000
totaleschuld= (nu.getTime() - schuldstartdatum.getTime())/1000*groeiperseconde + now
ChangeValue(totaleschuld,1);

timerID = setTimeout("now(startdatum.getYear(),startdatum.getMonth(),startdatum.getDate(),startdatum.getHours(),startdatum.getMinutes(),startdatum.getSeconds())",200)
}

// day of the week for the landing page

function dayofweek() {
  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  document.getElementById("dayoweek").innerHTML = n;
}

// fade in / out nav after scrolling 3000 px from the bottom 

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() > $(document).height() - 3000) {
    $('nav').fadeOut(1000);
  } 
  else {
    $('nav').fadeIn(1000);
  }
});

// Loads page on bottom launch pad anchor tag 

$(function() {
  $(document).scrollTop( $("#launch-div").offset().top );  
});


// navigation
