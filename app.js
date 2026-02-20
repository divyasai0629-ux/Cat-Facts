const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    // Add a simple fade-out effect
    factPara.style.opacity = 0;
    
    try {
        let response = await fetch(URL);
        let data = await response.json();
        
        // Update text and fade back in
        setTimeout(() => {
            factPara.innerText = data.fact;
            factPara.style.opacity = 1;
            factPara.style.transition = "opacity 0.5s ease";
        }, 200);
        
    } catch (error) {
        factPara.innerText = "Oops! Failed to fetch a cat fact. Try again.";
        factPara.style.opacity = 1;
    }
};

btn.addEventListener("click", getFacts);