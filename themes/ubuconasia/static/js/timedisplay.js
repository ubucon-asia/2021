window.addEventListener('load', ()=>{
    let elements = document.getElementsByClassName("timedisplay");
    for (let element of elements) {
        let display = element.getAttribute("display");
        let timeSource = element.innerHTML;
        let date = new Date(timeSource);
        if (!(date instanceof Date && !isNaN(date))) {
            let _changed = null;
            let is_timezone_text = function (zone) {
                let m = /^([+-])([0-9]{2}):?([0-9]{2})$/gm.exec(zone.trim());
                if (m == null) {
                  return true;
                }
                
                _changed = m[1] + m[2] + ':' + m[3];
                return false;
            };
            let dateStrBlock = timeSource.replace(' ', 'T').split(' ');
            if (dateStrBlock.length == 2 && is_timezone_text(dateStrBlock[1])) {
                date = new Date(moment.tz(dateStrBlock[0], dateStrBlock[1]).toDate());
            } else if (_changed !== null) {
                dateStrBlock[1] = _changed;
            }
              
            if (!(date instanceof Date && !isNaN(date))) {
                date = new Date(moment(dateStrBlock.join('')).toDate());
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