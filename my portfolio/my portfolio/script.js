let svg = document.querySelector("#svg");
//Create a link element
var link = document.createElement('link');
//Set the attributes for the link element
link.rel = 'icon';
link.type = 'svg';
link.href = 'coding.svg'; //The URL of the image
//Append the link element to the head section of the document
document.head.appendChild(link);

svg.addEventListener("click",()=>{
    document.body.classList.toggle("black");
    if(document.body.classList.contains("black"))
    {
        svg.src="sun.svg"
    }
    else{
        svg.src="moon.svg"
    }
})
