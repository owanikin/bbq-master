let emailCollectorForm = document.getElementById("Email-Collector")
emailCollectorForm.addEventListener("submit", e => {
    event.preventDefault();
    let ourFormData = new FormData(e.target)
    let userFirstName = ourFormData.get("firstName")
    let userEmail = ourFormData.get("emailAddress")

    let updatedHtmlContent = `
    <h2>Congratulations, ${userFirstName}!</h2>
    <p>You're on your way to becoming a BBQ Master!</p>
    <p class="fine-print">You will get weekly BBQ tips sent to your email: ${userEmail}</p>
    `

    let updateContentContainer = document.getElementById("Main-Content");
    updateContentContainer.innerHTML = updatedHtmlContent
})