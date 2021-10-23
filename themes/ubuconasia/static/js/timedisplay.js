window.addEventListener('load', ()=>{
    let elements = document.getElementsByClassName("timedisplay");
    for (let element of elements) {
        let display = element.getAttribute("display");
        let timeSource = element.innerHTML;
        let date = new Date(timeSource);
        if (date.toString() == "Invalid Date") {
          let dateStrBlock = timeSource.replace(' ', 'T').split(' ');
          alert(dateStrBlock.length + ' | ' + dateStrBlock[0] + ' | ' + dateStrBlock[1]);
          if (dateStrBlock.length == 2) {
            date = new Date(moment.tz(dateStrBlock[0], dateStrBlock[1]).toDate());
          } else {
            date = new Date(moment(dateStrBlock[0]).toDate());
          }
        }
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