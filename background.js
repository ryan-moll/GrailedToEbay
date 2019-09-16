console.log("HELLLOOOOOoooOOoOoOOO");

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
    if(window.location.href.includes("https://signin.ebay.com/")){
        console.log("Tom");
        alert("You must be logged in to eBay.");
    }
}