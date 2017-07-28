const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function showResults(values) {
    await sleep(500); // simulate server latency
    var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(values,null,2));
    var a = document.createElement('a');
    a.href = uri;
    document.body.appendChild(a);
    a.innerHTML = "Right-click and choose 'save as...'";
    //document.getElementById("main").appendChild(a);

});