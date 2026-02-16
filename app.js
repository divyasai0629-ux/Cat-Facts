const URL = "https://catfact.ninja/fact";

const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getfacts = async () => {
    let response =await fetch(URL);
    console.log(response);
    let data = await response.json();
    factpara.innerText = data.fact;

};
btn.addEventListener("click", getfacts);

// using promies

// function getfacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         }).then((data) => {
//             console.log(data);
//             factpara.innerText = data.fact;
//          }
//         )
// }