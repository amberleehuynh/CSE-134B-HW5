// Code to make button-count work is inside class ButtonCount
class ButtonCount extends HTMLElement{
  constructor() {
    super();

    // Shadow root
    const shadowDOM = this.attachShadow({mode: 'open'});

    // Button element
    const button = document.createElement('button');
    button.innerText = 'Clicked count: ';

    // Num element
    const num = document.createElement('span');
    num.innerText = '0';
    button.appendChild(num);

    button.addEventListener('click', () => {
      let clicks = parseInt(num.innerText);
      num.innerText = clicks + 1;
    })
    // Append elements to shadow root
    shadowDOM.appendChild(button);
  }
}

// Element button-count is defined in the custom elements 
customElements.define('button-count', ButtonCount);