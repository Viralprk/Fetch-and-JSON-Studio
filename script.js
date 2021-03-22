// TODO: add code here

window.addEventListener("load", function () {
    alert("1");
    //HTML function start
    function buildHtml(obj) {
        alert("infun");
        let str = `
        <div class="astronaut">
            <div class="bio">
                <h3>${obj.firstName + obj.lastName}</h3>
                    <ul>
                        <li>Hours in space: ${obj.hoursInSpace}</li>
                        <li>Active: ${obj.active}</li>
                        <li>Skills: ${obj.skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${obj.picture}">
        </div>`;
        return str;
    }
    //HTML function end 
    alert("2");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            alert("3");
            const destination = document.getElementById("container");

            for (index in json) {
                destination.innerHTML += buildHtml(json[index]);
            }
        });
    });

    alert("4");
});


