//To fetch data from data.json
async function getData() {
    const myData = await fetch('http://127.0.0.1:3000/data.json');
    const info = await myData.json();
    //let title = JSON.stringify(info);
    console.log(info);
    return info;
};
getData();

//To change content's period to either daily, weekly or monthly
document.getElementById('daily').onclick = daily();
document.getElementById('weekly').onclick = weekly();
document.getElementById('monthly').onclick = monthly();

//Functions that will display contents corresponding to period
function daily() {}
function weekly() {}
function monthly() {}