window.onload = start;

function start(){
    console.log("STARTING TIMEOUT");
    setTimeout(function(){
        console.log("FINISHED TIMEOUT");
        var loginButton = document.querySelectorAll("a[href='/users/sign_up']")[0];
        if (!(typeof loginButton === 'undefined')) {
            console.log("YOU MUST BE LOGGED IN.");
        } else {
            var itemUser = document.getElementsByClassName("-username")[0].textContent;
            var userMessages = document.querySelectorAll("a[href='/messages']")[0];
            user = userMessages.children[0].getAttribute("alt");
            if (user == itemUser){
                setUp();
            } else {
                console.log("THIS IS NOT YOUR ITEM.")
            }
        }
    }, 2000);
}

function setUp(){
    var btn = document.createElement('button');
    btn.innerHTML = "Sell item on Ebay";
    btn.setAttribute('class', 'button _large _border');
    btn.setAttribute('title', 'Ebay');
    var parentBox = document.getElementById("listing-show-cta");
    var deleteButton = document.getElementById("user_delete");
    parentBox.insertBefore(btn, deleteButton);

    cacheItem();
}

function cacheItem(){
    console.log("Gathering item information...")
    title = document.getElementsByClassName("listing-title sub-title")[0].textContent;
    size = document.getElementsByClassName("listing-size sub-title")[0].textContent;
    description = document.getElementsByClassName("listing-description")[0].innerText;
    designersElements = document.getElementsByClassName("designer-name");
    designers = [];
    for (var i = 0; i < designersElements.length; i++){
        designers[i] = designersElements[i].textContent;
    }
    imageThumbnails = document.getElementsByClassName("-image-wrapper -thumbnail");
    images = [];
    for (var i = 0; i < imageThumbnails.length; i++){
        tbSource = imageThumbnails[i].childNodes[0].getAttribute("src");
        tbSource = tbSource.replace("width:180", "height:1400");
        tbSource = tbSource.replace("fit:crop", "fit:scale");
        images[i] = tbSource;
    }
    prices = document.getElementsByClassName("-prices");
    price = prices[0].lastElementChild.innerHTML;

    var dataDict = {
        "Title": title,
        "Size": size,
        "Description": description,
        "Designers": designers,
        "Images": images,
        "Price": price
    };
    for(var key in dataDict) {
        var value = dataDict[key];
        console.log(key);
        console.log(value);
    }

    localStorage.setItem('myCat', 'Tom');
    var newURL = "http://stackoverflow.com/";
    chrome.tabs.create({ url: newURL });
    if("https://signin.ebay.com/" in currentURL){
        alert("You must be logged in to eBay.")
    }
    // chrome.storage.local.set({key: value}, function() {
    //     console.log('Value is set to ' + value);
    // });

    // chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
}