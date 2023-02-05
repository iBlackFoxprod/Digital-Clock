const hourEl = document.getElementById("hour")
const mintueEl = document.getElementById("minutes")
const secondEl = document.getElementById("seconds")
const ampmEL = document.getElementById("ampm")

function updateClock(){
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s = new Date().getSeconds();
      let ampm = "AM"

      if(hour > 12){
            h = h -12;
            ampm = "PM";
      }

      h = h<10 ? "0"+h : h;
      m = m<10 ? "0"+m : m;
      s = s<10 ? "0"+s : s;


      hourEl.innerText = h;
      mintueEl.innerText = m;
      secondEl.innerText = s;
      ampmEL, (innerText = ampm);
      setTimeout(()=>{
            updateClock();
      },1000)
}

updateClock();