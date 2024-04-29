document.addEventListener("DOMContentLoaded", function () {
    let listaCtf = {
        data: [
            { nombreCTF: "Lo que sea", plataforma: "DeliciousHack", SO: "Linux" },
            { nombreCTF: "Cualquier cosa", plataforma: "DeliciousHack", SO: "Windows" },
            { nombreCTF: "Máquina 1", plataforma: "HackTheBox", SO: "Linux" },
            { nombreCTF: "Máquina 2", plataforma: "TryHackMe", SO: "Windows" },
            { nombreCTF: "Máquina 3", plataforma: "VulnHub", SO: "Linux" },
            { nombreCTF: "Máquina 4", plataforma: "DockerLabs", SO: "Windows" },
            { nombreCTF: "Máquina 5", plataforma: "HackTheBox", SO: "Linux" },
            { nombreCTF: "Máquina 6", plataforma: "HackMyVM", SO: "Linux" },
            { nombreCTF: "Máquina 7", plataforma: "VulNyx", SO: "Windows" },
            { nombreCTF: "Máquina 8", plataforma: "HackMyVM", SO: "Linux" }
        ]
    };

    // Function to create ctf cards
    function createctfCard(ctf) {
        let card = document.createElement("div");
        card.classList.add("card", ctf.plataforma, ctf.SO);

        let container = document.createElement("div");
        container.classList.add("container");

        let name = document.createElement("h5");
        name.classList.add("ctf-name");
        name.innerText = ctf.nombreCTF.toUpperCase();
        container.appendChild(name);

        let plataforma = document.createElement("h6");
        plataforma.classList.add("plataforma-name");
        plataforma.innerText = "Plataforma: " + (ctf.plataforma === 'all' ? 'Todas las plataformas' : ctf.plataforma);
        container.appendChild(plataforma);

        let so = document.createElement("h6");
        so.classList.add("so-name");
        so.innerText = "Sistema Operativo: " + (ctf.SO === 'all' ? 'Todos los SO' : ctf.SO);
        container.appendChild(so);

        card.appendChild(container);
        document.getElementById("ctf-list").appendChild(card);
    }

    // Add an event listener for the checkboxes
    let checkboxes = document.querySelectorAll(".select-options input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            let selectedPlatforms = Array.from(document.querySelectorAll("#platform-filter-options input[type='checkbox']:checked"), (checkbox) => checkbox.value);
            let selectedSOs = Array.from(document.querySelectorAll("#so-filter-options input[type='checkbox']:checked"), (checkbox) => checkbox.value);
            filterCtf(selectedPlatforms, selectedSOs);
        });
    });

    // Function to handle search
    function handleSearch() {
        let searchInput = document.getElementById("search-input").value.toLowerCase();
        let elements = document.querySelectorAll(".ctf-name");
        elements.forEach((element) => {
            let card = element.closest(".card");
            if (element.innerText.toLowerCase().includes(searchInput)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    }

    // Search input event listener
    document.getElementById("search-input").addEventListener("input", handleSearch);

    // Initialize the page
    listaCtf.data.forEach((ctf) => createctfCard(ctf));
});
