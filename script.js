document.getElementById("admissionForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form from submitting normally

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let course = document.getElementById("course").value;

    // Simple validation 
    if (name && email && dob && course) {
        alert("Admission form submitted successfully!");
        // Further processing logic (e.g., sending data to a server)
    } else {
        alert("Please fill out all fields.")
    }
});
