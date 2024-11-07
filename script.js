// //your JS code here. If required.



function get(){
	const url=`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de`;
	fetch(url)
	.then((response)=>response.json())
	.then(data=>{
		const res=document.getElementById("weatherData");
		res.innerHTML=`Current weather in London: ${data.weather[0].main}`;
	})
}
const button=document.getElementById("btn");
button.addEventListener("click",get);
