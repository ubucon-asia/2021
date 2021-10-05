window.addEventListener('load', ()=>{
    let elements = document.getElementsByClassName("timedisplay");
    for (let element of elements) {
        let display = element.getAttribute("display");
        let timeSource = element.innerHTML;
        console.log(timeSource)
        let date = new Date(timeSource);
        switch(display){
        	case "date":
          	element.innerHTML = date.toLocaleDateString();
            break;
          case "time":
          	element.innerHTML = date.toLocaleTimeString();
            break;
          default:
          	element.innerHTML = date.toLocaleString();
            break;
        }
        
    }
}) 