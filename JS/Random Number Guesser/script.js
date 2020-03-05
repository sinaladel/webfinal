// document.getElementById('myButton').addEventListener('click',evt => {
//     let data = document.getElementById('myInputBox').nodeValue;
// })
const btn = document.getElementById('myButton');
const btnClicked = evt => {
    let rand = Math.floor((Math.random() * 100) + 1);
    console.log(${rand})
}

btn.addEventListener('click', btnClicked);