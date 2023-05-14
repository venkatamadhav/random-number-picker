function Randomize(){
    let mininput = Number(document.getElementById("min").value);
    let maxinput = Number(document.getElementById("max").value);
    let finaloutput = document.getElementById("output");
    if (mininput && maxinput) {
    let random = Math.floor(Math.random()*(maxinput-mininput+1))+mininput;
    console.log(random);
    finaloutput.innerHTML = random;
    }
};