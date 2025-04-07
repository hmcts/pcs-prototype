//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
    // Add JavaScript here
});

// Handle manual address toggle
document.addEventListener("DOMContentLoaded", function () {
    const toggleLink = document.getElementById("manual-address-toggle");
    const manualAddressSection = document.getElementById(
        "manual-address-section"
    );

    if (toggleLink && manualAddressSection) {
        toggleLink.addEventListener("click", function (e) {
            e.preventDefault();
            const isHidden = manualAddressSection.style.display === "none";
            manualAddressSection.style.display = isHidden ? "block" : "none";
            toggleLink.textContent = isHidden
                ? "Hide manual address"
                : "Enter address manually";
        });
    }
});
