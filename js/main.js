// Función para manejar la lógica de selección/deselección de "Todas las opciones"
function updateAllOption(optionsList, allOption) {
    const anySelected = optionsList.some(option => option.checked);
    allOption.checked = !anySelected;
}

// Función para inicializar la lógica de selección/deselección de "Todas las opciones"
function initAllOption(optionsList, allOption) {
    optionsList.forEach(option => {
        option.addEventListener('click', () => {
            updateAllOption(optionsList, allOption);
        });
    });
}

const platformOptions = document.querySelectorAll('#platform-filter-options input[type="checkbox"]');
const platformAllOption = platformOptions[0];
const platformOtherOptions = Array.from(platformOptions).slice(1);

initAllOption(platformOtherOptions, platformAllOption);

const SOOptions = document.querySelectorAll('#so-filter-options input[type="checkbox"]');
const SOAllOption = SOOptions[0];
const SOOtherOptions = Array.from(SOOptions).slice(1);

initAllOption(SOOtherOptions, SOAllOption);

// Event listener para la lista de plataformas
platformOptions.forEach(option => {
    option.addEventListener('click', () => {
        updateAllOption(platformOtherOptions, platformAllOption);
        const selectedPlatforms = Array.from(document.querySelectorAll('#platform-filter-options input[type="checkbox"]:checked'), (checkbox) => checkbox.value);
        const selectedSOs = Array.from(document.querySelectorAll('#so-filter-options input[type="checkbox"]:checked'), (checkbox) => checkbox.value);
        filterCtf(selectedPlatforms, selectedSOs);
    });
});

// Event listener para la lista de SO
SOOptions.forEach(option => {
    option.addEventListener('click', () => {
        updateAllOption(SOOtherOptions, SOAllOption);
        const selectedPlatforms = Array.from(document.querySelectorAll('#platform-filter-options input[type="checkbox"]:checked'), (checkbox) => checkbox.value);
        const selectedSOs = Array.from(document.querySelectorAll('#so-filter-options input[type="checkbox"]:checked'), (checkbox) => checkbox.value);
        filterCtf(selectedPlatforms, selectedSOs);
    });
});

// Función de filtro
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
