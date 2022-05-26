window.onload = function () {

var chartHeight = new CanvasJS.Chart("chartHeightContainer", {
	theme:"light2",
	animationEnabled: true,
    animationDuration: 3000,
	title:{
		text: "Altitude data"
	}, 
    exportEnabled: true,
    zoomEnabled: true,
    toolbar: {     
        itemBackgroundColor: "#fff",
        itemBackgroundColorOnHover: "#0060df",
        buttonBorderColor: "#0060df",
        buttonBorderThickness: 2,
        fontColor: "#000",
        fontColorOnHover: "#fff"
    },
	axisY:[
	{
		title: "Altitude",
		lineColor: "#023e8a",
		tickColor: "#023e8a",
		labelFontColor: "#023e8a",
		titleFontColor: "#023e8a",
		includeZero: true,
		suffix: "m",   
        gridThickness: 1
	}],
	toolTip: {
		shared: "true"
	},
	legend:{
		cursor:"pointer",
		itemclick: toggleDataSeries
	},
	data: [{
		type: "line",
		name: "Altitude",
        color: "#023e8a",
		visible: true,
		showInLegend: true,
		yValueFormatString: "##.00m",
		axisYIndex: 1,
		name: "Altitude",
		dataPoints: [
            {label: "1520245", y: 0.00},
            {label: "1520749", y: 0.00},
            {label: "1521254", y: 0.00},
            {label: "1521758", y: 0.00},
            {label: "1522262", y: 11.88847658},
            {label: "1522767", y: 22.42417476},
            {label: "1523271", y: 29.87097451},
            {label: "1523775", y: 68.86511245},
            {label: "1524280", y: 101.2493},
            {label: "1524784", y: 100.2996},
            {label: "1525288", y: 148.1581198},
            {label: "1525793", y: 259.7656108},
            {label: "1526297", y: 374.3450536},
            {label: "1526802", y: 488.4514278},
            {label: "1527306", y: 574.8660175},
            {label: "1527810", y: 622.4048225},
            {label: "1528315", y: 674.6442357},
            {label: "1528819", y: 751.7815541},
            {label: "1529323", y: 790.2524912},
            {label: "1529828", y: 874.7880127},
            {label: "1530332", y: 897.009587},
            {label: "1530836", y: 952.2414795},
            {label: "1531341", y: 992.0406207},
            {label: "1531845", y: 1031.676238},
            {label: "1532349", y: 1075.740715},
            {label: "1532854", y: 1113.227535},
            {label: "1533358", y: 1152.387436},
            {label: "1533863", y: 1320.13825},
            {label: "1534367", y: 1348.331451},
            {label: "1534375", y: 1372.975485},
            {label: "1534871", y: 1406.585196},
            {label: "1535880", y: 1437.663924},
            {label: "1536384", y: 1461.631621},
            {label: "1536889", y: 1480.738074},
            {label: "1537393", y: 1493.349295},
            {label: "1537897", y: 1500.760979},
            {label: "1538402", y: 1504.03342},
            {label: "1538906", y: 1502.502321},
            {label: "1539410", y: 1496.188999},
            {label: "1539915", y: 1485.952618},
            {label: "1540419", y: 1472.158103},
            {label: "1540924", y: 1453.267862}
		]
	}]
});
chartHeight.render();

function toggleDataSeries(e) {
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
		e.dataSeries.visible = false;
	} else {
		e.dataSeries.visible = true;
	}
	chartHeight.render();
}

}