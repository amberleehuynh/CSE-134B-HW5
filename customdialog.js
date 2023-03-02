//outputTag variable is a reference to the HTML <output> tag where we output our values for confirm/prompt.
let outputDialog;

// Alert button
function customAlert() {
  const alertDialog = document.getElementById('alert-dialog');
  outputDialog.innerHTML = '';
  alertDialog.showModal();
}

// Confirm button
function customConfirm() {
  const confirmDialog = document.getElementById('confirm-dialog');
  outputDialog.innerHTML = '';
  confirmDialog.showModal();

  const okButton = document.getElementById('ok-button');
  const cancelButton = document.getElementById('cancel-button');

  // If user clicked Ok
  okButton.addEventListener('click', () => {
    outputDialog.textContent = `Confirm result: ${okButton.value}`;
  });

  // If user clicked Cancel
  cancelButton.addEventListener('click', () => {
    outputDialog.textContent = `Confirm result: ${cancelButton.value}`;
  });
}

// Prompt button
function customPrompt() {
  const promptDialog = document.getElementById('prompt-dialog');
  outputDialog.innerHTML = '';
  promptDialog.showModal();

  const okButton = document.getElementById('ok-button');
  const cancelButton = document.getElementById('cancel-button');

  // If user clicked Ok
  okButton.addEventListener('click', () => {
  outputDialog.textContent = `Result: ${okButton.value}`;
  });
  
  // If user clicked Cancel
  cancelButton.addEventListener('click', () => {
  outputDialog.textContent = `Result: ${cancelButton.value}`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  outputDialog = document.getElementById('output-dialog');

  const alertButton = document.getElementById('alert-button');
  alertButton.addEventListener('click', customAlert);

  const confirmButton = document.getElementById('confirm-button');
  confirmButton.addEventListener('click', customConfirm);

  const promptButton = document.getElementById('prompt-button');
  promptButton.addEventListener('click', customPrompt);
})