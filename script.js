function showSection(section) {

    // Hide all sections
    document.getElementById("jobInfo").classList.add("hidden");
    document.getElementById("earningsSection").classList.add("hidden");
    document.getElementById("scheduleSection").classList.add("hidden");
    document.getElementById("profileSection").classList.add("hidden");
    document.getElementById("reviewsSection").classList.add("hidden");
    document.getElementById("supportSection").classList.add("hidden");

    // Show the selected section
    if (section === "jobInfo") {
        document.getElementById("jobInfo").classList.remove("hidden");
    }

    if (section === "earnings") {
        document.getElementById("earningsSection").classList.remove("hidden");
    }

    if (section === "schedule") {
        document.getElementById("scheduleSection").classList.remove("hidden");
    }

    if (section === "profile") {
        document.getElementById("profileSection").classList.remove("hidden");
    }

    if (section === "reviews") {
        document.getElementById("reviewsSection").classList.remove("hidden");
    }

    if (section === "support") {
        document.getElementById("supportSection").classList.remove("hidden");
    }
}


function toggleStatus() {

    const statusText = document.getElementById("statusText");
    const statusButton = document.getElementById("statusButton");

    if (statusText.classList.contains("online")) {

        statusText.classList.remove("online");
        statusText.classList.add("offline");

        statusText.innerHTML = "● Offline";
        statusButton.innerHTML = "Go Online";

    } else {

        statusText.classList.remove("offline");
        statusText.classList.add("online");

        statusText.innerHTML = "● Online";
        statusButton.innerHTML = "Go Offline";
    }
}


function acceptJob(jobName) {
    alert("You accepted: " + jobName);
}


function logout() {
    alert("Logout clicked!");
}


function contactSupport() {
    alert("Support team will contact you.");
}


function showSettings() {
    alert("Settings page will be added later.");
}