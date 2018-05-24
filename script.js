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
    constructor(target) {
        this.target = target
        this.books = [];
        this.seenBooks = [];
        this.index = 0;
        this.GetBooks(this.target, this.index)
        this.opinions = "";

    }

    Load(book){
            $("#book h1").text(book.title);
            $("#book p").text(book.description);
            $("#book img").attr("src",book.img);
            $("#book h3").text(book.author[0]);
    };


    /*Load(book){
        if (book.title != undefined){
            $("#book h1").text(book.title);
        } else $("#book h1").text("title not available");    
        if(book.description != undefined){
            $("#book p").text(book.description);
        } else $("#book p").text("description not available");
        if (book.img != undefined){
            $("#book img").attr("src",book.img);
        } else $("#book img").attr("src","not_found.jpg");
        if (book.author != undefined){
            $("#book h3").text(book.author[0]);
        } else $("#book h3").text("author not available");
    }; */


    
    // Load(book){
    //     try{
    //     $("#book h1").text(book.title);
    //     } catch(err1){
    //         console.log(err1),
    //         $("#book h1").text("Title not Availabe");
    //     };
    //     try{
    //     $("#book p").text(book.description);
    //     } catch(err2){
    //         console.log(err2),
    //         $("#book p").text("Description not Availabe");
    //     };
    //     try{
    //     $("#book img").attr("src",book.img);
    //     } catch(err3){
    //         console.log(err3),
    //         $("#book img").attr("src", "not_found.jpg");
    //     };
    //     try{
    //     $("#book h3").text(book.author[0]);
    //     } catch(err4){
    //         console.log(err4),
    //         $("#book h3").text("author not Availabe");
    //     };
    // };


    NextBook(){
        this.seenBooks.push(this.books[0]);
        this.books.splice(0,1);
        var n = this.seenBooks;
        //console.log("seenbooks = " + n);
        var m = (this.books);
        //console.log("books = " + m);
        if (library.books[0] != undefined){    
            this.Load(this.books[0]);
        } else{
                library.Final();
            }        
    }
    GetBooks(search, ind){
        var obj = this;
        console.log('index = ' + ind)
        
        //alert("Searching books by name: " + search);
        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes?q=/" + search +"&startIndex=" + ind,
            
        }).done(function(data){
            //quando o pedido ajax terminar com sucesso
            //console.log(data);
            try{
                data.items.forEach(function(v,i){
                    var title;
                    var author;
                    var description;
                    var img;
                    if (v.volumeInfo.title != undefined){
                        title = v.volumeInfo.title;
                    } else title = "Title not Available";
                    if (v.volumeInfo.authors != undefined){
                        author = v.volumeInfo.authors;
                    } else author = "Author not Available";
                    if (v.volumeInfo.description != undefined){
                        description = v.volumeInfo.description;
                    } else description = "Description not Available";
                    if ((v.volumeInfo.imageLinks != undefined) &&(v.volumeInfo.imageLinks.thumbnail != undefined)){
                        img = v.volumeInfo.imageLinks.thumbnail;
                    } else img = "not_found.jpg"
                    var book = {
                        "title": title,
                        "author": author,
                        "description": description,
                        "img": img,
                        "opinion": "",
                    }
                    obj.books.push(book);
                });        
            }catch(err){
                    alert("Ocorreu um erro: " + err)};

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
        $("#final h2").text(this.target);
        var index_min = this.index + 1;
        var index_max = this.index + 10;  
        $("#final h4").html(index_min +  (" to ") + index_max);
        $(".ops").html(this.opinions);
        this.opinions = "";
    }

    Reset(){
        library.seenBooks = [];
        this.opinions = "";
    }

    NewSearch(){
        this.target = $("form#search").val()
    }

    More(){
    this.index = this.index + 10;
    this.GetBooks(this.target, this.index)
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
        $("#book").toggle();
        library.books = library.seenBooks;
        library.Reset();
        library.Load(library.books[0]);

 });

  $("#more").click(function(){

        $("#final").toggle();
        library.Reset();
        library.More();



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
    library.NextBook();
});


//var writing = 0;


$( "#searchdiv").submit(function(event) {
    event.preventDefault();
    library = new Library($("#booksearch").val());
    //writing = 0;
    $("#hourglass").show();


});


// var sub = jQuery.Event( "submit" );

// var leng = "";
// $("#booksearch").keyup(function() {
//     writing = 1;
//     leng = $( this ).val();
//     leng = leng.length;
//     if (leng > 2){
//         setTimeout(function(){
//             $( "form" ).trigger( sub );
//             leng = 0;
//         },2000);  
//     }
// });

// while ((leng > 2)&&(writing == 2)) {
//     setInterval(function(){
//         console.log(writing);
//
//         writing = 0;

//     },2000);
// };

var timer;
$('#booksearch').keyup(function(){
    clearTimeout(timer);
        if ($('#booksearch').val().length > 2){
            timer = setTimeout(function() {
               $('#searchsub').click(); 
               console.log("ok")
            }, 2000);
    }
});


var library;