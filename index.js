window.onload = function () {
  const clockContainer = document.querySelector(".clock");

  setInterval(() => {
    new Clock(clockContainer);
  }, 1000);
};

class Clock {
  constructor(html) {
    this.date = new Date();
    this.htmlObject = html;

    this.time = this.getTime();
    this.appendTime();
  }

  appendTime() {
     let childrens = this.htmlObject.children;
     childrens[0].textContent = this.time.hours.charAt(0);
     childrens[1].textContent = this.time.hours.charAt(1);
     childrens[3].textContent = this.time.minutes.charAt(0);
     childrens[4].textContent = this.time.minutes.charAt(1);
     childrens[6].textContent = this.time.seconds.charAt(0);
     childrens[7].textContent = this.time.seconds.charAt(1);
  }

  getTime() {
    let time = {
      hours: this.date.getHours(),
      minutes: this.date.getMinutes(),
      seconds: this.date.getSeconds(),
    };
    for (const key in time) {
      time[key] = this.convertTime(time[key]);
    }

    return time;
  }

  convertTime(time) {
    let converted = time;
    if (time < 10) {
      converted = "0" + time;
    }
    return converted.toString();
  }
}
