
// Fonctionnalité 1 et 1_bis //
function function_1() {
    let footer = document.getElementsByTagName("footer")[0];
  
    footer.addEventListener("click", function(){
      console.log("Clique");
    });
  }

  function function_1_bis() {
    let footer = document.getElementsByTagName("footer")[0];
    let counter = 0;
  
    footer.addEventListener("click", function(){
      console.log("Clique numéro " + ++counter);
    });
  }

// Fonctionnalité 2 //
  function function_2(){
      let header = document.getElementById("navbarHeader");
      let button = document.getElementsByClassName("navbar-toggler")[0];
      button.addEventListener("click", function(){
        header.classList.contains('collapse') ? header.classList.remove("collapse") : header.classList.add("collapse");
      });
  }

// Fonctionnalité 3 //
  function function_3(){
    let card = document.getElementsByClassName("card mb-4 box-shadow")[0];
    let button = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

    button.addEventListener("click", function(){
        card.style.color = "red";
    });

  }

// Fonctionnalité 4 //
  function function_4(){
      let card_2 = document.getElementsByClassName("card mb-4 box-shadow")[1];
      let button_2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

    button_2.addEventListener("click", function(){
    if (card_2.style.color === 'green'){
        card_2.style.color = 'black' ;
        }else {
        card_2.style.color = 'green';}
    });
  }

  // Fonctionnalité 5 //
  function function_5(){
      let header = document.getElementsByTagName("header")[0];
      let link = document.getElementsByTagName("link")[0];
    header.addEventListener("dblclick", function(){
        if (link.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
        link.href = "";
        } else {
            link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
        }
    });
  }

// Fonctionnalité 6 //
  function function_6(){
    let cards = document.getElementsByClassName("card mb-4 box-shadow");
    for (let item of cards){
    let image = item.getElementsByTagName("img")[0];
    let button = item.getElementsByClassName("btn btn-sm btn-success")[0];
    let paraph = item.getElementsByTagName("p")[0];
    button.addEventListener("mouseover", function(){
        if(image.style.width === '20%'){
        image.style.width = '100%';
        paraph.style.display= "block";
        } else {
            image.style.width = '20%';
            paraph.style.display= "none";
        }
    });
};
  }

  // Fonctionnalité 7 //
  function function_7(){

    let cardDeck = document.getElementsByClassName("col-md-4")[0].parentNode;
    let button = document.getElementsByClassName("btn btn-secondary my-2")[0];
    button.addEventListener("click", function(){
        cardDeck.insertBefore(document.getElementsByClassName("col-md-4")[5], document.getElementsByClassName("col-md-4")[0]);
    });
  }

  // Fonctionnalité 8 //
  function function_8(){
    let cardDeck = document.getElementsByClassName("col-md-4")[0].parentNode;
    let button = document.getElementsByClassName("btn btn-primary my-2")[0];
button.addEventListener("click", function(){
    button.href = "#";
    cardDeck.insertBefore(document.getElementsByClassName("col-md-4")[0], document.getElementsByClassName("col-md-4")[5].nextSibling);
});  
  }

  function function_9(){
  }
  


  function_1();
  function_1_bis();
  function_2();
  function_3();
  function_4();
  function_5();
  function_6();
  function_7();
  function_8();
  function_9();
