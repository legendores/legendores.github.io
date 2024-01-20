function join() {
    navigator.clipboard.writeText("LegendOres.minefort.com")
        .then(() => {
            alert('Copied the IP of the server to your clipboard you can now paste it using: CTRL + V.');
        })
}