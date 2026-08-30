function showPage(pageId, button) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });


    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }


    // Remove active state from navigation
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.classList.remove("active");
    });


    // Add active state
    if (button) {
        button.classList.add("active");
    }


    // Update page title
    const titles = {

        dashboard: "Dashboard",

        users: "User Management",

        workers: "Worker Verification",

        services: "Service Management",

        bookings: "Booking Management",

        complaints: "Complaints & Disputes",

        payments: "Payments",

        fraud: "Fraud & Safety",

        ai: "AI Decisions",

        reports: "Reports & Analytics",

        settings: "Settings"

    };


    document.getElementById("pageTitle").textContent =
        titles[pageId] || "Dashboard";


    document.getElementById("pageSubtitle").textContent =
        getSubtitle(pageId);

}


function getSubtitle(pageId) {

    const subtitles = {

        dashboard:
            "AI-powered platform monitoring and governance",

        users:
            "Manage customers, workers and platform access",

        workers:
            "Verify and manage service professionals",

        services:
            "Manage services and pricing rules",

        bookings:
            "Monitor platform bookings and service status",

        complaints:
            "Review complaints and disputes",

        payments:
            "Monitor payments, refunds and invoices",

        fraud:
            "Monitor suspicious activity and safety signals",

        ai:
            "Monitor AI decisions and recommendations",

        reports:
            "View platform performance and analytics",

        settings:
            "Configure platform and AI administration"

    };


    return subtitles[pageId] || "";
}


function reviewWorker(workerName) {

    alert(
        "AI Verification Review\n\n" +
        "Worker: " + workerName +
        "\n\n" +
        "AI has completed the initial assessment." +
        "\nHuman review can be requested for uncertain cases."
    );

}