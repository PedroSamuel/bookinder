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
var oppinions = "";

class Library{
    constructor(){
        this.books = [];
        this.seenBooks = [];
        this.GetBooks("bernard cornwell");
    }

    Load(book){
        if (library.books[0] != undefined){
            $(".book h1").text(book.title);
            $(".book p").text(book.description);
            $(".book img").attr("src",book.img);
            $(".book h3").text(book.autor[0]);
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
        this.Load(this.books[0]);
    }
    GetBooks(search){
        var obj = this;
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q=/" + search,
            
        }).done(function(data){
            //quando o pedido ajax terminar com sucesso
            console.log(data);
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
        });
    }


    Like(){
        library.books[0].oppinion = "Like"
        oppinions = oppinions + library.books[0].title + " = Like <br/>";
        console.log("Like")
        }

    Dislike() {
        library.books[0].oppinion = "Dislike"
        oppinions = oppinions + library.books[0].title + " = Dislike <br/>";
        console.log("Dislike")
    }

    Final(){
        $("#book").addClass("hidden");
        $("#final").removeClass("hidden"); 

        $(".ops").html(oppinions);
        // $(".ops").text(JSON.stringify(oppinions[0]));
        // create paragraph for each comment
    }
}


 $(".like").click(function(){
    library.Like()

 });

 $(".dislike").click(function(){
    library.Dislike()
 });

 $("#return").click(function(){
        library.GetBooks("bernard cornwell");
        $("#final").addClass("hidden").removeClass("book");
        $("#book").removeClass("hidden"); 


 });


var library = new Library();

$("button").click(function(){
    library.NextBook();  });

