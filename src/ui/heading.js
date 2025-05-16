const headingContainer = document.querySelector(".heading");

const appName = document.createElement("p");
appName.textContent = "Toki";

headingContainer.append(appName);

appName.addEventListener("click", () => {
    location.reload();
})