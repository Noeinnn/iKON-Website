// Jason Nguyen u3117696
// JavaScript Document


// Enter Button
// Hides the entry content and reveals the main body of content. 
// Also changes the background image through changing the class of the body.
$("#enterButton").click( function() {	// Adding a click event listener to the ID enterButton
	 $( ".wrapper" ).slideToggle();	// Revealing content through the jQuery slideToggle
	 $("body").addClass( "backgroundBody" );	// Adding a class to change the content of Body tag
	 $( ".entry" ).fadeOut();	// Using the jQuery fadeOut to hide the entry page
});

// Scroll Function to change the background at certain points on the page.
$(document).bind( "scroll", function() {	// bind anon to scroll event
    var scrollTop = $(document).scrollTop();	// get the value of scrollTop
    if ( scrollTop <= 600 ) {	// wait until the user has scrolled 600 down before running output
		$( "nav" ).fadeOut();		// Hiding the navigation through jQuery fadeOut as it is not necessary at this viewport
		 $(".backgroundBody").css( "background-size", "75%" );		// changing the background size when the user has reached this part of the page through CSS
    }
       if ( scrollTop > 600 ) {
		  $( "nav" ).fadeIn();	// Revealing the navigation (back to top button) when the user has scrolled past the first section
		   $(".backgroundBody").css( "background-size", "50%" );
    }
	   if ( scrollTop > 1500 ) {
		   $(".backgroundBody").css( "background-size", "25%" );
    }
});



// Row 1: Who Are They?

// Adding click event listener to the ID of firstShow and when clicked it runs
// the anonymous function to hide itself and reveal the content hidden in #section1
$( "#firstShow" ).click( function() {	// Using an anonymous function as the function is only used for this specific part of the website.
	$( "#firstShow" ).hide();	// Using jQuery hide to hide the content of the ID firstShow
	$( "#section1" ).fadeIn( "slow" );	// Using fadeIn with the string of "slow" in order to prepare the following image. 
	$( "#imageChange1" ).css( "object-position", "50% 70%" );	// Moving the position of the image through CSS to make it animate when it is opened
});

$( "#section1" ).click( function() {
	$( "#section1" ).hide();
	$( "#firstShow" ).fadeIn( "slow" );
	$( "#imageChange1" ).css( "object-position", "50% 0%" );
});



// Row 2: 2015 Debut

// Adding click event listenter to the class the function toggles the class on the elements
// to 'hideContent' which only has "display: none" inside this then hides the elements and
// reveals the content through changing the class of what was clicked.
$( ".section2" ).click ( function() {
	$(this).toggleClass( "section2Click" )	// Selecting "this" in order to simplify the java rather than using the previous selector of ".section2"
	$( "#section2Show, .section2Content, .section3, .section4" ).toggleClass( "hideContent" );	// Hiding multiple elements through toggling the class
});																																			// The hideContent class has only the CSS styling of "display: none;"

$( ".section3" ).click ( function() {
	$(this).toggleClass( "section3Click" )
	$( "#section3Show, .section3Content, .section2, .section4" ).toggleClass( "hideContent" );
});

$( ".section4" ).click ( function() {
	$(this).toggleClass( "section4Click" )
	$( "#section4Show, .section4Content, .section2, .section3" ).toggleClass( "hideContent" );
});




// Row 4 : Members

// Adding click event listener to each photo card which reveals the content of
// the ID specified for each photo card. It also hides all the surrounding photo
// cards through a function hideMembers() which is explained further down.
$( "#member1" ).click ( function() {
	$( "#showMember1" ).fadeIn( "slow" );
	hideMembers();	// Calling the function hideMembers()
});

$( "#showMember1" ).click ( function() {
	showMembers();	// Calling the function showMembers()
	$( "#showMember1" ).hide();	
});

$( "#member2" ).click ( function() {
	$( "#showMember2" ).fadeIn( "slow" );
	hideMembers();
});

$( "#showMember2" ).click ( function() {
	showMembers();
	$( "#showMember2" ).hide();	
});

$( "#member3" ).click ( function() {
	$( "#showMember3" ).fadeIn( "slow" );
	hideMembers();
});

$( "#showMember3" ).click ( function() {
	showMembers();
	$( "#showMember3" ).hide();	
});


$( "#member4" ).click ( function() {
	$( "#showMember4" ).fadeIn( "slow" );
	hideMembers();
});

$( "#showMember4" ).click ( function() {
	showMembers();
	$( "#showMember4" ).hide();	
});


$( "#member5" ).click ( function() {
	$( "#showMember5" ).fadeIn( "slow" );
	hideMembers();
});

$( "#showMember5" ).click ( function() {
	showMembers();
	$( "#showMember5" ).hide();	
});

$( "#member6" ).click ( function() {
	$( "#showMember6" ).fadeIn( "slow" );
	hideMembers();
});

$( "#showMember6" ).click ( function() {
	showMembers();
	$( "#showMember6" ).hide();	
});


$( "#member7" ).click ( function() {
	$( "#showMember7" ).fadeIn( "slow" );
	hideMembers();
});

$( "#showMember7" ).click ( function() {
	showMembers();
	$( "#showMember7" ).hide();	
});


// hideMembers()
// Hides all the member cards in order to show the content of what was clicked
// Parameters: none
// Returns: none
function hideMembers() {
	$("#member1, #member2, #member3, #member4, #member5, #member6, #member7").hide(); 
}

// showMembers()
// Reveals all the member cards in order to hide the content of what was clicked
// Parameters: none
// Returns: none
function showMembers() {
	$("#member1, #member2, #member3, #member4, #member5, #member6, #member7").fadeIn( "600" ); 
}



// Row 5 : Achievements

// Adding a mouseenter and mouseleave event listener to the elements of #section7
// the function drops the opacity when the mouse enters and returns it to the normal when left
$( "#section7, #section7 p, #section7 h2" ).mouseenter(function() {	
	$( "#section7 img" ).css( "opacity", "0.5" );	
});

$( "#section7, #section7 p, #section7 h2" ).mouseleave(function() {
	$( "#section7 img" ).css( "opacity", "1" );
});



// SCRIPTS FROM ONLINE :

// Script received from http://gfycat.com/about
// Used for compressing the gifs and hosting them on Gyfcat for improved quality
 (function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://assets.gfycat.com/js/gfyajax-0.517d.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));



// Charts from Google
// Received from https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart
// Used to create the line chart in the "Statistics: Pre Debut vs Debut" section
// Comments to show my understanding and what I have added in. Previously no comments were added in the original script from Google.

google.load('visualization', '1', {packages: ['corechart', 'line']});
google.setOnLoadCallback(drawBasic);	// Calling the function drawBasic() when the page has loaded

function drawBasic() {

      var data = new google.visualization.DataTable();	// Creating a new variable
      data.addColumn('number', 'X');	// Adding in columns to suit my content
      data.addColumn('number', 'iKon Market Growth');

      data.addRows([
        [2013, 38028],   [2013.5, 144927 ],   [2014, 182293],   [2014.5, 182293],   [2015, 818840],   [2015.5, 1079381],   [2015.8, 1264825],	
      
      ]);	// Adding in data to the chart itself

      var options = {	
        hAxis: {title: 'Years'},	// Altering the titles for the charts
        vAxis: {title: 'Song Sales'}, 
			width: 600,	// Setting the width and heights
			height: 500,			
			animation: {	// Adding an animation to the chart when it is first loaded
			duration: 1000,
			easing: 'out',
			startup: true,	
		},
		colors: ['#AB0C0C'],	// Changing the color of the line in the chart
      };	
      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));	// Drawing the chart where the ID of "chart_div" is
      chart.draw(data, options);	// Drawing the chart with data specified in the variables from above
	  }



// Chart receveived from Google Charts
// https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart#fullhtml
// Used to create the pie chart in the "Statistics: Pre Debut vs Debut" section

      google.load("visualization", "1", {packages:["corechart"]});	  
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Song', 'Sales'],
          ['Airplane', 208792],
          ['Rhythm-Ta', 299160],
          ['My Type', 681991],
          ['Wait For Me', 67366],
          ['Climax',  76899],
          ['Just Another Boy', 38028]
        ]);

        var options = {
          title: 'iKON Sale Distribution',
          pieHole: 0.4,
		  width: 600,
		  height: 500,
		animation: {
			duration: 2000,
			easing: 'out',
			startup: true,
			}
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }




// Particles.js Script from http://vincentgarreau.com/particles.js/
// Used for creating the animated particle effect featured on the entry page.
particlesJS.load('particles-js', function() {
  console.log('callback - particles.js config loaded');
});


particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 100,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


