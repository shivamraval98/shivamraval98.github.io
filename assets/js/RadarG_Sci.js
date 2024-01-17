var w = document.getElementById('chart_sci').clientWidth / 2;
var	h = w;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['2018','2021','2023'];

//Data
var d1 = [
		  [
			{axis:"WirelessComm",value:0.6},
			{axis:"MachineLearning",value:0.40},
			{axis:"BioMedicalAI",value:0.1},
			{axis:"DeepLearning",value:0.3},
			{axis:"CompScience",value:0.65},
			{axis:"GenAI",value:0.0}
		  ],[
			{axis:"WirelessComm",value:0.9},
			{axis:"MachineLearning",value:0.85},
			{axis:"BioMedicalAI",value:0.65},
			{axis:"DeepLearning",value:0.8},
			{axis:"CompScience",value:0.85},
			{axis:"GenAI",value:0.0}  
		  ],[
			{axis:"WirelessComm",value:0.3},
			{axis:"MachineLearning",value:0.85},
			{axis:"BioMedicalAI",value:0.85},
			{axis:"DeepLearning",value:0.9},
			{axis:"CompScience",value:0.8},
			{axis:"GenAI",value:0.8}
		  ]
		];

var d2 = [
		  [
			{axis:"WirelessComm",value:0},
			{axis:"MachineLearning",value:0},
			{axis:"BioMedicalAI",value:0},
			{axis:"DeepLearning",value:0},
			{axis:"CompScience",value:0},
			{axis:"GenAI",value:0}
		  ],
		  [
			{axis:"WirelessComm",value:0},
			{axis:"MachineLearning",value:0},
			{axis:"BioMedicalAI",value:0},
			{axis:"DeepLearning",value:0},
			{axis:"CompScience",value:0},
			{axis:"GenAI",value:0}
		  ],
		  [
			{axis:"WirelessComm",value:0},
			{axis:"MachineLearning",value:0},
			{axis:"BioMedicalAI",value:0},
			{axis:"DeepLearning",value:0},
			{axis:"CompScience",value:0},
			{axis:"GenAI",value:0}
		  ]	  
		 ]

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 1,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart_sci", d2, mycfg);
 
//We will build a basic function to handle window resizing.
function resize_radar() {
    mycfg.w = document.getElementById('chart_sci').clientWidth / 2;
    mycfg.h = w;
	RadarChart.draw("#chart_sci", d1, mycfg);
}

//Call our resize function if the window size is changed.
window.addEventListener("resize", resize_radar);

$(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#chart_sci').position().top ){
		RadarChart.draw("#chart_sci", d1, mycfg);		
    }
});
