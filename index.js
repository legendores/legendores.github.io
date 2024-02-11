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
    let targetSection = document.getElementById(sectionId);

    if (targetSection) {
        window.scrollTo({
            top: (targetSection.offsetTop - (window.innerHeight - targetSection.offsetHeight) / 2),
            behavior: 'smooth'
        });
    }
}

function reload() {
    location.reload();
}

function goToFile(file) {
    window.location.href = file
}

function scrollOtherPage(sectionId) {
    window.onload = function () {
        let targetSection = document.getElementById(sectionId);

        if (targetSection) {
            window.scrollTo({
                top: (targetSection.offsetTop - (window.innerHeight - targetSection.offsetHeight) / 2),
                behavior: 'smooth'
            });
        }
    };
    window.location.href = "../../index.html";
}