document.addEventListener("DOMContentLoaded", function () {
    let listaCtf = {
        data: [
            { nombreCTF: "Lo que sea", plataforma: "DeliciousHack" },
            { nombreCTF: "Cualquier cosa", plataforma: "DeliciousHack" },
            { nombreCTF: "Máquina 1", plataforma: "HackTheBox" },
            { nombreCTF: "Máquina 2", plataforma: "TryHackMe" },
            { nombreCTF: "Máquina 3", plataforma: "VulnHub" },
            { nombreCTF: "Máquina 4", plataforma: "DockerLabs" },
            { nombreCTF: "Máquina 5", plataforma: "HackTheBox" },
            { nombreCTF: "Máquina 6", plataforma: "HackMyVM" },
            { nombreCTF: "Máquina 7", plataforma: "VulNyx" },
            { nombreCTF: "Máquina 8", plataforma: "HackMyVM" },
            { nombreCTF: "Máquina 1", plataforma: "HackTheBox" },
            { nombreCTF: "Máquina 2", plataforma: "TryHackMe" },
            { nombreCTF: "Máquina 3", plataforma: "VulnHub" },
            { nombreCTF: "Máquina 4", plataforma: "DockerLabs" },
            { nombreCTF: "Máquina 5", plataforma: "HackTheBox" },
            { nombreCTF: "Máquina 6", plataforma: "HackMyVM" },
            { nombreCTF: "Máquina 7", plataforma: "VulNyx" },
            { nombreCTF: "Máquina 8", plataforma: "HackMyVM" },
            { nombreCTF: "Máquina 1", plataforma: "HackTheBox" },
            { nombreCTF: "Máquina 2", plataforma: "TryHackMe" },
            { nombreCTF: "Máquina 3", plataforma: "VulnHub" },
            { nombreCTF: "Máquina 4", plataforma: "DockerLabs" },
            { nombreCTF: "Máquina 5", plataforma: "HackTheBox" },
            { nombreCTF: "Máquina 6", plataforma: "HackMyVM" },
            { nombreCTF: "Máquina 7", plataforma: "VulNyx" },
            { nombreCTF: "Máquina 8", plataforma: "HackMyVM" }
        ]
    };

    // Function to create ctf cards
    function createctfCard(ctf) {
        let card = document.createElement("div");
        card.classList.add("card", ctf.plataforma);

        let container = document.createElement("div");
        container.classList.add("container");

        let name = document.createElement("h5");
        name.classList.add("ctf-name");
        name.innerText = ctf.nombreCTF.toUpperCase();
        container.appendChild(name);

        let plataforma = document.createElement("h6");
        plataforma.classList.add("plataforma-name");
        plataforma.innerText = "Plataforma: " + ctf.plataforma;
        container.appendChild(plataforma);

        card.appendChild(container);
        document.getElementById("ctf-list").appendChild(card);
    }

    // Function to filter listaCtf by plataforma
    function filterPlataforma(values) {
        let elements = document.querySelectorAll(".card");
        elements.forEach((element) => {
            let shouldShow = values.includes("all") || values.some((value) => element.classList.contains(value));
            if (shouldShow) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        });
    }

    // Add an event listener for the checkboxes
    let checkboxes = document.querySelectorAll(".select-options input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function () {
            let selectedValues = Array.from(document.querySelectorAll(".select-options input[type='checkbox']:checked"), (checkbox) => checkbox.value);
            filterPlataforma(selectedValues);
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
