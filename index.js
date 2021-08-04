document.querySelector("button").addEventListener("click", generateActivity)

function generateActivity() {
    fetch("https://www.boredapi.com/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("activity").textContent = data.activity
        })
}