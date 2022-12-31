async function getData(file) {
    const outView = document.getElementById('text')
    const myData = await fetch(file);
    const info = await myData.json();
    let title = JSON.stringify(info[1].title);
    console.log(title);
    outView.innerHTML = title;
}
getData('http://127.0.0.1:3000/time-tracking-dashboard-main/data.json');

if(typeof(window) === 'object') {
    console.log("Running in browser environment");
} else {
    console.log('Its running in a non-browser env.');
}