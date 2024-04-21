const selectContainer = document.querySelector('.select-container');
const selectOptions = document.querySelector('.select-options');
const options = selectOptions.querySelectorAll('.option');
const allOption = document.getElementById('all-option');
const otherOptions = Array.from(options).filter(option => option.querySelector('input[type="checkbox"]').value !== 'all');

selectContainer.addEventListener('click', () => {
  selectOptions.classList.toggle('active');
});

function updateAllOption() {
  const isAllSelected = allOption.checked;
  const anyOtherSelected = otherOptions.some(option => option.querySelector('input[type="checkbox"]').checked);

  if (isAllSelected && anyOtherSelected) {
    allOption.checked = false;
  } else if (!isAllSelected && !anyOtherSelected) {
    allOption.checked = true;
  }
}

options.forEach(option => {
  option.addEventListener('click', () => {
    const optionValue = option.querySelector('input[type="checkbox"]').value;

    if (optionValue === 'all') {
      // When "Todas las plataformas" is clicked, uncheck all others
      otherOptions.forEach(otherOption => {
        otherOption.querySelector('input[type="checkbox"]').checked = false;
      });
    } else {
      // When any other option is clicked, uncheck "Todas las plataformas"
      allOption.checked = false;
    }

    // Update the state of "Todas las plataformas" checkbox
    updateAllOption();

    const selectedOptions = Array.from(document.querySelectorAll('.select-options input[type="checkbox"]:checked'), (checkbox) => checkbox.value);
    filterPlataforma(selectedOptions);
  });
});
