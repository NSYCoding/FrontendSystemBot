function fetchAPI(api) {
    if (!api) return;
    fetch(`http://${api}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        const statusMessage = document.getElementById("statusMessage");
        if (statusMessage) {
            statusMessage.textContent = "API fetched successfully!";
        } else {
            statusMessage.textContent = "API did not fetch successfully!";
        }
        for (const key in data) {
            const value = data[key];
            console.log(`Key: ${key}, Value: ${value}`);
        }
    })
    .catch(error => {
        console.error("Error fetching API:", error);
    });
}

function init() {
    const serverAPI = document.getElementById("serverAPI");
    const savedAPI = localStorage.getItem("serverAPI") || "";
    serverAPI.value = savedAPI;

    if (savedAPI) {
        fetchAPI(savedAPI);
    }

    serverAPI.addEventListener("input", (event) => {
        const api = event.target.value;
        localStorage.setItem("serverAPI", api);
        fetchAPI(api);
    });
}

document.addEventListener("DOMContentLoaded", init);