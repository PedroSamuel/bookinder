$("div#final").toggle();
$("#book").toggle();
$("#hourglass").hide();



function printTime(){
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    $("#clock").text (day + "/" + month + "/" + year + " || " + hours + ":" + mins + ":" + secs); 
}

setInterval(printTime, 1000);

class Library{
    constructor(target){
        this.target = target
        this.books = [];
        this.seenBooks = [];
        this.GetBooks(this.target);
        this.opinions = "";
    }

    Load(book){
        if (library.books[0] != undefined){
            $("#book h1").text(book.title);
            $("#book p").text(book.description);
            $("#book img").attr("src",book.img);
            $("#book h3").text(book.autor[0]);
            // book.links.forEach(function(v,i){
            //     $(".book a").eq(i).text(v.text);
            //     $(".book a").eq(i).attr("href",v.url);
            // });
            } else{
                library.Final();
            }
    }
    NextBook(){
        this.seenBooks.push(this.books[0]);
        this.books.splice(0,1);
        var n = this.seenBooks;
        //console.log("seenbooks = " + n);
        var m = (this.books);
        //console.log("books = " + m);
        this.Load(this.books[0]);
    }
    GetBooks(search){
        var obj = this;
        //alert("Searching books by name: " + search);
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q=/" + search,
            
        }).done(function(data){
            //quando o pedido ajax terminar com sucesso
            //console.log(data);
            data.items.forEach(function(v,i){
                var book = {
                    title: v.volumeInfo.title,
                    autor: v.volumeInfo.authors,
                    description: v.volumeInfo.description,
                    img: v.volumeInfo.imageLinks.thumbnail,
                    opinion: "",
                }
                obj.books.push(book);
            });
                obj.Load(obj.books[0]);
                $("div#searchdiv").hide();
                $("#book").toggle();
        });
    }


    Like(){
        library.books[0].oppinion = "Like"
        this.opinions = this.opinions + library.books[0].title + " = <span class='like'>Like </span> <br/>";
        }

    Dislike() {
        library.books[0].oppinion = "Dislike"
        this.opinions = this.opinions + library.books[0].title + " = <span class='dislike'>Dislike </span> <br/>";
    }

    Final(){
        $("#book").toggle();
        //.addClass("hidden");
        $("#final").toggle();
        //.removeClass("hidden"); 

        $(".ops").html(this.opinions);
        // $(".ops").text(JSON.stringify(opinions[0]));
        // create paragraph for each comment
    }

    NewSearch(){
        this.target = $("form#search").val()
    }
}


 $(".like").click(function(){
    library.Like()

 });

 $(".dislike").click(function(){
    library.Dislike()
 });

 $("#return").click(function(){

        $("#final").toggle();
        //addClass("hidden");//.removeClass("book");
        $("#book").toggle();
        //removeClass("hidden"); 
        opinions = "";
        //$(".ops").empty();
        library.books = library.seenBooks;
        library.seenBooks = [];
        library.Load(library.books[0]);

 });

 $("button#search").click(function(){

        $("#final").toggle();
        //addClass("hidden");//.removeClass("book");
        $("div#searchdiv").toggle();
        $("#hourglass").hide();

        //removeClass("hidden");
 });

//var library = new Library();

$("button.like, button.dislike").click(function(){
    library.NextBook();  });


$( "#searchdiv").submit(function(event) {
    event.preventDefault();
    library = new Library($("#booksearch").val());
    $("#hourglass").show();

});

var library;