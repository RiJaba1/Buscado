const selectContainers = document.querySelectorAll('.select-container');
const selectOptions = document.querySelectorAll('.select-options');

selectContainers.forEach((selectContainer, index) => {
  const options = selectOptions[index].querySelectorAll('.option');
  const AllOption = options[0].querySelector('input[type="checkbox"]');
  const otherOptions = Array.from(options).slice(1);

  selectContainer.addEventListener('click', () => {
    selectOptions[index].classList.toggle('active');
  });

  function updateAllOption() {
    const isAllSelected = AllOption.checked;
    const anyOtherSelected = otherOptions.some(option => option.querySelector('input[type="checkbox"]').checked);

    if (isAllSelected && anyOtherSelected) {
      AllOption.checked = false;
    } else if (!isAllSelected &&!anyOtherSelected) {
      AllOption.checked = true;
    }
  }

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const optionValue = option.querySelector('input[type="checkbox"]').value;

      if (optionValue === 'all') {
        // Cuando se hace clic en "Todas las plataformas", desmarcar todas las demás
        otherOptions.forEach((otherOption) => {
          otherOption.querySelector('input[type="checkbox"]').checked = false;
        });
      } else {
        // Cuando se hace clic en cualquier otra opción, desmarcar "Todas las plataformas"
        AllOption.checked = false;
      }

      // Actualizar el estado del checkbox "Todas las plataformas"
      updateAllOption();

      const selectedOptions = Array.from(document.querySelectorAll('.select-options input[type="checkbox"]:checked'), (checkbox) => checkbox.value);
      filterPlataforma(selectedOptions);
    });
  });
});