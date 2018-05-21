// function msg(){
//     alert("Olá");
// }

// var alamut_opinion = ("Null");
// var antifragile_opinion = ("Null");
// var almanac_opinion = ("Null");
// var cosmos_opinion = ("Null");
// var winterking_opinion = ("Null");
// var clan_opinion = ("Null");




// Botōes

// $("button").click(function(){
//     Library.NextBook();  

    // var coiso = $(this).parent().next().length;
    // var coisa = document.getElementsByClassName("book");
    // var coisa0 = coisa[0];
    // // console.log(coisa0);
    // $(this).parent().removeClass("show").addClass("hide"); 
    // if (coiso == 0){
    //     $(coisa0).removeClass("hide").addClass("show");
    // }else {
    //     $(this).parent().next().removeClass("hide").addClass("show");

    // }
    // });


// $("#alamut button").click(function(){
//     alamut_opinion = $(this).attr("data-Opinion");
//     console.log("Alamut " + alamut_opinion);
//     $("#lblalamut").text(alamut_opinion);
// });


// $("#antifragile button").click(function(){
//     antifragile_opinion = $(this).attr("data-Opinion");
//     console.log("antifragile " + antifragile_opinion);
//     $("#lblantifragile").text(antifragile_opinion); 
// });

// $("#almanac button").click(function(){
//     almanac_opinion = $(this).attr("data-Opinion");
//     console.log("almanac " + almanac_opinion);
//     $("#lblalmanac").text(almanac_opinion); 
// });

// $("#cosmos button").click(function(){
//     cosmos_opinion = $(this).attr("data-Opinion");
//     console.log("cosmos " + cosmos_opinion);
//     $("#lblcosmos").text(cosmos_opinion); 
// });

// $("#winterking button").click(function(){
//     winterking_opinion = $(this).attr("data-Opinion");
//     console.log("winterking " + winterking_opinion);
//     $("#lblwinterking").text(cosmos_opinion); 
// });

// $("#clan button").click(function(){
//     clan_opinion = $(this).attr("data-Opinion");
//     console.log("clan " + clan_opinion);
//     $("#lblclan").text(cosmos_opinion); 
// });



//  $("#alamut .like").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#alamut .dislike").addClass("notselected").removeClass("selected");
//     $("#lblalamut").css("color", ("green"));
//  });

// $("#alamut .dislike").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#alamut .like").addClass("notselected").removeClass("selected");
//     $("#lblalamut").css("color", ("red"));
//  });

//  $("#almanac .like").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#almanac .dislike").addClass("notselected").removeClass("selected");
//     $("#lblalmanac").css("color", ("green"));
//  });


// $("#almanac .dislike").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#almanac .like").addClass("notselected").removeClass("selected");
//     $("#lblalmanac").css("color", ("red"));

//  });
    

//  $("#antifragile .like").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#antifragile .dislike").addClass("notselected").removeClass("selected");
//         $("#lblantifragile").css("color", ("green"));
//  });


// $("#antifragile .dislike").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#antifragile .like").addClass("notselected").removeClass("selected");
//     $("#lblantifragile").css("color", ("red"));
//  });


//  $("#cosmos .like").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#cosmos .dislike").addClass("notselected").removeClass("selected");
//     $("#lblcosmos").css("color", ("green"));
//  });

// $("#cosmos .dislike").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#cosmos .like").addClass("notselected").removeClass("selected");
//     $("#lblcosmos").css("color", ("red"));
// });

// $("#winterking .like").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#winterking .dislike").addClass("notselected").removeClass("selected");
//     $("#lblwinterking").css("color", ("green"));
//  });

// $("#winterking .dislike").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#winterking .like").addClass("notselected").removeClass("selected");
//     $("#lblwinterking").css("color", ("red"));
// });

// $("#clan .like").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#clan .dislike").addClass("notselected").removeClass("selected");
//     $("#lblclan").css("color", ("green"));
//  });

// $("#clan .dislike").click(function(){
//     $(this).addClass("selected").removeClass("notselected");
//     $("#clan .like").addClass("notselected").removeClass("selected");
//     $("#lblclan").css("color", ("red"));
// });



// $(".selected").click(function(){
//     $(this).removeClass("selected")

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
    constructor(){
        this.books = [book1, book2, book3];
        this.seenBooks = [];
        this.Load(book1);
        //this.NextBook();
    }    
    Load(book){
        $("h1").text(book.name);
        $(".book img").attr("src", book.img);
        $(".book p").text(book.description);
        //$(".book a").forEach(function(this.attr))
        $(".book h3 a").text(book.autor);
        $(".book h3 a").attr("href", book.linkautor);
        $("a#wikipedia").attr("href", book.links.wikipedia.url);
        $("a#goodreads").attr("href", book.links.goodreads.url);
        $("a#amazon").attr("href", book.links.amazon.url);



    }

    NextBook(){
        this.seenBooks.push(this.books[0])
        this.books.splice(0,1);
        this.Load(this.books[0])
    }

}




var book1 = {
    name: "Alamut",
    img: "alamut.jpeg",
    autor: "Vladimir Bartol",
    linkautor:"https://en.wikipedia.org/wiki/Vladimir_Bartol",
    description: `Alamut takes place in 11th Century Persia, in the fortress of Alamut, where self-proclaimed prophet Hasan ibn Sabbah is setting up his mad but br/illiant plan to rule the region with a handful of elite fighters who are to become his \"living daggers.\" By creating a virtual paradise at Alamut, filled with beautiful women, lush gardens, wine and hashish, Sabbah is able to convince his young fighters that they can reach paradise if they follow his commands. With parallels to Osama bin Laden, Alamut tells the story of how Sabbah was able to instill fear into the ruling class by creating a small army of devotees who were willing to kill, and be killed, in order to achieve paradise. Believing in the supreme Ismaili motto “Nothing is true, everything is permitted,” Sabbah wanted to “experiment” with how far he could manipulate religious devotion for his own political gain through appealing to what he called the stupidity and gullibility of people and their passion for pleasure and selfish desires.`,
    links:{ 
        wikipedia: {
            text: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Alamut_(Bartol_novel)"},
        goodreads: {
            text: "Goodreads",
            url: "https://www.goodreads.com/book/show/171970.Alamut"},
        amazon: {
            text :"Amazon",
            url: "https://www.amazon.com/Alamut-Vladimir-Bartol/dp/1556436815"}

    }
}

var book2 = {
    name: "Cosmos",
    img: "cosmos.jpg",
    autor: "Carl Sagan",
    linkautor: "https://en.wikipedia.org/wiki/Carl_Sagan",
    description: "Cosmos is one of the bestselling science books of all time. In clear-eyed prose, Sagan reveals a jewel-like blue world inhabited by a life form that is just beginning to discover its own identity and to venture into the vast ocean of space. Featuring a new Introduction by Sagan’s collaborator Ann Druyan, full color illustrations, and a new Foreword by astrophysicist Neil deGrasse Tyson, Cosmos retraces the fourteen billion years of cosmic evolution that have transformed matter into consciousness, exploring such topics as the origin of life, the human brain, Egyptian hieroglyphics, spacecraft missions, the death of the Sun, the evolution of galaxies, and forces and individuals who helped to shape modern science.",
    links:{ 
        wikipedia: {
            text: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/Cosmos_(Carl_Sagan_book)"},
        goodreads: {
            text: "Goodreads",
            url: "https://www.goodreads.com/book/show/55030.Cosmos" },
        amazon: {
            text :"Amazon",
            url: "https://www.amazon.com/Cosmos-Carl-Sagan/dp/0345539435"}

    }
}

var book3 = {
    name: "The Winter King",
    img: "winterking.jpg",
    autor: "Bernard Cornwell",
    linkautor: "https://en.wikipedia.org/wiki/Bernard_Cornwell",
    description: " From Bernard Cornwell, the creator of the No. 1 bestselling Sharpe novels. In the Dark Ages, a legendary warrior arises to unite a divided land . . . Uther, the High King of Britain, is dead. His only heir is the infant Mordred. Yet each of the country's lesser kings seek to claim the crown for themselves. While they squabble and spoil for war, a host of Saxon armies gather, preparing for invasion. But no one has counted on the fearsome warlord Arthur. Handed power by Merlin and pursuing a doomed romance with the  beautiful Guinevere, Arthur knows he will struggle to unite the country - let alone hold back the Saxon enemy at the gates. Yet destiny awaits him . . . The first of Bernard Cornwell's Warlord Chronicles, The Winter King is a brilliant retelling of the Arthurian legend, combining myth, history and thrilling battlefield action.",
    links:{ 
        wikipedia: {
            text: "Wikipedia",
            url: "https://en.wikipedia.org/wiki/The_Winter_King_(novel)"},
        goodreads: {
            text: "Goodreads",
            url: "https://www.goodreads.com/book/show/68520.The_Winter_King"},
        amazon: {
            text :"Amazon",
            url: "https://www.amazon.co.uk/Winter-King-Arthur-Warlord-Chronicles/dp/024195567X"}

    }
}


var library = new Library();

$("button").click(function(){
    library.NextBook();  });

