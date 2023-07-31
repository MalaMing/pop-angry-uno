window.onload = function () {
  var clickArea = document.getElementById("clickArea");
  var img = document.getElementById("first");
  var count = document.getElementById("score");
  var score = 0;
  var scoreTotal = 0;

  axios
    .get("https://pop-angry-uno.pockethost.io/api/collections/records/records?page=1&perPage=999999999")
    .then((response) => {
      scoreTotal = response.data.items.reduce((acc, cur) => acc + cur.count, 0);
      document.getElementById("score").innerHTML = scoreTotal;
    });

  // mouse click
  clickArea.addEventListener("mousedown", function () {
    var audio = new Audio("./static/sounds/dog_sound.mp3");
    audio.play();
    spinText();
    img.src = "./static/images/second.png";
    increaseScore();

    setInterval(() => {
      axios
        .post("https://pop-angry-uno.pockethost.io/api/collections/records/records", {
          count: score,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 15000);
  });

  clickArea.addEventListener("mouseup", function () {
    img.src = "./static/images/first.png";
  });

  // touch screen
  clickArea.addEventListener("touchstart", function () {
    var audio = new Audio("./static/sounds/dog_sound.mp3");
    audio.play();
    img.src = "./static/images/second.png";
    increaseScore();
  });

  clickArea.addEventListener("touchmove", function () {
    var audio = new Audio("./static/sounds/dog_sound.mp3");
    audio.play();
    img.src = "./static/first.png";
  });

  function increaseScore() {
    score++;
    console.log(score);
    count.innerHTML = score + scoreTotal;
  }

  let i = 0;
  const spinText = () => {
    if (i > 4) i = 0;
    const spinList = ["spin1", "spin5", "spin2", "spin4", "spin3"];
    const text = document.getElementById("score");
    text.classList.add(spinList[i]);
    setTimeout(() => {
      text.classList.remove(spinList[i]);
      i++;
    }, 100);
  };
};
