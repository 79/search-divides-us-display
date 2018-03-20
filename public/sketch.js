const DEBUG = true

let currentScene = 0
let scenes = [
  'Welcome to Shapetown!',
  'Shapetown is a colorful city where all diffferent shapes live together.',
  'Select a shape to begin!',

  /*
  //= Character selection
  [
    "<User selects a square.>",
    "Play as square, who was born and raised here. She wants to stay close to home in lower Shapetown.",
  ], [
    "<User selects a triangle.>",
    "Play as triangle, who is sizing up to a better place. She wants to live in middle Shapetown.",
  ], [
    "<User selects a circle.>",
    "Play as circle, a newcomer to the city. She wants to live in upper Shapetown.",
  ],
  */

  //= Character expose
  "You're playing as Susie Square!",
  [
    "Susie Square is a single mom raised in Shapetown.",
    "She's now looking for a safe place to raise her kids."
  ],

  //= Introduce interface
  "Hi! I'm Susie Square!",
  "Can you help me find a place to live?",
  "TODO: Need to introduce objective...",
  "Below is a map of Shapetown",

  //== Animation about browser assumptions goes here?

  // Assumptive search
  [
    "Based on your browser history.",
    "Here are some options we found for you."
  ],

  // 4-5 neighborhoods are revealed
  "Not bad! But we should narrow down more.",

  //= User interaction
  "Give the search engine information to narrow to a single neighborhood.",

  // Map screen is black
  "Oops, no more choices. Put some filters on!",

  // 1 neighborhood revealed
  "Should I choose this neighborhood?",

  // User selects NO, then KEEP SEARCHING
  // Not implemented here

  // User selects YES
  "I hope this will be a decent place to raise my kids.", // SQUARE
  // "For a student like me, this is the best option i have right now." // TRIANGLE
  // "This neighborhood is safe and clean. i can't wait to move in." // CIRCLE

  //= Conclusion
  // Break the wall
  "What just happened there?",
  "TODO: Need to conclude something...",





  "Awesome! I can't wait to move to my new neighborhood.",
  'FIN'
]

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(0)

  displayTitle(scenes[currentScene])
}

// Helper to display something in the middle...
function displayTitle(title) {
  push()

  fill('white')
  textAlign(CENTER, CENTER)

  if (Array.isArray(title)) {
    let maxFontSize = windowWidth / title[0].length
    // Determine biggest font-size we can use
    for (var i = 0; i < title.length; i++) {
      let fontSize = windowWidth / title[i].length;
      if (fontSize < maxFontSize) {
        maxFontSize = fontSize;
      }
    }
    textSize(maxFontSize * 1.5) // HACK
    text(title.join("\n"), 0, 0, windowWidth, windowHeight)
  } else {
    let maxFontSize = windowWidth / title.length
    textSize(maxFontSize * 1.5) // HACK
    text(title, 0, 0, windowWidth, windowHeight)
  }

  pop()
}

function displayImage(image) {
  push()
  translate(windowWidth / 2, windowHeight / 2)
  image(image, -200, -200, 400, 400)
  pop()
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    currentScene++

    if (currentScene >= scenes.length) currentScene = scenes.length - 1;
  }

  if (keyCode === LEFT_ARROW) {
    currentScene--

    if (currentScene < 0) currentScene = 0;
  }
}
