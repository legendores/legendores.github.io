function joinMessage() {
    navigator.clipboard.writeText(options["Server IP"])
        .then(() => {
            alert('Copied the IP of the server to your clipboard you can now paste it using: CTRL + V.');
        })
}

function downloadPack() {
    window.open(options["Texture Pack Link"], "_blank");
}

function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
}