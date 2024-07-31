const darkmode = document.getElementById("theme-button");
const form = document.getElementById('sign-petition');

const validateForm = () => {
  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;

  
  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
  return containsErrors;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  // prevent the form from submitting

  // get the name and hometown values from the form
  const name = form.elements['name'].value;
  const hometown = form.elements['hometown'].value;

  // create a new paragraph element
  const signature = document.createElement('p');

  if (validateForm()) {
    return;
  }

  // set the text content of the paragraph to include the name and hometown
  signature.textContent = `🖊️ ${name} from ${hometown} supports this.`;

  // find the signatures section on the page and append the new signature
  const signaturesSection = document.querySelector('.signatures');
  signaturesSection.appendChild(signature);

  // reset the form
  form.reset();
});

const toggleDarkMode = () => {
  document.body.classList.toggle("darkmode");
}

darkmode.addEventListener('click', toggleDarkMode);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

const revealableContainers =
  document.querySelectorAll('.revealable');


const reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

function reduceMotion() {
  // Logic to reduce motion on the website
  // This can include reducing animations, transitions, etc

  for (let i = 0; i < revealableContainers.length; i++) {
        revealableContainers[i].classList.remove('revealable');
    }
  document.body.style.transition = 'none';
  document.body.style.animation = 'none';
  alert('Motion has been reduced.');
}

// Add event listener to the button
document.getElementById('reduceMotion').addEventListener('click', reduceMotion);


