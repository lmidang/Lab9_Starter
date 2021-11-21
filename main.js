// main.js
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function checkInput(firstNum, secondNum) {
    if (isNaN(firstNum) || isNaN(secondNum)) {
        throw new ValidationError("Not a number input");
    }
}

window.TrackJS && TrackJS.install({ 
    token: "32598d2f1ed24eaeb327c8aa476bb97b"
    // for more configuration options, see https://docs.trackjs.com
});

let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;

  try {
      checkInput(firstNum, secondNum);
  } catch (err) {
    alert("Input is not a number");
    return;
  }

  try {
    let output = document.querySelector('output');
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (err) {
    alert("output doesn't exist");
    let secondInput = document.createElement('output');
    document.querySelector("fieldset").appendChild(secondInput);
  } finally {
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish

// Console log button
errorBtns[0].addEventListener('click', e => {
    console.log("This is a console log.");
});

// Console error button
errorBtns[1].addEventListener('click', e => {
    console.error("This is a console error");
});

// Console count button
errorBtns[2].addEventListener('click', e => {
    console.count('count');
});

// Console warning button
errorBtns[3].addEventListener('click', e => {
    console.warn('This is a console warning');
});

// Console assert button
errorBtns[4].addEventListener('click', e => {
    const x = 5;
    const y = 3;
    const reason = 'x is expected to be less than y';
    console.assert(x < y, {x, y, reason});
});

// Console clear button
errorBtns[5].addEventListener('click', e => {
    console.clear();
});

// Console dir button
errorBtns[6].addEventListener('click', e => {
    console.dir(document.head);
});

// Console dirxml button 
errorBtns[7].addEventListener('click', e => {
    console.dirxml(document);
});

// Console group start button
errorBtns[8].addEventListener('click', e => {
    const label = 'group label';
    console.group(label);
    console.info('label');
});

// Console group end button
errorBtns[9].addEventListener('click', e => {
    console.groupEnd();
});

// Console table button
errorBtns[10].addEventListener('click', e => {
    console.table([
        {
            first: 'Jotaro',
            last: 'Kujo',
            stand: 'Star Platinum'
        },
        {
            first: 'Jolyne',
            last: 'Kujo'
        }    
    ]);
});

// Start timer button
errorBtns[11].addEventListener('click', e => {
    console.time("jojo");
});

// End timer button
errorBtns[12].addEventListener('click', e => {
    console.timeEnd("jojo");
});

// Console trace button
errorBtns[13].addEventListener('click', e => {
   const first = () => { second(); };
   const second = () => { third(); };
   const third = () => { fourth(); };
   const fourth = () => { console.trace(); };
   first(); 
});

// Global error button
errorBtns[14].addEventListener('click', e => {
    //TrackJS.track('Testing TrackJS!');
    if (window.onerror) {
        console.error("Caught global error");
    }
});