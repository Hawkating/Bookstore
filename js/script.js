function render(){
    let initArray = localStorage.getItem("keyBooks");
    if (initArray) {
        books = load();
      }

   let content = document.getElementById('content');
content.innerHTML = ``;
content.innerHTML = returnHeader();
let allCards = document.getElementById('all-cards');

for (let i = 0; i < books.length; i++){
    allCards.innerHTML += returnCards(i);
    if (books[i]["liked"]){
        document.getElementById(`likedpic${i}`).src = src="./img/likecolored.png"
    }
    renderComments(i);
    if(books[i]["comments"].length < 1){
        hideCommentArea(i);
    }
}
}


function renderComments(index){
    let commentArea = document.getElementById(`comments${index}`);

    for (let i = 0 ; i < books[index]["comments"].length; i++){
    commentArea.innerHTML += `
    <table>
        <tr>
            <td class="table-data">${books[index]["comments"][i]["name"]}</td><td class="table-data">:${books[index]["comments"][i]["comment"]}</td>
        </tr>
    </table>
    `;
}
}


function hideCommentArea(index){
document.getElementById(`commentCard${index}`).classList.add('d-none');

}


function like(index){
    books[index]['liked'] = !books[index]['liked'];
    if (books[index]['liked']){
        let likeNumber = books[index]["likes"];
        likeNumber = likeNumber + 1;
        books[index]["likes"] = likeNumber;
}else {
    let likeNumber = books[index]["likes"];
        likeNumber = likeNumber - 1;
        books[index]["likes"] = likeNumber;
}
    save();
    render();
}


function sendComment(index){
    let text = document.getElementById(`textarea${index}`).value;
    if (text){
    let commentArray = books[index]["comments"];
    commentArray.push({"name": "TestACCOUNT", "comment": text})
};  
    save();
    render();
}


function saveWithoutRender(){
    let arrayAsText = JSON.stringify(books);
    localStorage.setItem('keyBooks', arrayAsText);
}


function save(){
    let arrayAsText = JSON.stringify(books);
    localStorage.setItem('keyBooks', arrayAsText);
}

function load(){
   return JSON.parse(localStorage.getItem("keyBooks"));
}
