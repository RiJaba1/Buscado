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
        } else if (!isAllSelected && !anyOtherSelected) {
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
                // También selecciona automáticamente "Todos los SO"
                document.getElementById('so-filter-options').querySelector('.all-option input[type="checkbox"]').checked = true;
            } else {
                // Cuando se hace clic en cualquier otra opción, desmarcar "Todas las plataformas"
                AllOption.checked = false;
            }

            // Actualizar el estado del checkbox "Todas las plataformas"
            updateAllOption();

            const selectedPlatforms = Array.from(document.querySelectorAll('#platform-filter-options input[type="checkbox"]:checked'), (checkbox) => checkbox.value);
            const selectedSOs = Array.from(document.querySelectorAll('#so-filter-options input[type="checkbox"]:checked'), (checkbox) => checkbox.value);
            filterCtf(selectedPlatforms, selectedSOs);
        });
    });
});

function filterCtf(platforms, SOs) {
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        let platform = element.classList.contains('hide') ? '' : element.classList[1];
        let SO = element.classList.contains('hide') ? '' : element.classList[2];
        let shouldShow = (platforms.includes("all") || platforms.includes(platform)) && (SOs.includes("all") || SOs.includes(SO));
        if (shouldShow) {
            element.classList.remove("hide");
        } else {
            element.classList.add("hide");
        }
    });
}
