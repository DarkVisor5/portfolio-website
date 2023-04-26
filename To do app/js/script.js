$(document).ready(function () {
  let todoList = [];

  function getRandomSuit() {
      const suits = ['spades', 'clubs', 'hearts', 'diamonds'];
      return suits[Math.floor(Math.random() * suits.length)];
  }

  function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  function updateDeck() {
      $("#deck").empty();
      if (todoList.length > 0) {
          const cardCover = $("<div>").addClass("card-cover");
          const card = $("<div>").addClass("card").append(cardCover); // Rimuovi il testo dalla carta nel contenitore "deck"
          $("#deck").append(card);
      }
  }

  function addToDeck(text) {
      todoList.push(text);
      shuffle(todoList);
      updateDeck();
  }

  function createSuitIcon(suit) {
    const suitIcon = $("<div>").addClass("suit-icon").addClass(suit);
    return suitIcon;
  }

  function moveCardToCurrent() {
    if (todoList.length > 0) {
        const text = todoList[0];
        todoList.shift();
        updateDeck();

        const suit = getRandomSuit(); // Generate a random suit
        const topLeft = createSuitIcon(suit).addClass("top-left");
        const topRight = createSuitIcon(suit).addClass("top-right");
        const bottomLeft = createSuitIcon(suit).addClass("bottom-left");
        const bottomRight = createSuitIcon(suit).addClass("bottom-right");

        const currentCard = $("<div>").addClass("card").text(text);
        currentCard.append(topLeft, topRight, bottomLeft, bottomRight);

        $("#current-card").append(currentCard);

        // Remove the card-cover
        $("#deck .card-cover").remove();
    }
  }


  function moveCardToCompleted(clickedCard) {
    if (clickedCard.length) {
        const suit = getRandomSuit(); // Generate a random suit
        const topLeft = createSuitIcon(suit).addClass("top-left");
        const topRight = createSuitIcon(suit).addClass("top-right");
        const bottomLeft = createSuitIcon(suit).addClass("bottom-left");
        const bottomRight = createSuitIcon(suit).addClass("bottom-right");

        const completedCard = clickedCard.clone(true); // Pass true to clone() to copy the attributes and classes of the card
        completedCard.append(topLeft, topRight, bottomLeft, bottomRight);

        $("#completed-cards").append(completedCard);
    }
} 


  $("#add-todo").click(function () {
      const text = $("#card-text").val().trim();
      if (text) {
          addToDeck(text);
          $("#card-text").val("").focus();
      }
  });

  $("#deck").on("click", ".card", function () {
      moveCardToCurrent();
  });

  $("#current-card").on("click", ".card", function () {
      moveCardToCompleted($(this));
      $(this).remove();
  });
});
