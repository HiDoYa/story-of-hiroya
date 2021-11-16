let button = function () {
  // Border
  fill(0, 0, 0);
  rect(340, 0, 60, 45, 21);

  // Text box
  fill(132, 147, 209);
  rect(345, 5, 50, 35, 16);

  // Text
  fill(0, 0, 0);
  textSize(16);
  text("Next", 354, 27);

  // Proceed to next scene
  mousePressed = function () {
    if (mouseX >= 340 && mouseY <= 45) {
      scene++;
    }
  }
};

let flag = function () {
  // Pole
  fill(82, 0, 0);
  rect(8, 10, 20, 400);

  // Main Flag
  fill(240, 240, 240);
  rect(20, 20, 340, 220);

  // Flag Pattern
  fill(255, 0, 0);
  ellipse(180, 130, 100, 100);
};

let smoke = function (isDark = false) {
  let speed;
  if (isDark) {
    fill(133, 126, 133);
    speed = 3;
  } else {
    fill(176, 176, 176);
    speed = 1;
  }

  noStroke();
  for (let i = 0; i < smokeVars.ypos.length; i++) {
    ellipse(smokeVars.xpos[i], smokeVars.ypos[i], 37, 36);

    if (smokeVars.ypos[i] < 0) {
      // Loop back around
      smokeVars.ypos[i] += 450;
      smokeVars.xpos[i] += 450;
    }
    else {
      // Move smoke across screen
      smokeVars.ypos[i] -= speed;
      smokeVars.xpos[i] -= speed;
    }
  }

  // Have 25 smoke particles at once
  while (smokeVars.xpos.length < 25) {
    smokeVars.xpos.push(random(1, 500));
    smokeVars.ypos.push(random(1, 500));
  }
};

let fire = function (x, y, z, a) {
  noStroke();

  // Flames
  fill(255, 242, 0);
  ellipse(x + 70, y + 200, 110, 150);
  fill(255, 0, 0);
  ellipse(x + 70, y + 200, 80, 100);
  fill(184, 184, 184);

  // Blanks
  ellipse(x + 90 - a, y + 160 - z, 70, 80);
  ellipse(x + 45, y + 150, 52, 61);
};

let tea = function (x, y) {
  fill(0, 105, 25);
  ellipse(100 - x, 254 - y, 57, 20);
  ellipse(100 - x, 321 - y, 57, 20);
  rect(70 - x, 253 - y, 57, 70);
  fill(82, 255, 122);
  ellipse(100 - x, 254 - y, 48, 9);
};

let go = function (x, y) {
  fill(156, 114, 9);
  rect(294 - x, 248 - y, 97, 97);
  rect(304 - x, 258 - y, 77, 77);
  rect(304 - x, 258 - y, 38.5, 38.5);
  rect(343 - x, 296 - y, 38.5, 38.5);
  line(304 - x, 316 - y, 382 - x, 316 - y);
  line(304 - x, 279 - y, 382 - x, 279 - y);
  line(325 - x, 260 - y, 325 - x, 332 - y);
  line(361 - x, 260 - y, 362 - x, 337 - y);
};

let mcintosh = function (x, y) {
  fill(0, 0, 0);
  rect(171 - x, 255 - y, 108, 63);
  fill(0, 225, 255);
  rect(187 - x, 284 - y, 77, 27);
  fill(0, 0, 0);
  stroke(0, 0, 0);
  line(240 - x, 288 - y, 225 - x, 304 - y);
  fill(176, 176, 176);
  ellipse(202 - x, 269 - y, 20, 20);
  ellipse(234 - x, 269 - y, 10, 10);
  ellipse(219 - x, 269 - y, 10, 10);
  ellipse(250 - x, 269 - y, 20, 20);
};

let steak = function (x, y) {
  stroke(0, 0, 0);
  ellipse(94 + x, 302 + y, 130, 89);
  ellipse(95 + x, 304 + y, 70, 54);

  fill(0, 148, 17);
  ellipse(68 + x, 310 + y, 20, 20);

  fill(128, 0, 0);
  ellipse(104 + x, 313 + y, 60, 27);
  ellipse(91 + x, 297 + y, 66, 38);

  line(68 + x, 288 + y, 79 + x, 307 + y);
  line(90 + x, 288 + y, 100 + x, 307 + y);
  line(83 + x, 288 + y, 93 + x, 307 + y);
};

let hotdog = function (x, y) {
  fill(255, 255, 255);
  ellipse(298 + x, 301 + y, 130, 89);
  ellipse(297 + x, 304 + y, 70, 54);
  fill(153, 55, 55);
  rect(252 + x, 283 + y, 85, 36, 10);
  fill(255, 0, 0);
  rect(246 + x, 285 + y, 97, 16, 10);
};

var skunk = function () {
  fill(0, 0, 0);
  ellipse(231, 186, 58, 46);
  ellipse(278, 182, 97, 46);

  push();
  rotate(-44);
  ellipse(131, 346, 93, 32);
  pop();

  push();
  rotate(5);
  fill(255, 255, 255);
  ellipse(300, 148, 97, 15);
  pop();

  stroke(0, 0, 0);
  strokeWeight(3);
  fill(255, 255, 255);
  ellipse(224, 165, 15, 20);
  ellipse(210, 170, 15, 20);

  fill(0, 0, 0);
  ellipse(228, 166, 5, 5);
  ellipse(211, 165, 5, 5);
  triangle(259, 226, 279, 187, 243, 192);
  triangle(321, 226, 319, 187, 271, 192);
};

var selectionbox = function () {
  stroke(0, 0, 0)
  strokeWeight(4)
  fill(255, 255, 255);
  rect(212, 322, 190, 75, 24);
  line(308, 324, 308, 395);
  line(403, 358, 216, 358);
  fill(0, 0, 0);
};

let setFireJump = function (firePos) { return firePos < 1 ? 13 : -18; }

let scene0 = function () {
  // Background
  background(189, 234, 255);

  // Text box
  fill(255, 255, 255);
  rect(0, 0, 248, 96);

  // Sub text
  fill(0, 0, 0);
  textSize(20);
  text("Once upon the Heisei Era, there was a kid named Hiroya.", 7, 18, 257, 300);

  // JP Name
  push();
  rotate(31);
  fill(0, 0, 0);
  textSize(150);
  text("篤 八", 265, -85, 168, 518);
  pop();

  // Character
  image(hgCharacter, 10, 155);

  button();
};

let scene1 = function () {
  noStroke();

  // Background
  background(255, 255, 255);
  fill(255, 0, 0);

  // Background flag
  triangle(150, 150, 411, 221, 416, 300);
  triangle(150, 150, 394, 475, 412, 354);
  triangle(150, 150, 342, 1499, 409, 640);
  triangle(150, 150, 50, 400, 132, 400);
  triangle(150, 150, -112, 400, 8, 400);
  triangle(150, 150, 400, 110, 400, 186);
  triangle(150, 150, 400, -7, 400, 75);
  triangle(150, 150, 0, 211, 0, 122);
  triangle(150, 150, 0, -19, 0, 93);
  triangle(150, 150, 260, 0, 350, 0);
  triangle(150, 150, 50, 0, 132, 0);
  triangle(150, 150, 154, 0, 231, 0);

  // Draw flag
  flag();

  // Text box
  fill(0, 107, 4);
  rect(0, 350, 400, 50);

  // Sub text
  fill(255, 255, 255);
  textSize(44);
  text("He was Japanese.", 23, 388);

  image(hgCharacter, 304, 209);

  button();
};

let scene2 = function () {
  background(173, 173, 173);

  // Bed structure
  fill(112, 0, 0);
  rect(13, 59, 369, 400, 20);

  // Sub text
  textSize(21);
  text("One day, Hiroya was sleeping when...", 5, 52);

  // Pillow
  fill(230, 230, 230);
  rect(67, 76, 249, 157, 48);

  image(hgCharacter, 78, -53, 207, 376);

  // Bed + blanket
  fill(255, 255, 255);
  rect(30, 200, 330, 327, 10);
  fill(255, 0, 0);
  rect(48, 214, 285, 217);

  // Show scrolling text
  fill(255, 0, 255);
  textSize(64);
  text("z z z z z z z z z", scene2Vars.scrollingText, 94);
  scene2Vars.scrollingText += 1;

  // Show left eyelids
  fill(0, 0, 0);
  rect(132, scene2Vars.topEyelid, 30, 6);
  rect(132, scene2Vars.botEyelid, 30, 5);

  // Show right eyelids
  fill(0, 0, 0);
  rect(206, scene2Vars.topEyelid, 30, 6);
  rect(206, scene2Vars.botEyelid, 33, 5);

  if (scene2Vars.scrollingText > 325) {
    smoke();

    // Open eyelids
    if (scene2Vars.scrollingText > 325 && scene2Vars.topEyelid > 168) {
      scene2Vars.topEyelid -= 0.1;
      scene2Vars.botEyelid += 0.1;
    }

    // Show text when waking up
    fill(0, 0, 0);
    textSize(32);
    text("thick smoke roused him from sleep.", 53, 254, 294, 115);

    // Show button when we are donea animating
    if (scene2Vars.topEyelid < 168.2) {
      button();
    }
  }
};

let scene3 = function () {
  background(219, 219, 219);

  // Ground
  fill(143, 0, 0);
  rect(0, 200, 400, 200);

  // Bed
  fill(105, 0, 0);
  rect(35, 150, 206, 101, 10);
  fill(255, 255, 255);
  rect(35, 150, 175, 104);
  fill(255, 0, 0);
  rect(40, 150, 164, 96);
  fill(148, 148, 148);
  rect(211, 150, 28, 78, 10);

  // Window
  fill(0, 0, 0);
  rect(270, 50, 100, 100);
  fill(52, 0, 196);
  rect(280, 60, 80, 80);
  fill(0, 0, 0);
  rect(315, 50, 10, 100);
  rect(270, 95, 100, 10);

  // Star
  fill(238, 255, 0);
  ellipse(300, 79, 17, 16);

  // Small Flag
  push();
  scale(0.5, 0.5);
  flag();
  pop();

  image(hgCharacter, scene3Vars.charPos, scene3Vars.charPos - 50);

  if (scene3Vars.charPos > 275) {
    // Text box
    fill(255, 255, 255);
    triangle(318, 273, 235, 158, 160, 160);
    ellipse(235, 191, 296, 100);

    // Speech text
    fill(0, 0, 0);
    textSize(18);
    text("OMG MY HOUSE IS BURNING", 107, 195);

    button();
  } else {
    scene3Vars.charPos += 1;
  }

  // Smoke
  smoke(isDark = true);
};

let scene4 = function () {
  background(214, 214, 214);

  // Door
  fill(110, 0, 0);
  rect(99, 64, 155, 266);
  fill(0, 0, 0);
  rect(109, 74, 135, 246);
  fill(110, 0, 0);
  rect(114, 79, 124, 236);

  // Door handle
  fill(255, 255, 0);
  ellipse(219, 212, 20, 20);

  // Ground
  fill(77, 0, 0);
  rect(0, 329, 400, 84);

  smoke(isDark = true);

  if (scene4Vars.charPos < 70) {
    // Draw scaled and rotate character
    push();
    scale(scene4Vars.scale, scene4Vars.scale);
    translate(scene4Vars.translate, scene4Vars.translate * 2);
    image(hgCharacter, scene4Vars.charPos, scene4Vars.charPos, scene4Vars.charScale, scene4Vars.charScale + 165);
    pop();

    // Move character until limit
    if (scene4Vars.translate >= -100) {
      scene4Vars.translate -= 1;
    }

    if (scene4Vars.scale > 2) {
      // Draw cinematic rectangles
      fill(0, 0, 0);
      rect(0, 0, 400, scene4Vars.textDelay);
      rect(0, 400, 400, -scene4Vars.textDelay);

      if (scene4Vars.textDelay > 100) {
        // Display sub text
        fill(255, 255, 255);
        textSize(73);
        text("I", 62, 70);
        text("MUST", 148, 70);
        text("ESCAPE", 65, 375);

        button();
      } else {
        scene4Vars.textDelay += 1;
      }
    } else {
      scene4Vars.scale += 0.01;
    }
  } else {
    image(hgCharacter, scene4Vars.charPos, scene4Vars.charPos, scene4Vars.charScale, scene4Vars.charScale + 175);
    scene4Vars.charPos -= 1;
  }
}

let scene5 = function () {
  background(184, 184, 184);

  // Draw fire
  fire(20, scene5Vars.firePos + 20, 20, 15);
  fire(236, scene5Vars.firePos + 111, 29, -13);
  fire(254, scene5Vars.firePos + -112, -4, -12);
  scene5Vars.firePos += setFireJump(scene5Vars.firePos)

  smoke(isDark = true);

  // Move door
  push();
  translate(164, 410);
  rotate(scene5Vars.doorRotate);
  fill(102, 0, 0);
  rect(0, 0, 100, 20);
  fill(255, 242, 0);
  ellipse(77, 26, 15, 14);
  pop();

  if (scene5Vars.doorRotate < -170) {
    image(hgCharacter, 150, scene5Vars.charPos);
    scene5Vars.charPos -= 2;
    if (scene5Vars.charPos < 0) {
      button();
    }
  } else {
    scene5Vars.doorRotate -= 1;
  }
};

let scene6 = function () {
  background(184, 184, 184);

  fire(127, scene6Vars.firePos + -70, 1, 14);
  fire(3, scene6Vars.firePos + -70, -15, -5);
  fire(254, scene6Vars.firePos + -70, -7, -1);
  scene6Vars.firePos += setFireJump(scene6Vars.firePos)

  smoke();

  image(hgCharacter, 150, scene6Vars.charPos);

  if (scene6Vars.charPos < 200) {
    // Textbox
    fill(255, 255, 255);
    triangle(194, 260, 235, 158, 160, 160);
    ellipse(235, 191, 296, 100);

    // Speech text
    fill(0, 0, 0);
    textSize(31);
    text("Oh no, I'm trapped!", 106, 201);

    button();
  } else {
    scene6Vars.charPos -= 2;
  }
};

let scene7 = function () {
  background(184, 184, 184);

  fire(127, -70 + scene7Vars.firePos, 1, 14);
  fire(3, -70 + scene7Vars.firePos, -15, -5);
  fire(254, -70 + scene7Vars.firePos, -7, -1);
  scene7Vars.firePos = setFireJump(scene7Vars.firePos)

  smoke();

  image(hgCharacter, 150, scene7Vars.charPos);

  if (!scene7Vars.goForward) {
    scene7Vars.charPosOffset = 1;
  }

  if (scene7Vars.charPos > 320) {
    scene7Vars.goForward = true;
    scene7Vars.charPosOffset -= 6;
  }

  scene7Vars.charPos += scene7Vars.charPosOffset;

  if (scene7Vars.charPos < 90) {
    background(184, 184, 184);

    // Sub text
    fill(255, 0, 0);
    textSize(18);
    text("*MAY NOT BE HISTORICALLY ACURATE", 20, 20);

    fire(29, 130, -15, -5);

    push();
    translate(250, 250);
    rotate(scene7Vars.rotate);
    scene7Vars.rotate -= 1;
    scene7Vars.rotateCharPos -= 1;
    image(hgCharacter, scene7Vars.rotateCharPos, 0);
    pop();

    if (scene7Vars.rotate < -360) {
      button();
    }
  }
};

let scene8 = function () {
  background(57, 19, 145);

  // House
  fill(166, 116, 116);
  rect(77, 100, 300, 200);
  fill(204, 161, 161);
  rect(33, 150, 44, 150);
  fill(171, 137, 137);
  rect(43, 157, 34, 142);
  fill(0, 0, 0);

  // Stairs
  rect(44, 181, 33, 3);
  rect(44, 194, 33, 3);
  rect(44, 208, 33, 3);
  rect(44, 220, 33, 3);
  rect(44, 236, 33, 3);
  rect(44, 250, 33, 3);
  rect(44, 264, 33, 3);
  rect(44, 278, 33, 3);
  rect(44, 292, 33, 3);

  // Garage
  rect(120, 216, 219, 85);
  fill(255, 255, 255);
  rect(130, 226, 199, 75);
  fill(0, 0, 0);
  rect(125, 222, 121, 3);
  rect(125, 236, 206, 3);
  rect(125, 250, 206, 3);
  rect(125, 264, 206, 3);
  rect(125, 278, 206, 3);
  rect(125, 292, 206, 3);

  // Windows
  fill(0, 0, 0);
  rect(108, 140, 99, 34);
  rect(242, 140, 120, 34);
  fill(163, 163, 163);
  rect(118, 145, 79, 24);
  rect(252, 145, 100, 24);

  // Streets
  rect(0, 299, 400, 200);

  // Fire
  push();
  scale(0.5, 0.5);
  fire(216, scene8Vars.firePos + 153, 16, -100);
  fire(538, scene8Vars.firePos + 114, -1, 291);
  fire(136, scene8Vars.firePos + 325, 16, -100);
  fire(644, scene8Vars.firePos + 304, 16, -100);
  scene8Vars.firePos += setFireJump(scene8Vars.firePos)
  pop();

  image(hgCharacter, scene8Vars.charPos, 150, 167, 285);

  if (scene8Vars.charPos > 150) {
    button();
  } else {
    scene8Vars.charPos += 6;
  }
};

let scene9 = function () {
  background(255, 255, 255);
  textSize(50);
  text("The Next Day...", 30, 200);
  button();
};

let scene10 = function () {
  // Continue to next after firefighter dialogue
  mousePressed = function () {
    if (mouseX >= 340 && mouseY <= 45) {
      scene10Vars.nextClicked = true;
    }
  };

  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW && scene10Vars.charPos >= 0) {
      scene10Vars.charPos -= 3;
    }
    if (keyCode === RIGHT_ARROW && scene10Vars.charPos <= 750) {
      scene10Vars.charPos += 3;
    }
  }

  if (scene10Vars.charPos <= 380) {
    background(177, 171, 255);

    // House
    fill(166, 116, 116);
    rect(77, 100, 300, 200);
    fill(204, 161, 161);
    rect(33, 150, 44, 150);
    fill(171, 137, 137);
    rect(43, 157, 34, 142);
    fill(0, 0, 0);

    // Stairs
    rect(44, 180, 33, 3);
    rect(44, 194, 33, 3);
    rect(44, 208, 33, 3);
    rect(44, 222, 33, 3);
    rect(44, 236, 33, 3);
    rect(44, 250, 33, 3);
    rect(44, 264, 33, 3);
    rect(44, 278, 33, 3);
    rect(44, 292, 33, 3);

    // Garage
    rect(120, 216, 219, 85);
    fill(255, 255, 255);
    rect(130, 226, 199, 75);
    fill(0, 0, 0);
    rect(125, 222, 121, 3);
    rect(125, 236, 206, 3);
    rect(125, 250, 206, 3);
    rect(125, 264, 206, 3);
    rect(125, 278, 206, 3);
    rect(125, 292, 206, 3);

    // Windows
    fill(0, 0, 0);
    rect(108, 140, 99, 34);
    rect(242, 140, 120, 34);
    fill(163, 163, 163);
    rect(118, 145, 79, 24);
    rect(252, 145, 100, 24);

    // Streets
    rect(0, 299, 400, 200);

    // Rubbble effect
    noStroke();
    fill(177, 171, 255);
    triangle(156, 290, 178, 149, 40, 40);
    triangle(347, 258, 178, 149, 373, 40);
    triangle(243, 242, 178, 72, 260, 81);
    triangle(165, 242, 96, 72, 260, 81);
    triangle(404, 242, 178, 193, 373, 22);

    image(ffCharacter, 21, 259);
    image(hgCharacter, scene10Vars.charPos, 124, 167, 285);

    // Firefighter text bubble
    fill(255, 255, 255);
    triangle(135, 289, 182, 128, 161, 160);
    ellipse(235, 84, 424, 158);
    fill(0, 0, 0);
    textSize(25);
    text("Firefighter:", 86, 53);
    textSize(20);

    // Switch between firefighter dialogue
    if (scene10Vars.nextClicked) {
      fill(0, 0, 0);
      text("We were able to retrieve some of your items though, they're to the right. (Move using your arrow keys)", 86, 64, 330, 89);
    } else {
      text("We tried the best we could, but your house couldn't be saved.", 86, 77, 322, 117);
      fill(0, 0, 0);
      rect(340, 0, 60, 45, 21);
      fill(132, 147, 209);
      rect(345, 5, 50, 35, 16);
      fill(0, 0, 0);
      textSize(16);
      text("Next", 354, 27);
    }

    if (scene10Vars.charPos < 10) {
      fill(255, 255, 255);
      triangle(135, 289, 182, 128, 161, 160);
      ellipse(235, 84, 424, 158);
      fill(0, 0, 0);
      textSize(30);
      text("Stop, it's dangerous to go any further.", 50, 58, 417, 234);
    }

  } else {
    background(177, 171, 255);

    // Streets
    fill(163, 163, 163);
    rect(0, 299, 400, 200);

    // Draw objects
    tea(0, 0);
    mcintosh(0, 0);
    go(0, 0);

    // Draw tool tips for tea
    if (scene10Vars.charPos > 390 && scene10Vars.charPos < 448) {
      scene10Vars.teaSeen = true;
      fill(255, 255, 255);
      rect(0, 0, 400, 100, 80);
      fill(0, 0, 0);
      textSize(20);
      text("Tea", 179, 20);
      textSize(15);
      text("I like drinking tea. I especially like green tea.", 100, 62);
      tea(40, 230);
    }

    // Draw tool tips for mcintosh
    if (scene10Vars.charPos > 499 && scene10Vars.charPos < 595) {
      scene10Vars.mctSeen = true;
      fill(255, 255, 255);
      rect(0, 0, 400, 100, 80);
      fill(0, 0, 0);
      textSize(20);
      text("Music", 179, 20);
      textSize(14);
      text("I like listening to music on my Mcintosh stereo system. I especially like jazz, classic, and metal. (Not the apple Macintosh.)", 133, 23, 223, 400);
      mcintosh(160, 235);
    }

    // Draw tool tips for go
    if (scene10Vars.charPos > 610 && scene10Vars.charPos < 746) {
      scene10Vars.gobSeen = true;
      fill(255, 255, 255);
      rect(0, 0, 400, 100, 80);
      fill(0, 0, 0);
      textSize(20);
      text("Go Game", 179, 20);
      textSize(15);
      text("I like playing the 'igo' or 'go' board game. It is an old strategic game.", 139, 43, 223, 400);
      go(263, 247);
    }

    image(hgCharacter, scene10Vars.charPos - 400, 124, 167, 285);

    if (scene10Vars.teaSeen && scene10Vars.mctSeen && scene10Vars.gobSeen) {
      button();
    }
  }
};

let scene11 = function () {
  background(32, 67, 128);
  image(frCharacter, 24, 112);

  // Text bubble
  noStroke()
  fill(255, 255, 255);
  triangle(116, 158, 115, 40, 161, 23);
  ellipse(133, 19, 424, 158);

  // Friend speech
  fill(0, 0, 0);
  textSize(20);
  text("Friend:", 20, 20);

  // Friend speech content
  if (scene11Vars.nextClicked) {
    textSize(15);
    text("I heard your house burnt down... That must've been horrible...", 20, 32, 256, 500);
    fill(0, 0, 0);
    rect(340, 0, 60, 45, 21);
    fill(132, 147, 209);
    rect(345, 5, 50, 35, 16);
    fill(0, 0, 0);
    textSize(16);
    text("Next", 354, 27);
  } else {
    textSize(15);
    text("Here, have a meal, you should rest up. (Choose Hiroya's favorite dish)", 21, 32, 256, 500);
  }

  mousePressed = function () {
    if (mouseX >= 340 && mouseY <= 45) {
      scene11Vars.nextClicked = true;
    }
    if (scene11Vars.canSelect && mouseX >= 128 && mouseX <= 256 && mouseY >= 156 && mouseY <= 210) {
      scene++;
    }
  };

  fill(255, 255, 255);

  steak(0, 0);
  hotdog(0, 0);
  image(hgCharacter, scene11Vars.charPos, 205, 114, 200);

  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW && scene11Vars.charPos > -50) {
      scene11Vars.charPos -= 3;
    }
    if (keyCode === RIGHT_ARROW && scene11Vars.charPos < 350) {
      scene11Vars.charPos += 3;
    }
  }

  if (scene11Vars.charPos > 200) {
    scene11Vars.canSelect = true;
    scene11Vars.selectedHotdog = true;
    fill(255, 255, 255);
    rect(-12, -25, 415, 181, 80);
    hotdog(-232, -224);
    textSize(34);
    fill(0, 0, 0);
    text("Hot Dog", 133, 39);
    textSize(20);
    text("A cooked sausage in between some bread.", 139, 70, 260, 104);
    fill(0, 255, 51);
    rect(128, 156, 128, 54, 10);
    fill(0, 0, 0);
    text("CHOOSE", 149, 185);
  } else if (scene11Vars.charPos < 120) {
    scene11Vars.canSelect = true;
    scene11Vars.selectedHotdog = false;
    fill(255, 255, 255);
    rect(-12, -25, 415, 181, 80);
    steak(-23, -222);
    textSize(34);
    fill(0, 0, 0);
    text("Steak", 133, 39);
    textSize(20);
    text("New York steak with some vegetables.", 139, 70, 260, 104);
    fill(0, 255, 51);
    rect(128, 156, 128, 54, 10);
    fill(0, 0, 0);
    text("CHOOSE", 149, 185);
  } else {
    scene11Vars.canSelect = false;
  }
};

let scene12 = function () {
  scene12Vars.selectedHotdog = scene11Vars.selectedHotdog;

  background(32, 67, 128);
  image(hgCharacter, -147, -444, 698, 1132);
  fill(0, 0, 0);
  rect(152, 300, 100, scene12Vars.mouthHeight, 10);
  ellipse(81, 255, 53, 53);
  ellipse(340, 255, 53, 53);
  fill(255, 255, 255);
  ellipse(72, 245, 20, 20);
  ellipse(328, 245, 20, 20);

  if (scene12Vars.selectedHotdog) {
    hotdog(scene12Vars.foodPos - 377, 42);
  } else {
    steak(scene12Vars.foodPos - 168, 42);
  }

  if (scene12Vars.mouthHeight > 93) {
    if (scene12Vars.foodPos > 284) {
      button();
    } else {
      scene12Vars.foodPos += 3;
    }
  } else {
    scene12Vars.mouthHeight += 1;
  }
};

let scene13 = function () {
  scene13Vars.selectedHotdog = scene12Vars.selectedHotdog;

  background(32, 67, 128);
  image(frCharacter, 24, 112);
  image(hgCharacter, 200, 205, 114, 200);

  fill(255, 255, 255);
  noStroke();
  ellipse(274, 253, 20, 20);
  ellipse(290, 201, 40, 40);
  ellipse(304, 130, 50, 50);
  ellipse(240, 74, 324, 137);

  fill(0, 0, 0);
  textSize(20);
  if (scene13Vars.selectedHotdog) {
    text("Wow I hate hotdogs, why did I even eat this??", 115, 55, 302, 67);
    textSize(35);
    fill(255, 0, 0);
    text("WRONG CHOICE", 53, 389);
  } else {
    text("Damn, I love steak so much more than hotdogs. ", 115, 55, 302, 67);
    textSize(35);
    fill(13, 255, 0);
    text("CORRECT CHOICE", 53, 389);
  }

  button();
};

var scene14 = function () {
  switch (scene14Vars.state) {
    case 0:
      background(235, 235, 235);
      textSize(46);
      fill(0, 13, 255);
      text("NEW HOUSE", 37, 49);
      fill(77, 0, 0);
      triangle(51, 218, 352, 217, 198, 141);
      fill(107, 0, 0);
      rect(61, 218, 277, 151);
      fill(158, 0, 0);
      rect(149, 261, 65, 108);
      fill(217, 255, 0);
      ellipse(195, 313, 10, 10);
      fill(138, 138, 138);
      rect(0, 365, 400, 400);
      image(hgCharacter, scene14Vars.charPos, 244);

      if (scene14Vars.nextClicked) {
        // Start moving character forward
        scene14Vars.charPos += 1;
      } else {
        // Display next button
        fill(0, 0, 0);
        rect(340, 0, 60, 45, 21);
        fill(132, 147, 209);
        rect(345, 5, 50, 35, 16);
        fill(0, 0, 0);
        textSize(16);
        text("Next", 354, 27);

        mousePressed = function () {
          if (mouseX >= 340 && mouseY <= 45) {
            scene14Vars.nextClicked = true;
          }
        };
      }

      // Start side scroll
      if (scene14Vars.charPos >= 130) {
        scene14Vars.charPos = 130;
        fill(0, 0, 0);
        rect(scene14Vars.sidescroll, 0, 400, 400);
        scene14Vars.sidescroll -= 5;
      }

      // Go to next state
      if (scene14Vars.sidescroll <= 0) {
        scene14Vars.state = 1;
      }
      break;
    case 1:
      background(255, 255, 255);

      // Platforms for yourself and enemy
      stroke(0, 0, 0);
      strokeWeight(4);
      fill(255, 255, 255);
      ellipse(292, 214, 151, 51);
      ellipse(110, 286, 163, 51);

      // Skunk descriptor
      noStroke();
      fill(0, 0, 0);
      textSize(18);
      text("Level 79 Skunk", 200, 49);

      // Player
      image(hgCharacter, scene14Vars.hgCharPosX, scene14Vars.hgCharPosY);
      image(wgCharacter, scene14Vars.wgCharPosX, scene14Vars.wgCharPosY);

      // Skunk
      stroke(0, 0, 0);
      strokeWeight(4);
      push();
      rotate(scene14Vars.skunkRot);
      translate(0, scene14Vars.skunkPos);
      skunk();
      pop();

      if (scene14Vars.sidescroll <= -400) {
        fill(255, 255, 255);
        rect(0, 323, 399, 73, 20);

        // Health bar
        fill(0, 0, 0);
        rect(190, 64, 170, 20, 20);
        rect(20, 129, 151, 20, 20);
        fill(0, 255, 17);
        rect(190, 64, scene14Vars.skunkHealth, 20, 20);
        rect(20, 129, scene14Vars.hgCharHealth, 20, 20);
        fill(0, 0, 0);

        // Character label
        noStroke()
        textSize(15);
        if (scene14Vars.hgCharSelected) {
          text("Level 15 Hiroya", 26, 116);
        } else {
          text("Level 19 Sister", 26, 116);
        }

        // Initial encounter message
        if (scene14Vars.textNum === 0) {
          fill(0, 0, 0);
          text("A wild skunk appeared!", 14, 352);

          // Next button
          noStroke();
          fill(0, 0, 0);
          rect(340, 0, 60, 45, 21);
          fill(132, 147, 209);
          rect(345, 5, 50, 35, 16);
          fill(0, 0, 0);
          textSize(16);
          text("Next", 354, 27);

          // Start game
          if (mouseIsPressed && mouseX >= 340 && mouseY <= 45) {
            scene14Vars.textNum = 1;
          }
        }

        // Selection screen
        if (scene14Vars.textNum === 1) {
          scene14Vars.skunkAct = 0;
          scene14Vars.rocksThrown = false;

          if (scene14Vars.hgCharSelected) {
            fill(0, 0, 0);
            text("What will HIROYA do?", 14, 352);

            // Reset rock attack position
            fill(153, 0, 0);
            ellipse(scene14Vars.rocksPosX, scene14Vars.rocksPosY, 20, 20);
            ellipse(scene14Vars.rocksPosX - 10, scene14Vars.rocksPosY, 20, 20);
          } else {
            fill(0, 0, 0);
            text("What will SISTER do?", 14, 352);
          }

          selectionbox();

          noStroke()
          text("Attack", 241, 345);
          text("Bag", 333, 345);
          text("Pokemon", 241, 382);
          text("Run", 333, 382);

          if (mouseIsPressed) {
            // Attack
            if (mouseX >= 212 && mouseX <= 305 && mouseY >= 321 && mouseY <= 358) {
              scene14Vars.select = 1;
              scene14Vars.textNum = 2;
            }

            // Bag
            if (mouseX >= 306 && mouseX <= 400 && mouseY >= 321 && mouseY <= 359) {
              scene14Vars.select = 2;
              scene14Vars.textNum = 2;
            }

            // Pokemon
            if (mouseX >= 212 && mouseX <= 305 && mouseY >= 359 && mouseY <= 400) {
              if (scene14Vars.sisterFaintedNextClicked) {
                scene14Vars.select = 5;
              } else {
                scene14Vars.select = 3;
                scene14Vars.textNum = 2;
              }
            }

            // Run
            if (mouseX >= 306 && mouseX <= 400 && mouseY >= 359 && mouseY <= 400) {
              scene14Vars.select = 4;
              scene14Vars.textNum = 2;
            }
          }
        }

        // Action selected
        if (scene14Vars.textNum === 2) {
          // Attack
          if (scene14Vars.select === 1) {
            if (!scene14Vars.hgCharSelected) {
              fill(255, 255, 255);
              rect(0, 323, 399, 73, 20);
              fill(0, 0, 0);
              text("The Skunk used hyper beam!", 25, 349);
              fill(17, 0, 255);
              scene14Vars.skunkBeamPos -= 29;
              push();
              rotate(-29);
              rect(106, 260, scene14Vars.skunkBeamPos, 33);
              pop();

              noStroke();
              fill(0, 0, 0);
              rect(340, 0, 60, 45, 21);
              fill(132, 207, 144);
              rect(345, 5, 50, 35, 16);
              fill(0, 0, 0);
              textSize(16);
              text("Next", 354, 27);
              stroke(0, 0, 0);

              // Sister faints
              if (mouseIsPressed && mouseX >= 340 && mouseY <= 45) {
                scene14Vars.textNum = 4;
              }
            } else {
              if (scene14Vars.fossilState === 0) {
                fill(0, 0, 0);
                text("HIROYA used THROW ROCKS.", 26, 346);
                fill(122, 0, 0);
                ellipse(scene14Vars.rocksPosX, scene14Vars.rocksPosY, 20, 20);
                ellipse(scene14Vars.rocksPosX - 10, scene14Vars.rocksPosY, 20, 20);
                scene14Vars.rocksPosX += 4;
                scene14Vars.rocksPosY -= 4;
                if (scene14Vars.rocksPosX >= 473) {
                  scene14Vars.rocksThrown = true;
                }
                if (scene14Vars.rocksThrown) {
                  if (scene14Vars.skunkHealth === 170) {
                    scene14Vars.skunkAct = 1;
                    scene14Vars.rocksThrown = false;
                  }
                  if (scene14Vars.skunkHealth === 150) {
                    scene14Vars.skunkAct = 2;
                    scene14Vars.rocksThrown = false;
                  }
                }

                if (scene14Vars.skunkAct === 1) {
                  scene14Vars.rocksPosX = 138;
                  scene14Vars.rocksPosY = 282;
                  scene14Vars.rocksThrown = false;
                  scene14Vars.skunkHealth = 150;
                  fill(255, 255, 255);
                  rect(0, 323, 399, 73, 20);
                  fill(0, 0, 0);
                  text("SKUNK used POISON GAS.", 17, 357);
                  fill(208, 98, 214);
                  noStroke();
                  ellipse(349 + scene14Vars.gasPosX, 179 + scene14Vars.gasPosY, 64, 59);
                  ellipse(281 + scene14Vars.gasPosX, 227 + scene14Vars.gasPosY, 64, 59);
                  ellipse(319 + scene14Vars.gasPosX, 168 + scene14Vars.gasPosY, 64, 59);
                  ellipse(280 + scene14Vars.gasPosX, 122 + scene14Vars.gasPosY, 64, 59);

                  scene14Vars.gasPosX -= 1;
                  scene14Vars.gasPosY += 1;
                  stroke(0, 0, 0);

                  if (scene14Vars.gasPosX < -152) {
                    scene14Vars.hgCharHealth -= 40;
                    scene14Vars.rocksPosX = 138;
                    scene14Vars.rocksPosY = 282;
                    scene14Vars.gasPosX = 0;
                    scene14Vars.gasPosY = 0;
                    scene14Vars.textNum = 1;
                  }
                }

                if (scene14Vars.skunkAct === 2) {
                  scene14Vars.rocksPosX = 138;
                  scene14Vars.rocksPosY = 282;
                  scene14Vars.rocksThrown = false;
                  scene14Vars.skunkHealth = 130;

                  stroke(0, 0, 0)
                  strokeWeight(4)
                  fill(255, 255, 255);
                  rect(0, 323, 399, 73, 20);

                  noStroke()
                  fill(0, 0, 0);
                  text("SKUNK used SCAVENGE! Health restored to 100%.", 17, 357);
                  scene14Vars.skunkRot -= 1;
                  if (scene14Vars.skunkRot < -10) {
                    scene14Vars.skunkRot += 9;
                  }

                  noStroke();
                  fill(0, 0, 0);
                  rect(340, 0, 60, 45, 21);
                  fill(132, 207, 144);
                  rect(345, 5, 50, 35, 16);
                  fill(0, 0, 0);
                  textSize(16);
                  text("Next", 354, 27);
                  stroke(0, 0, 0);

                  if (mouseIsPressed && mouseX >= 340 && mouseY <= 45) {
                    scene14Vars.skunkRot = 0;
                    scene14Vars.skunkHealth = 170;
                    scene14Vars.rocksThrown = false;
                    scene14Vars.textNum = 1;
                  }
                }
              }

              if (scene14Vars.fossilState === 2) {
                fill(0, 0, 0);
                text("HIROYA used THROW ROCKS.", 26, 346);
                fill(122, 0, 0);
                ellipse(scene14Vars.rocksPosX, scene14Vars.rocksPosY, 20, 20);
                ellipse(scene14Vars.rocksPosX - 10, scene14Vars.rocksPosY, 20, 20);
                scene14Vars.rocksPosX += 4;
                scene14Vars.rocksPosY -= 4;
                if (scene14Vars.rocksPosX >= 473) {
                  scene14Vars.skunkHealth -= 5;
                  if (scene14Vars.skunkHealth <= 0) {
                    scene14Vars.skunkHealth = 0;
                    scene14Vars.skunkPos += 10;
                  }
                }
              }
            }
          }

          // Bag
          if (scene14Vars.select === 2) {
            fill(255, 255, 255);
            stroke(0, 0, 0);
            rect(20, 20, 360, 360);
            fill(0, 0, 0);
            textSize(25);

            noStroke()
            text("Inventory", 149, 45);
            text("Go Board Game", 33, 160);
            text("Tea", 33, 196);
            text("Stereo System", 33, 246);
            text("Helix Fossil", 33, 290);

            stroke(0, 0, 0);
            fill(0, 219, 0);
            rect(279, 183, 100, 33, 20);
            rect(279, 141, 100, 33, 20);
            rect(279, 222, 100, 33, 20);
            rect(279, 262, 100, 33, 20);
            fill(0, 0, 0);

            noStroke()
            text("USE", 295, 165);
            text("USE", 295, 206);
            text("USE", 295, 252);
            text("USE", 295, 288);

            fill(0, 0, 0);
            rect(340, 0, 60, 45, 21);
            fill(132, 207, 144);
            rect(345, 5, 50, 35, 16);
            fill(0, 0, 0);
            textSize(16);
            text("Back", 354, 27);
            stroke(0, 0, 0);

            if (mouseIsPressed) {
              if (mouseX >= 340 && mouseY <= 45) {
                scene14Vars.select = 0;
                scene14Vars.textNum = 1;
              }

              if (mouseX >= 279 && mouseX <= 379 && mouseY >= 143 && mouseY <= 260) {
                scene14Vars.textNum = 3;
              }

              if (mouseX >= 279 && mouseX <= 379 && mouseY >= 261 && mouseY <= 302 && scene14Vars.fossilState === 0) {
                scene14Vars.select = 0;
                scene14Vars.textNum = 1;
                scene14Vars.fossilState = 1;
              }
              if (mouseX >= 279 && mouseX <= 379 && mouseY >= 261 && mouseY <= 302 && scene14Vars.fossilState === 2) {
                scene14Vars.fossilState = 3;
              }
            }
          }

          // Pokemon
          if (scene14Vars.select === 3) {
            fill(255, 255, 255);
            stroke(0, 0, 0);
            rect(20, 20, 360, 360);

            fill(0, 0, 0);
            noStroke()
            textSize(25);
            text("Pokemon", 149, 45);

            line(380, 60, 20, 60);
            line(140, 59, 140, 378);

            noStroke()
            text("Sister", 50, 91);
            image(wgCharacter, 29, 42);
            text("Level 19", 37, 204);
            text("Sister", 154, 91);
            textSize(15);
            text("A rare specimen of Homo erectus species descending from the Gojo dynasty.", 152, 117, 229, 187);

            stroke(0, 0, 0)
            fill(170, 0, 255);
            rect(232, 69, 102, 30);
            fill(255, 255, 255);
            text("DRAGON", 248, 88);
            fill(23, 173, 0);
            rect(269, 153, 99, 48, 20);
            fill(255, 255, 255);
            text("CHOOSE", 285, 182);

            noStroke();
            fill(0, 0, 0);
            rect(340, 0, 60, 45, 21);
            fill(132, 207, 144);
            rect(345, 5, 50, 35, 16);
            fill(0, 0, 0);
            textSize(16);
            text("Back", 354, 27);
            stroke(0, 0, 0);
            if (mouseIsPressed) {
              if (mouseX >= 340 && mouseY <= 45) {
                scene14Vars.select = 0;
                scene14Vars.textNum = 1;
              }
              if (mouseX >= 269 && mouseX <= 368 && mouseY >= 153 && mouseY <= 201) {
                scene14Vars.select = 0;
                scene14Vars.textNum = 1;
                scene14Vars.wgCharPosX = 62;
                scene14Vars.hgCharPosX = -150;
                scene14Vars.hgCharSelected = false;
              }
            }

          }

          // Run
          if (scene14Vars.select === 4) {
            stroke(0, 0, 0)
            strokeWeight(4)
            fill(255, 255, 255);
            rect(0, 323, 399, 73, 20);

            fill(0, 0, 0);
            noStroke()
            text("The real estate prices are too high! You can't escape!", 16, 358);

            fill(0, 0, 0);
            rect(340, 0, 60, 45, 21);
            fill(132, 207, 144);
            rect(345, 5, 50, 35, 16);
            fill(0, 0, 0);
            textSize(16);
            text("Back", 354, 27);
            stroke(0, 0, 0);
            if (mouseIsPressed && mouseX >= 340 && mouseY <= 45) {
              scene14Vars.select = 0;
              scene14Vars.textNum = 1;
            }
          }
        }

        // Item can't be used
        if (scene14Vars.textNum === 3) {
          fill(255, 255, 255);
          scene14Vars.select = 0;
          rect(0, 323, 399, 73, 20);
          fill(0, 0, 0);
          textSize(16);
          text("Oak's words echoed..._____! There's a time and place for everything! But not now.", 14, 344, 373, 40);
          fill(0, 0, 0);
          noStroke();
          rect(340, 0, 60, 45, 21);
          fill(132, 207, 144);
          rect(345, 5, 50, 35, 16);
          fill(0, 0, 0);
          textSize(16);
          text("Back", 354, 27);
          stroke(0, 0, 0);
          if (mouseIsPressed && mouseX >= 340 && mouseY <= 45) {
            scene14Vars.textNum = 1;
          }
        }

        // Sister faints
        if (scene14Vars.textNum === 4) {
          rect(20, 129, 150, 20, 20);
          rect(20, 129, scene14Vars.wgCharHealth, 20, 20);
          scene14Vars.wgCharHealth -= 2;
          if (scene14Vars.wgCharHealth < 0) {
            scene14Vars.wgCharHealth = 0;
          }
          scene14Vars.wgCharPosY += 5;
          fill(0, 0, 0);
          text("That was super effective! SISTER fainted..", 27, 346, 206, 140);
          if (mouseIsPressed && mouseX >= 340 && mouseY <= 45) {
            scene14Vars.sisterFaintedNextClicked = true;
          }
          if (scene14Vars.sisterFaintedNextClicked) {
            scene14Vars.hgCharPosX += 1;
            if (scene14Vars.hgCharPosX >= 62) {
              scene14Vars.hgCharPosX = 62;
              scene14Vars.hgCharSelected = true;
              scene14Vars.textNum = 1;
            }
          }
        }

        // Sister already fainted
        if (scene14Vars.select === 5) {
          fill(255, 255, 255);
          rect(0, 323, 399, 73, 20);
          fill(0, 0, 0);
          text("No more pokemon left!", 27, 346);
          noStroke();
          rect(340, 0, 60, 45, 21);
          fill(132, 207, 144);
          rect(345, 5, 50, 35, 16);
          fill(0, 0, 0);
          textSize(16);
          text("Next", 354, 27);
          stroke(0, 0, 0);
          if (mouseX >= 340 && mouseY <= 45 && mouseIsPressed) {
            scene14Vars.select = 0;
          }
        }

        // Hiroya faints
        if (scene14Vars.hgCharHealth <= 0) {
          scene14Vars.hgCharHealth = 0;
          scene14Vars.hgCharPosY += 5;

          if (scene14Vars.hgCharPosY > 415) {
            scene14Vars.state = 3;
          }
        }

        if (scene14Vars.fossilState === 1) {
          fill(255, 255, 255);
          rect(0, 323, 399, 73, 20);
          fill(0, 0, 0);
          text("The Helix Fossil has granted you power!", 17, 351);
          fill(179, 97, 97);
          ellipse(344 - 10, 368 + scene14Vars.fossilPos, 75, 20);
          ellipse(323 - 10, 364 + scene14Vars.fossilPos, 94, 45);
          ellipse(319 - 10, 357 + scene14Vars.fossilPos, 75, 20);
          ellipse(313 - 10, 368 + scene14Vars.fossilPos, 75, 20);
          ellipse(324 - 10, 378 + scene14Vars.fossilPos, 75, 20);
          ellipse(344 - 10, 368 + scene14Vars.fossilPos, 75, 20);
          ellipse(344 - 10, 358 + scene14Vars.fossilPos, 62, 20);
          ellipse(344 - 10, 349 + scene14Vars.fossilPos, 46, 20);

          scene14Vars.fossilPos -= 3;
          if (scene14Vars.fossilPos <= -179) {
            scene14Vars.fossilPos = -179;
            scene14Vars.skunkHealth -= 10;
            if (scene14Vars.skunkHealth <= 10) {
              scene14Vars.skunkHealth = 10;
              scene14Vars.fossilState = 2;
            }
          }
        }

        if (scene14Vars.fossilState === 3) {
          stroke(0, 0, 0)
          strokeWeight(4)
          fill(255, 255, 255);
          rect(0, 323, 399, 73, 20);

          noStroke()
          fill(0, 0, 0);
          text("Helix Fossil's effect has run out!", 17, 351);
          noStroke();
          rect(340, 0, 60, 45, 21);
          fill(132, 207, 144);
          rect(345, 5, 50, 35, 16);
          fill(0, 0, 0);
          textSize(16);
          text("Back", 354, 27);
          stroke(0, 0, 0);
          if (mouseIsPressed && mouseX >= 340 && mouseY <= 45) {
            scene14Vars.fossilState = 2;
          }
        }

        // Game won
        if (scene14Vars.skunkPos >= 292) {
          scene14Vars.state = 2;
        }

      } else {
        // Move sidescroll past screen
        fill(0, 0, 0);
        rect(scene14Vars.sidescroll, 0, 400, 400);
        scene14Vars.sidescroll -= 5;
      }
      break;
    case 2:
      background(83, 0, 110);
      fill(255, 255, 255);
      textSize(31);
      text("You Won", 139, 213);
      fill(255, 255, 255);
      textSize(47);
      text("Game Completed!", 7, 100);
      textSize(20);
      text("Good Ending", 13, 381);
      image(hgCharacter, 154, 182);

      push();
      scale(0.25, 0.25);
      translate(171, 908);
      flag();
      pop();
      break;
    case 3:
      background(83, 0, 110);
      fill(255, 255, 255);
      textSize(31);
      text("YOU DIED", 126, 213);
      fill(255, 255, 255);
      textSize(47);
      text("GAME OVER", 70, 100);
      textSize(20);
      text("Bad Ending", 13, 381);

      push();
      translate(-65, 116);
      skunk();
      pop();
      break;
  }
};

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  scene = 0;

  hgCharacter = loadImage("images/CharacterBoy.png")
  wgCharacter = loadImage("images/CharacterPinkGirl.png")
  ffCharacter = loadImage("images/marcimus.png")
  frCharacter = loadImage("images/mr-pants.png")

  smokeVars = {
    xpos: [200],
    ypos: [0],
  }

  scene1Vars = {

  }

  scene2Vars = {
    scrollingText: 212,
    topEyelid: 175,
    botEyelid: 175,
  }

  scene3Vars = {
    charPos: 200,
  }

  scene4Vars = {
    scale: 1,
    charPos: 221,
    charScale: 250,
    textDelay: 0,
    translate: 0,
  }

  scene5Vars = {
    firePos: 0,
    doorRotate: 0,
    charPos: 373,
  }

  scene6Vars = {
    firePos: 0,
    charPos: 373,
  }

  scene7Vars = {
    firePos: 0,
    goForward: false,
    charPos: 200,
    charPosOffset: 0,
    rotate: 0,
    rotateCharPos: 0,
  }

  scene8Vars = {
    firePos: 0,
    charPos: -800,
  }

  scene9Vars = {

  }

  scene10Vars = {
    charPos: 150,
    nextClicked: false,

    teaSeen: false,
    mctSeen: false,
    gobSeen: false,
  }

  scene11Vars = {
    charPos: 140,
    canSelect: false,
    nextClicked: false,
    selectedHotdog: true,
  }

  scene12Vars = {
    selectedHotdog: true,

    foodPos: 0,
    mouthHeight: 20,
  }

  scene13Vars = {
    selectedHotdog: true,
  }

  scene14Vars = {
    state: 0,
    select: 0,
    textNum: 0,

    charPos: 0,
    nextClicked: false,
    sidescroll: 400,
    hgCharSelected: true,

    hgCharPosX: 62,
    hgCharPosY: 149,
    wgCharPosX: -120,
    wgCharPosY: 150,

    skunkHealth: 170,
    hgCharHealth: 150,
    wgCharHealth: 150,

    rocksThrown: false,
    rocksPosX: 138,
    rocksPosY: 282,

    skunkPos: 0,
    skunkRot: 0,
    skunkAct: 0,
    skunkBeamPos: 0,
    gasPosX: 0,
    gasPosY: 0,

    fossilState: 0,
    fossilPos: 0,
    sisterFaintedNextClicked: false,
  }
}

function draw() {
  mousePressed = function () { }
  switch (scene) {
    case 0: scene0(); break;
    case 1: scene1(); break;
    case 2: scene2(); break;
    case 3: scene3(); break;
    case 4: scene4(); break;
    case 5: scene5(); break;
    case 6: scene6(); break;
    case 7: scene7(); break;
    case 8: scene8(); break;
    case 9: scene9(); break;
    case 10: scene10(); break;
    case 11: scene11(); break;
    case 12: scene12(); break;
    case 13: scene13(); break;
    case 14: scene14(); break;
  }
}