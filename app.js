
const URL = "https://catfact.ninja/fact";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");


const getFacts = async () => {
    
    factPara.style.opacity = "0.5";
    btn.innerText = "Loading...";
    btn.disabled = true;

    try {
        let response = await fetch(URL);
        let data = await response.json();
        
     
        factPara.innerText = data.fact;
    } catch (error) {
        factPara.innerText = "Oops! Could not reach the cat kingdom. Try again.";
    } finally {
     
        factPara.style.opacity = "1";
        btn.innerText = "Get a Fact";
        btn.disabled = false;
    }
};

btn.addEventListener("click", getFacts);