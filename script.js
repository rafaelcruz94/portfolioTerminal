'user strict';

const maximize = document.getElementById('bt2');
const minimize = document.getElementById('bt1');
const exit = document.getElementById('bt3');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const quit = document.getElementById('quit');
const bt4Quit= document.getElementById('bt4');

//AutoWrite

setTimeout(function() {
document.getElementById('line1').innerHTML = `
<p>Rafael Cruz<br>
Copyright (C) 1994-2021</p>
<p class="align">C:\\Users\\Rafa></p>
<p id="delay1" class="align">whoami</p>`}, 700);

setTimeout(function() {
document.getElementById('line2').innerHTML = `
<p class="tab">Name: Rafael Cruz<br>
Availability: Available<br>
<a href="https://www.linkedin.com/in/rafael-cruz-20aa3b211/" target="_blank">LinkedIn</a><br>
<a href="https://github.com/rafaelcruz94" target="_blank">GitHub</a><br>
</p>`}, 1400);

setTimeout(function() {
document.getElementById('line3').innerHTML = `
<p class="align">C:\\Users\\Rafa></p>
<p id="delay1" class="align">dir /b "\\proj"</p>`}, 1700);
          
setTimeout(function() {
    document.getElementById('line4').innerHTML = `
    <p class="tab"><a id="one" href="#">Weather App</a><br>
    <a id="two" href="#">Contact Us/Form Validation</a><br>
    <a id="three" href="#">Exchange Rate App</a><br>
    <a id="four" href="#">Clock/Stopwatch</a><br></p>`

    //Modal
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const modal_container1 = document.getElementById('modal_container1');
    const modal_container2 = document.getElementById('modal_container2');
    const modal_container3 = document.getElementById('modal_container3');
    const modal_container4 = document.getElementById('modal_container4');
    const close = document.getElementById('close');
    const close2 = document.getElementById('close2');
    const close3 = document.getElementById('close3');
    const close4 = document.getElementById('close4');

    one.addEventListener('click', () => {
        modal_container1.classList.add('show');
    });

    two.addEventListener('click', () => {
        modal_container2.classList.add('show');
    });

    three.addEventListener('click', () => {
        modal_container3.classList.add('show');
    });
    
    four.addEventListener('click', () => {
        modal_container4.classList.add('show');
    });
    
    close.addEventListener('click', () => {
        modal_container1.classList.remove('show');
    }); 

    close2.addEventListener('click', () => {
        modal_container2.classList.remove('show');
    });

    close3.addEventListener('click', () => {
        modal_container3.classList.remove('show');
    });

    close4.addEventListener('click', () => {
        modal_container4.classList.remove('show');
    });
}, 2600);

setTimeout(function() {
document.getElementById('line5').innerHTML = `
<p class="align">C:\\Users\\Rafa><span>_</span></p>`}, 2600);


//Exit
function goAway() {
    document.getElementById('container').hidden = true;
    document.getElementById('quit').hidden = true;
    setTimeout(window.close, 1);
};

//Exit popup
window.addEventListener('mouseup',function(event){
    if(event.target != quit && event.target.parentNode != quit){
        document.getElementById('container').setAttribute('class', 'container disableBlur');
        quit.hidden = true;
    }
});  

//Event Listener
maximize.addEventListener('click', maximized => document.getElementById('container').style.transform = "scale(1.2)");
minimize.addEventListener('click', minimized => document.getElementById('container').style.transform = "scale(1)");
exit.addEventListener('click', closeWindow => {
    document.getElementById('quit').removeAttribute('hidden');
    document.getElementById('container').setAttribute('class', 'container enableBlur');
});
no.addEventListener('click', stay => {
    document.getElementById('quit').setAttribute('hidden', false);
    document.getElementById('container').setAttribute('class', 'container disableBlur');
});
yes.addEventListener('click', goAway);
bt4Quit.addEventListener('click', closePopup => {
    quit.setAttribute('hidden', false);
    document.getElementById('container').setAttribute('class', 'container disableBlur');
});
