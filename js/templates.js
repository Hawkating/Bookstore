function returnHeader() {
    return /*html*/ `
        <header>
            <img class="headline-logo" src="./img/logo.png">
            <h1><font>Jans</font>Buchladen</h1><h2><span>-</span> get your book here</h2>
        </header>
        <div id="all-cards"></div>
        `
};


function returnCards(index) {
    let priceNumber = books[index]["price"].toFixed(2);
    let priceString = priceNumber.toString();
    priceString = priceString.replace(".", ",");

    return /*html*/ `
    <div class="card">
        <div class="border-bottom centered card-headline"><h2>${books[index]["name"]}</h2></div>
        <div class="border-bottom centered pic"><img class="bookpic" src="./img/book.png"></div>
        <div>
            <table class="table-price-likes">
                <tr>
                    <td class="price">${priceString}€</td><td class="likes">${books[index]["likes"]}<img id="likedpic${index}" onclick="like(${index})" class="pic-heart" src="./img/like.png"></td>
                </tr>
            </table>
        </div>
        <div class="table-infos-div border-bottom">
            <table class="table-infos">
                <tr><td class="table-data">Autor</td><td>: ${books[index]["author"]}</td></tr>
                <tr><td class="table-data">Erscheinungsjahr</td><td>: ${books[index]["publishedYear"]}</td></tr>
                <tr><td class="table-data">Genre</td><td>: ${books[index]["genre"]}</td></tr>
            </table>
        </div>
        <div id="commentCard${index}">
            <div class="commentsHeadline">Kommentare:</div>
            <div class="commentsArea" id="comments${index}"></div>
        </div>
        <div class="textareaBox"><textarea id="textarea${index}" class="textarea" placeholder="Schreibe dein Kommentar"></textarea><img class="send-button" onclick="sendComment(${index})" src="./img/send.png"></div>
    </div>
    `
}
