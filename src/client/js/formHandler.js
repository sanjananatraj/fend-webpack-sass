// function handleSubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field
//     let formText = document.getElementById('name').value

//     Client.checkForName(formText)

//     console.log("::: Form Submitted :::")
//     fetch('http://localhost:8081/test')
//     .then(res => {
//         return res.json()
//     })
//     .then(function(data) {
//         document.getElementById('results').innerHTML = data.message
//     })
// }

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const key = 'f7109e7cf4bd6667584b2b3bd939a860';

function handleSubmit(event) {
    event.preventDefault()

    let zip = document.getElementById('name').value
    console.log("ZIP CODE: ", zip)
    console.log("::: Form Submitted :::")

    const url = `${baseURL}${zip}&appid=${key}`;

    fetch(url)
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        console.log(data);
        document.getElementById('results').innerHTML += data.name + "<br>";
        document.getElementById('results').innerHTML += data.main.temp + "<br>";
    })
}

export { handleSubmit }
