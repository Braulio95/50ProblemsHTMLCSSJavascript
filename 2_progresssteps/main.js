let actualStep = 0;

const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

// Función para actualizar la visualización de los pasos
const updateSteps = () => {
  steps.forEach((step, index) => {
    if (index <= actualStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
};

// Función para actualizar la visualización de las líneas
const updateLines = () => {
  lines.forEach((line, index) => {
    if (index < actualStep) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });
};

const updateButtons = () => {
  prevButton.disabled = actualStep === 0;
  nextButton.disabled = actualStep === steps.length - 1;
};

const increaseCounter = () => {
  if (actualStep < steps.length - 1) {
    actualStep++;
    updateSteps();
    updateLines();
    updateButtons();
  }
};

const decreaseCounter = () => {
  if (actualStep > 0) {
    actualStep--;
    updateSteps();
    updateLines();
    updateButtons();
  }
};

nextButton.addEventListener("click", increaseCounter);
prevButton.addEventListener("click", decreaseCounter);

// Actualizar la visualización inicial
updateSteps();
updateLines();
updateButtons();
