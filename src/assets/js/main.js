document.addEventListener('DOMContentLoaded', function () {
    // конечная дата
    const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 34, 12);
    // id таймера
    let timerId = null;
    // склонение числительных
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;


      let daysLabel = document.querySelector('.timer__label--days');
      let hoursLabel = document.querySelector('.timer__label--hours');
      let minutesLabel = document.querySelector('.timer__label--minutes');
      let secondsLabel = document.querySelector('.timer__label--seconds');

      daysLabel.innerHTML = declensionNum(days, ['день', 'дня', 'дней']);
      hoursLabel.innerHTML = declensionNum(hours, ['час', 'часа', 'часов']);
      minutesLabel.innerHTML = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      secondsLabel.innerHTML = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);

      $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
      $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
      $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
    }
    // получаем элементы, содержащие компоненты даты
    const $days = document.querySelector('.timer__day-count');
    const $hours = document.querySelector('.timer__hours-count');
    const $minutes = document.querySelector('.timer__minutes-count');
    const $seconds = document.querySelector('.timer__seconds-count');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });


  let inputsPhone = document.querySelectorAll('input[name = "phone"]');

  if (inputsPhone.length > 0) {
      inputsPhone.forEach( (input) => {
          IMask(input, {mask: '+{7}( 000 ) 000 - 00 - 00'});
      })
  }
let fInputs = document.querySelectorAll('.form__tinput');

fInputs.forEach( (input) => {
  input.oninput = function(){
    if ( this.value.length > 0 ){
      this.classList.add('inputed');
    } else {
      this.classList.remove('inputed');
    }
  }
} )


document.addEventListener("DOMContentLoaded", function(){

  let video = document.querySelector('video');

  if ( document.body.scrollWidth  > 1024 ){
    video.src = "assets/img/preview-a.mp4";
  } else if( document.body.scrollWidth  < 1024  && document.body.scrollWidth  > 580  ){
    video.src = "assets/img/preview-a-md.mp4";
  } else {
    video.src = "assets/img/preview-a-sm.mp4";
  }
  
});


let errMsg = document.querySelectorAll('.err-msg');


errMsg.forEach( (msg) => {
  msg.onclick = function(){
    let wrap = this.closest('.form__iwrap');

    wrap.classList.remove('err-wrap');

    wrap.querySelector('input').focus();

  }
});


let form = document.querySelector('.form');


form.onsubmit = function(event){
  event.preventDefault();
  
  let err = 0;


  let nameField = this.querySelector('input[name = "name"]');
  let nameValue = nameField.value;

  if (nameValue.length < 1){
    let wrap = nameField.closest('.form__iwrap');
    wrap.querySelector('.err-text').innerHTML = "Поле не может быть пустым";
    wrap.classList.add('err-wrap');
    err++;
  }

  let phoneField = this.querySelector('input[name = "phone"]');
  let phoneValue = phoneField.value;

  if (phoneValue.length < 1){
    let wrap = phoneField.closest('.form__iwrap');
    wrap.querySelector('.err-text').innerHTML = "Поле не может быть пустым";
    wrap.classList.add('err-wrap');
    err++;
  }


  if (phoneValue.length < 23 && phoneValue.length > 0){
    let wrap = phoneField.closest('.form__iwrap');
    wrap.querySelector('.err-text').innerHTML = "Не корректное значение";
    wrap.classList.add('err-wrap');
    err++;
  }



  let emailField = this.querySelector('input[name = "email"]');
  let emailValue = emailField.value;
  if ((emailValue.includes('.') === false  || emailValue.includes('@') === false || emailValue.length < 6)){
    let wrap = emailField.closest('.form__iwrap');
    wrap.querySelector('.err-text').innerHTML = "Не корректное значение";
    wrap.classList.add('err-wrap');
    err++;
  }
  if (emailValue.length < 1){
    let wrap = emailField.closest('.form__iwrap');
    wrap.querySelector('.err-text').innerHTML = "Поле не может быть пустым";
    wrap.classList.add('err-wrap');
    err++;
  }

  if (err === 0){
    fetch(phpScript, { 
      method: "POST",
      body: data_body,   
      headers:{"content-type": "application/x-www-form-urlencoded"} 
      })
      
    .then( (response) => {
            if (response.status !== 200) {           
                return Promise.reject();
                
            }   
        


    console.log("Почта отправлена");
    inputs.forEach ( (input) => {
        input.value = '';
    });
    return response.text()
    })
    .then(i => console.log(i))
    .catch(() => console.log('ошибка')); 
    }
  
  
}

let soundBtn = document.querySelector('.sound-btn');

soundBtn.onclick = function(){
  let video = document.querySelector('video');
  if (this.getAttribute('data-value') === "1" ){

    this.setAttribute('data-value', '0');
    video.muted = true;

    
  } else{
    this.setAttribute('data-value', '1');
    video.muted = false;
  }


  
}