


function displayRandomImage() {
    var images = ["imgs/1be05e7cd3e29506baaa560405a0558e.jpg",
    "imgs/5a075b1103b2d333d836aeefec0863ab.jpg",
    "imgs/5b69565057b957531e7190fe30a2472c.jpg",
    "imgs/77febf17fa3bf615434c682d6bb78e2b.jpg",
    "imgs/200e029249a8ea976156722d79ea4fc3.jpg",
    "imgs/0774d6700b58dd47b5583e443a51a37c.jpg",
    "imgs/7881eca258018a2d4237c76b77846c92.jpg",
    "imgs/41872d06e0fc7343c57c9ab7ce3e45a1.jpg",
    "imgs/266705b511fd1a10a29c0dfddf668d99.jpg",
    "imgs/a9c8a371859b14e6505835d0d465f9d5.jpg",
    "imgs/angry-milk-happy-milk.jpg",
    "imgs/c8d67ccd0345402f48b8ea8fbb940d23.jpg",
    "imgs/control.jpg",
    "imgs/d951e0df2f8b2ba385b565dadc7bc445.jpg",
    "imgs/dropped.jpg",
    "imgs/e7c033c54ae7daf3e02826127264156f.jpg",
    "imgs/f2d1d96c1aeb183202880e94cde09bac.jpg",
    "imgs/fall.jpg",
    "imgs/fb5cd5e377cb021b37275f6a019134f5.jpg",
    "imgs/milkmochabear-mocha-bear-couple-cartoon.gif",
    "imgs/movie-watched.jpg",
    "imgs/Snuggle_time.webp",
    "imgs/w4r03xvyggvt0290.jpg",

    "imgs/1be05e7cd3e29506baaa560405a0558e.jpg",
    "imgs/5a075b1103b2d333d836aeefec0863ab.jpg",
    "imgs/5b69565057b957531e7190fe30a2472c.jpg",
    "imgs/77febf17fa3bf615434c682d6bb78e2b.jpg",
    "imgs/200e029249a8ea976156722d79ea4fc3.jpg",
    "imgs/0774d6700b58dd47b5583e443a51a37c.jpg",
    "imgs/7881eca258018a2d4237c76b77846c92.jpg",
    "imgs/41872d06e0fc7343c57c9ab7ce3e45a1.jpg",
    "imgs/266705b511fd1a10a29c0dfddf668d99.jpg",
    "imgs/a9c8a371859b14e6505835d0d465f9d5.jpg",
    "imgs/angry-milk-happy-milk.jpg",
    "imgs/c8d67ccd0345402f48b8ea8fbb940d23.jpg",
    "imgs/control.jpg",
    "imgs/d951e0df2f8b2ba385b565dadc7bc445.jpg",
    "imgs/dropped.jpg",
    "imgs/e7c033c54ae7daf3e02826127264156f.jpg",
    "imgs/f2d1d96c1aeb183202880e94cde09bac.jpg",
    "imgs/fall.jpg",
    "imgs/fb5cd5e377cb021b37275f6a019134f5.jpg",
    "imgs/milkmochabear-mocha-bear-couple-cartoon.gif",
    "imgs/movie-watched.jpg",
    "imgs/Snuggle_time.webp",
    "imgs/w4r03xvyggvt0290.jpg"

];


    var randomIndex = Math.floor(Math.random() * images.length);
    var imgElement = document.getElementById("randomImage");
    imgElement.src = images[randomIndex];
  }



  var quotes = ["You make my heart skip a beat.",
  "Life is better with you.",
  "Love is a journey, and I want to travel it with you.",
  "You are my sunshine on a cloudy day.",
  "Love is not what you say. Love is what you do.",
  "Together is a wonderful place to be.",
  "You are the missing puzzle piece to my life.",
  "I love you more than words can say.",
  "My heart beats for you.",
  "I'm lucky to have you in my life.",
  "You light up my world.",
  "I can't imagine my life without you.",
  "You are my happily ever after.",
  "Forever and always.",
  "I never want to let go of your hand.",
  "You are the peanut butter to my jelly.",
  "I'm addicted to your love.",
  "I fall for you more every day.",
  "Every moment with you is precious.",
  "My heart is full of love for you.",
  "You make me a better person.",
  "I can't wait to grow old with you.",
  "I never knew what true love was until I met you.",
  "You are my soulmate.",
  "You complete me.",
  "I can't get enough of your love.",
  "You make my heart sing.",
  "I love the way you make me feel.",
  "You are my favorite person in the world."];


  
  function displayRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById("randomQuote");
    quoteElement.innerHTML = quotes[randomIndex];}