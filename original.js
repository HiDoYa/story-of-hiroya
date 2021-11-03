// Original written in Khan Academy with Processing.js

var x = 10;
var scene;
var aep = 212;
var loc = 200;
var fainta = 150;
var faintb = 150;
var gasx = 0;
var gasy = 0;
var xpos = [200];
var ypos = [0];
var fossil = 0;
var fosul = 0;
var lolok = 0;
var DUCK = 0;
var HYPERMEGASUPERULTRABEAM = 0;
var asdfasdf = 221;
var seta = 175;
var camus = 0;
var roks = 0;
var ates = 175;
var act = 0;
var kek = 0;
var one = 160;
var two = 90;
var feyl = 0;
var zone = 1;
var effected = 0;
var tardo = 250;
var uck = 1;
var translot = 0;
var movie = 0;
var i = 0;
var lem = 2;
var lemon = 2;
var char = 373;
var shar = 373;
var chand = 200;
var rat = 0;
var MOVEDAMMIT = 0;
var zen = 0;
var roksx = 138;
var roksy = 282;
var beast = -800;
var laissez = 0;
var fair = 0;
var potents = 0;
var healtha = 170;
var healthb = 150;
var healthc = 150;
var speed = 0;
var wak = -120;
var hir = 62;
var hiry = 149;
var mad = 0;
var truman = 1;
var sect = 0;
var noes = 150;
var policy = 140;
var royahi = getImage("cute/CharacterBoy");
var dog = 0;
var zee = 0;
var sidescroll = 400;
var mouth1 = 40;
var mouth2 = 20;
var select = 0;
var useful = 0;
var textnum = 0;
var t1 = 0;
var t2 = 0;
var t3 = 0;
var POKEMAN = function () {
  fill(255, 255, 255);
  rect(212, 322, 190, 75, 24);
  line(308, 324, 308, 395);
  line(403, 358, 216, 358);
  fill(0, 0, 0);
};
var skunk = function () {
  fill(0, 0, 0);
  ellipse(231, 186, 58, 46);
  ellipse(278, 182, 97, 46);
  pushMatrix();
  rotate(-44);
  ellipse(131, 346, 93, 32);
  popMatrix();
  fill(255, 255, 255);
  pushMatrix();
  rotate(5);
  ellipse(300, 148, 97, 15);
  popMatrix();
  stroke(0, 0, 0);
  strokeWeight(3);
  ellipse(224, 165, 15, 20);
  ellipse(210, 170, 15, 20);
  fill(0, 0, 0);
  ellipse(228, 166, 5, 5);
  ellipse(211, 165, 5, 5);
  triangle(259, 226, 279, 187, 243, 192);
  triangle(321, 226, 319, 187, 271, 192);
};
var steak = function (x, y) {
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
var hotdog = function (x, y) {
  fill(255, 255, 255);
  ellipse(298 + x, 301 + y, 130, 89);
  ellipse(297 + x, 304 + y, 70, 54);
  fill(153, 55, 55);
  rect(252 + x, 283 + y, 85, 36, 10);
  fill(255, 0, 0);
  rect(246 + x, 285 + y, 97, 16, 10);
};
var thescenes = function () {
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
  image(royahi, mad, 244);
};
var tea = function (x, y) {
  fill(0, 105, 25);
  ellipse(100 - x, 254 - y, 57, 20);
  ellipse(100 - x, 321 - y, 57, 20);
  rect(70 - x, 253 - y, 57, 70);
  fill(82, 255, 122);
  ellipse(100 - x, 254 - y, 48, 9);
};
var go = function (x, y) {
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
var mcintosh = function (x, y) {
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
var smoke = function () {
  fill(133, 133, 133);
  noStroke();

  for (var i = 0; i < ypos.length; i++) {
    fill(133, 126, 133);
    ellipse(xpos[i], ypos[i], 37, 36);
    if (ypos[i] < 0) {
      ypos[i] += 450;
      xpos[i] += 450;
    }
    else {
      ypos[i] -= 3;
      xpos[i] -= 3;
    }
  }

  while (xpos.length < 25) {
    xpos.push(random(1, 500));
    ypos.push(random(1, 500));
  }
};
var flag = function () {
  fill(82, 0, 0);
  rect(x - 2, x, 20, 400);
  fill(240, 240, 240);
  rect(x + 10, x + 10, 340, 220);
  fill(255, 0, 0);
  ellipse(x + 170, x + 120, 100, 100);
};
var button = function () {
  fill(0, 0, 0);
  rect(340, 0, 60, 45, 21);
  fill(132, 147, 209);
  rect(345, 5, 50, 35, 16);
  fill(0, 0, 0);
  textSize(16);
  text("Next", 354, 27);
  kek = 1;
};
var fire = function (x, y, z, a) {
  noStroke();
  //flames
  fill(255, 242, 0);
  ellipse(x + 70, y + 200, 110, 150);
  fill(255, 0, 0);
  ellipse(x + 70, y + 200, 80, 100);
  fill(184, 184, 184);
  //blanks
  ellipse(x + two - a, y + one - z, 70, 80);
  ellipse(x + two - 45, y + one - 10, 52, 61);
};



//0+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene0 = function () {
  x = 10;
  aep = 212;
  loc = 200;

  scene = 0;
  draw = function () {
    background(189, 234, 255);
    fill(255, 255, 255);
    rect(x + -24, x + -22, 262, 108);
    fill(0, 0, 0);
    textSize(20);
    text("Once upon the Heisei Era, there was a kid named Hiroya.", 7, 18, 257, 300);
    textSize(150);
    pushMatrix();
    rotate(31);
    text("篤 八", 265, -85, 168, 518);
    popMatrix();
    image(royahi, 10, 155);

    button();
  };
};

//1+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene1 = function () {
  scene = 1;
  draw = function () {

    noStroke();


    //Background
    background(255, 255, 255);
    fill(255, 0, 0);
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


    flag();

    textSize(44);
    fill(0, 107, 4);
    rect(0, 350, 400, 50);
    fill(255, 255, 255);
    text("He was Japanese.", 23, 388);
    button();

    image(royahi, 304, 209);
  };
};

//2+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene2 = function () {
  scene = 2;
  kek = 0;
  draw = function () {
    background(173, 173, 173);
    fill(112, 0, 0);
    rect(13, 59, 369, 400, 20);
    textSize(21);
    text("One day, Hiroya was sleeping when...", 5, 52);
    //pillow
    fill(230, 230, 230);
    rect(67, 76, 249, 157, 48);

    //royahi
    image(royahi, 78, -53, 207, 376);

    //bed
    fill(255, 255, 255);
    rect(30, 200, 330, 327, 10);
    fill(255, 0, 0);
    rect(48, 214, 285, 217);
    fill(255, 0, 255);
    textSize(64);
    text("z z z z z z z z z", aep, 94);
    aep += 1;


    fill(0, 0, 0);
    rect(132, seta, 30, 6);
    rect(132, ates, 30, 5);

    rect(206, seta, 30, 6);
    rect(206, ates, 33, 5);

    if (aep > 325) {
      noStroke();

      for (var i = 0; i < ypos.length; i++) {
        fill(176, 176, 176);
        ellipse(xpos[i], ypos[i], 37, 36);
        if (ypos[i] < 0) {
          ypos[i] += 450;
          xpos[i] += 450;
        }
        else {
          ypos[i] -= 1;
          xpos[i] -= 1;
        }

      }

      while (xpos.length < 25) {
        xpos.push(random(1, 500));
        ypos.push(random(1, 500));
      }
      if (aep > 325 && seta > 168) {
        seta -= 0.1;
        ates += 0.1;
      }

      fill(0, 0, 0);
      textSize(32);
      text("thick smoke roused him from sleep.", 53, 254, 294, 115);
      if (seta < 168.2) {
        button();
      }

    }
  };
};

//3+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene3 = function () {
  scene = 3;
  kek = 0;
  draw = function () {
    background(219, 219, 219);

    fill(143, 0, 0);
    rect(0, 200, 400, 200);
    //bed
    fill(105, 0, 0);
    rect(35, 150, 206, 101, 10);
    fill(255, 255, 255);
    rect(35, 150, 175, 104);
    fill(255, 0, 0);
    rect(40, 150, 164, 96);
    fill(148, 148, 148);
    rect(211, 150, 28, 78, 10);
    //window
    fill(0, 0, 0);
    rect(270, 50, 100, 100);
    fill(52, 0, 196);
    rect(280, 60, 80, 80);
    fill(0, 0, 0);
    rect(315, 50, 10, 100);
    rect(270, 95, 100, 10);
    //star
    fill(238, 255, 0);
    ellipse(300, 79, 17, 16);
    pushMatrix();
    scale(0.5, 0.5);

    flag();
    popMatrix();

    image(royahi, loc, loc - 50);
    loc += 1;
    if (loc > 275) {
      loc = 275;
      fill(255, 255, 255);
      triangle(318, 273, 235, 158, 160, 160);
      ellipse(235, 191, 296, 100);
      fill(0, 0, 0);
      textSize(18);
      text("OMG MY HOUSE IS BURNING", 107, 195);
      button();
    }

    //smoke
    fill(173, 173, 173);
    noStroke();

    for (var i = 0; i < ypos.length; i++) {
      fill(176, 176, 176);
      ellipse(xpos[i], ypos[i], 37, 36);
      if (ypos[i] < 0) {
        ypos[i] += 450;
        xpos[i] += 450;
      }
      else {
        ypos[i] -= 3;
        xpos[i] -= 3;
      }
    }

    while (xpos.length < 25) {
      xpos.push(random(1, 500));
      ypos.push(random(1, 500));
    }


  };
};

//4+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene4 = function () {
  scene = 4;
  kek = 0;
  draw = function () {
    background(214, 214, 214);
    //door
    fill(110, 0, 0);
    rect(99, 64, 155, 266);
    fill(0, 0, 0);
    rect(109, 74, 135, 246);
    fill(110, 0, 0);
    rect(114, 79, 124, 236);

    fill(255, 255, 0);
    ellipse(219, 212, 20, 20);

    fill(77, 0, 0);
    rect(0, 329, 400, 84);
    //smoke
    for (var i = 0; i < ypos.length; i++) {
      noStroke();
      fill(176, 176, 176);
      ellipse(xpos[i], ypos[i], 37, 36);
      if (ypos[i] < 0) {
        ypos[i] += 450;
        xpos[i] += 450;
      }
      else {
        ypos[i] -= 3;
        xpos[i] -= 3;
      }
    }

    while (xpos.length < 25) {
      xpos.push(random(1, 500));
      ypos.push(random(1, 500));
    }
    image(royahi, asdfasdf, asdfasdf, tardo, tardo + 175);
    asdfasdf -= 1;
    if (asdfasdf < 70) {
      asdfasdf = 70;

      pushMatrix();

      scale(uck, uck);
      translate(translot, translot * 2);
      translot -= 1;
      uck += 0.01;
      image(royahi, asdfasdf, asdfasdf, tardo, tardo + 165);
      popMatrix();
      if (translot < -100) {
        translot = -100;
      }
      if (uck > 2) {
        uck = 2;
        fill(0, 0, 0);
        rect(0, 0, 400, movie);
        rect(0, 400, 400, -movie);
        movie += 1;
        if (movie > 100) {
          movie = 100;
          fill(255, 255, 255);
          textSize(73);
          text("I", 62, 70);
          text("MUST", 148, 70);
          text("ESCAPE", 65, 375);
          button();




        }
      }
    }
  };
};

//5+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene5 = function () {
  kek = 0;
  scene = 5;
  draw = function () {
    background(184, 184, 184);
    fire(20, zen + 20, 20, 15);
    fire(236, zen + 111, 29, -13);
    fire(254, zen + -112, -4, -12);
    smoke();
    if (zen < 1) {
      fair = 13;
    }
    if (zen > -1) {
      fair = -18;
    }
    zen = fair + zen;
    pushMatrix();
    translate(164, 410);
    rotate(i);
    i -= 1;
    fill(102, 0, 0);
    rect(0, 0, 100, 20);
    fill(255, 242, 0);
    ellipse(77, 26, 15, 14);
    popMatrix();
    if (i < -170) {
      i = -170;
      image(royahi, 150, shar);
      shar -= 2;
      if (shar < 0) {
        button();
      }
    }

  };
};

//6+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene6 = function () {
  kek = 0;
  scene = 6;
  draw = function () {
    background(184, 184, 184);
    fire(127, zen + -70, 1, 14);
    fire(3, zen + -70, -15, -5);
    fire(254, zen + -70, -7, -1);
    smoke();
    if (zen < 1) {
      fair = 13;
    }
    if (zen > -1) {
      fair = -18;
    }
    zen = fair + zen;
    image(royahi, 150, char);
    char -= 2;
    if (char < 200) {
      char = 200;
      fill(255, 255, 255);
      triangle(194, 260, 235, 158, 160, 160);
      ellipse(235, 191, 296, 100);
      fill(0, 0, 0);
      textSize(31);
      text("Oh no, I'm trapped!", 106, 201);
      button();
    }
  };
};

//7+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene7 = function () {
  kek = 0;
  scene = 7;
  draw = function () {
    background(184, 184, 184);
    smoke();
    if (zen < 1) {
      fair = 13;
    }
    if (zen > -1) {
      fair = -18;
    }
    zen = fair + zen;

    fire(127, -70 + zen, 1, 14);
    fire(3, -70 + zen, -15, -5);
    fire(254, -70 + zen, -7, -1);
    image(royahi, 150, chand);
    if (useful < 1) {
      laissez = 1;
    }
    if (chand > 340) {
      useful = 3;
      laissez -= 6;
    }
    chand = laissez + chand;
    if (chand < 12) {
      background(184, 184, 184);
      fill(255, 0, 0);
      textSize(18);
      text("*MAY NOT BE HISTORICALLY ACURATE", 20, 20);
      fire(29, 130, -15, -5);
      pushMatrix();
      translate(250, 250);
      rotate(rat);
      rat -= 1;
      MOVEDAMMIT -= 1;
      image(royahi, MOVEDAMMIT, 0);
      popMatrix();
      if (rat < -360) {
        button();
      }
    }
  };
};

//8+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene8 = function () {
  kek = 0;
  scene = 8;
  draw = function () {
    background(57, 19, 145);
    //house
    fill(166, 116, 116);
    rect(77, 100, 300, 200);
    fill(204, 161, 161);
    rect(33, 150, 44, 150);
    fill(171, 137, 137);
    rect(43, 157, 34, 142);
    fill(0, 0, 0);
    //stairs
    rect(44, 181, 33, 3);
    rect(44, 194, 33, 3);
    rect(44, 208, 33, 3);
    rect(44, 220, 33, 3);
    rect(44, 236, 33, 3);
    rect(44, 250, 33, 3);
    rect(44, 264, 33, 3);
    rect(44, 278, 33, 3);
    rect(44, 292, 33, 3);

    //garage
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

    //windows
    fill(0, 0, 0);
    rect(108, 140, 99, 34);
    rect(242, 140, 120, 34);
    fill(163, 163, 163);
    rect(118, 145, 79, 24);
    rect(252, 145, 100, 24);

    //streets
    rect(0, 299, 400, 200);

    //fire
    pushMatrix();
    scale(0.5, 0.5);
    fire(216, zen + 153, 16, -100);
    fire(538, zen + 114, -1, 291);
    fire(136, zen + 325, 16, -100);
    fire(644, zen + 304, 16, -100);
    popMatrix();


    beast += 6;
    if (zen < 1) {
      laissez = 13;
    }
    if (zen > -1) {
      laissez = -18;
    }
    zen = laissez + zen;
    if (beast > 150) {
      beast = 150;
      button();
    }
    image(royahi, beast, 150, 167, 285);

  };
};

//9+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene9 = function () {
  kek = 0;
  scene = 9;
  draw = function () {
    background(255, 255, 255);
    textSize(50);
    text("The Next Day...", 30, height / 2);
    button();
  };
};

//10+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene10 = function () {
  kek = 0;
  scene = 10;
  draw = function () {
    background(177, 171, 255);

    //house
    fill(166, 116, 116);
    rect(77, zen + 100, 300, 200);
    fill(204, 161, 161);
    rect(33, zen + 150, 44, 150);
    fill(171, 137, 137);
    rect(43, zen + 157, 34, 142);
    fill(0, 0, 0);
    //stairs
    rect(44, zen + 180, 33, 3);
    rect(44, zen + 194, 33, 3);
    rect(44, zen + 208, 33, 3);
    rect(44, zen + 222, 33, 3);
    rect(44, zen + 236, 33, 3);
    rect(44, zen + 250, 33, 3);
    rect(44, zen + 264, 33, 3);
    rect(44, zen + 278, 33, 3);
    rect(44, zen + 292, 33, 3);

    //garage
    rect(120, zen + 216, 219, 85);
    fill(255, 255, 255);
    rect(130, zen + 226, 199, 75);
    fill(0, 0, 0);
    rect(125, zen + 222, 121, 3);
    rect(125, zen + 236, 206, 3);
    rect(125, zen + 250, 206, 3);
    rect(125, zen + 264, 206, 3);
    rect(125, zen + 278, 206, 3);
    rect(125, zen + 292, 206, 3);

    //windows
    fill(0, 0, 0);
    rect(108, zen + 140, 99, 34);
    rect(242, zen + 140, 120, 34);
    fill(163, 163, 163);
    rect(118, zen + 145, 79, 24);
    rect(252, zen + 145, 100, 24);

    //streets
    rect(0, zen + 299, 400, 200);

    fill(177, 171, 255);
    noStroke();
    triangle(156, 290, 178, 149, 40, 40);
    triangle(347, 258, 178, 149, 373, 40);
    triangle(243, 242, 178, 72, 260, 81);
    triangle(165, 242, 96, 72, 260, 81);
    triangle(404, 242, 178, 193, 373, 22);
    fill(0, 0, 0);
    textSize(17);
    image(getImage("avatars/marcimus"), 21, 259);
    image(royahi, noes, 124, 167, 285);

    if (potents === 0) {
      fill(255, 255, 255);
      triangle(135, 289, 182, 128, 161, 160);
      ellipse(235, 84, 424, 158);
      fill(0, 0, 0);
      textSize(25);
      text("Firefighter:", 86, 53);
      textSize(20);
    }

    if (sect === 0) {
      text("We tried the best we could, but your house couldn't be saved.", 86, 77, 322, 117);
      fill(0, 0, 0);
      rect(340, 0, 60, 45, 21);
      fill(132, 147, 209);
      rect(345, 5, 50, 35, 16);
      fill(0, 0, 0);
      textSize(16);
      text("Next", 354, 27);
    }


    mousePressed = function () {
      if (mouseX >= 340 && mouseY <= 45) {
        sect = 1;
      }

    };

    if (sect === 1) {
      fill(0, 0, 0);
      text("We were able to retrieve some of your items though, they're to the right. (Move using your arrow keys)", 86, 64, 330, 89);
    }


    if (keyIsPressed) {
      if (keyCode === LEFT && noes >= 0) {
        noes -= 3;
      }

      else if (noes < 10) {
        fill(255, 255, 255);
        triangle(135, 289, 182, 128, 161, 160);
        ellipse(235, 84, 424, 158);
        fill(0, 0, 0);
        textSize(30);
        text("Stop, it's dangerous to go any further.", 50, 58, 417, 234);
      }

      if (keyCode === RIGHT && noes <= 750) {
        noes += 3;
      }
    }

    if (noes > 380) {
      background(177, 171, 255);
      //streets
      fill(163, 163, 163);
      rect(0, zen + 299, 400, 200);


      tea(0, 0);

      if (noes > 390 && noes < 448) {
        t1 = 1;
        fill(255, 255, 255);
        rect(0, 0, 400, 100, 80);
        fill(0, 0, 0);
        textSize(20);
        text("Tea", 179, 20);
        textSize(15);
        text("I like drinking tea. I especially like green tea.", 100, 62);
        tea(40, 230);
      }

      mcintosh(0, 0);
      if (noes > 499 && noes < 595) {
        t2 = 1;
        fill(255, 255, 255);
        rect(0, 0, 400, 100, 80);
        fill(0, 0, 0);
        textSize(20);
        text("Music", 179, 20);
        textSize(15);
        text("I like listening to music on my Mcintosh stereo system. I especially like jazz, classic, and metal. (Not the apple Macintosh.)", 133, 23, 223, 400);
        mcintosh(160, 235);
      }

      go(0, 0);
      if (noes > 610 && noes < 746) {
        t3 = 1;
        fill(255, 255, 255);
        rect(0, 0, 400, 100, 80);
        fill(0, 0, 0);
        textSize(20);
        text("Go Game", 179, 20);
        textSize(15);
        text("I like playing the 'igo' or 'go' board game. It is an old strategic game.", 139, 43, 223, 400);
        go(263, 247);
      }

      noStroke();
      image(royahi, noes - 400, 124, 167, 285);


      if (t1 === 1 && t2 === 1 && t3 === 1) {
        button();
      }

    }

  };

};

//11+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene11 = function () {
  sect = 0;
  kek = 0;
  scene = 11;
  draw = function () {
    background(32, 67, 128);
    image(getImage("avatars/mr-pants"), 24, 112);
    fill(255, 255, 255);
    triangle(116, 158, 115, 40, 161, 23);
    ellipse(133, 19, 424, 158);
    fill(0, 0, 0);
    textSize(20);
    text("Friend:", 20, 20);
    textSize(15);
    if (sect === 0) {
      text("I heard your house burnt down... That must've been horrible...", 20, 32, 256, 500);
      fill(0, 0, 0);
      rect(340, 0, 60, 45, 21);
      fill(132, 147, 209);
      rect(345, 5, 50, 35, 16);
      fill(0, 0, 0);
      textSize(16);
      text("Next", 354, 27);
    }
    mousePressed = function () {
      if (mouseX >= 340 && mouseY <= 45) {
        sect = 1;
      }
    };
    if (sect === 1) {
      text("Here, have a meal, you should rest up. (Choose Hiroya's favorite dish)", 21, 32, 256, 500);
    }

    fill(255, 255, 255);

    steak(0, 0);

    hotdog(0, 0);

    image(royahi, policy, 205, 114, 200);
    if (keyIsPressed) {
      if (keyCode === LEFT && policy > -50) {
        policy -= 3;
      }
      else if (keyCode === RIGHT && policy < 350) {
        policy += 3;
      }
    }

    if (policy > 200) {
      lem = 0;
      lemon = 1;
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

    }
    if (policy < 120) {
      lem = 1;
      lemon = 2;
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
    }
    if (policy < 199 && policy > 121) {
      lem = 2;
    }


  };
};

//12+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene12 = function () {
  scene = 12;
  lem = 2;
  kek = 0;


  draw = function () {
    background(32, 67, 128);
    image(royahi, -147, -444, 698, 1132);
    fill(0, 0, 0);
    rect(152, 300, mouth1, mouth2, 10);
    ellipse(81, 255, 53, 53);
    ellipse(340, 255, 53, 53);
    fill(255, 255, 255);
    ellipse(72, 245, 20, 20);
    ellipse(328, 245, 20, 20);

    if (lemon === 1) {
      hotdog(dog - 377, 42);
      mouth2 += 1;
      mouth1 += 1;
      if (mouth2 > 93) {
        dog += 1;
        mouth2 = 93;
        mouth1 = 113;
        if (dog > 284) {
          dog = 284;
          button();
        }
      }
    }
    if (lemon === 2) {
      steak(dog - 168, 42);
      mouth2 += 1;
      mouth1 += 1;
      if (mouth2 > 93) {
        dog += 1;
        mouth2 = 93;
        mouth1 = 113;
        if (dog > 284) {
          dog = 284;
          button();
        }
      }
    }
  };

};

//13+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene13 = function () {
  scene = 13;
  draw = function () {
    background(32, 67, 128);
    image(getImage("avatars/mr-pants"), 24, 112);
    image(royahi, 200, 205, 114, 200);

    fill(255, 255, 255);
    noStroke();
    ellipse(274, 253, 20, 20);
    ellipse(290, 201, 40, 40);
    ellipse(304, 130, 50, 50);
    ellipse(240, 74, 324, 137);

    fill(0, 0, 0);
    textSize(20);
    if (lemon === 1) {
      text("Wow I hate hotdogs, why did I even eat this??", 115, 55, 302, 67);
      textSize(35);
      fill(255, 0, 0);
      text("WRONG CHOICE", 53, 389);
    }
    if (lemon === 2) {
      text("Damn, I love steak so much more than hotdogs. ", 115, 55, 302, 67);
      textSize(35);
      fill(13, 255, 0);
      text("CORRECT CHOICE", 53, 389);
    }
    button();
  };
};

//14+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var scene14 = function () {
  scene = 14;
  kek = 0;
  noStroke();
  draw = function () {
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
    image(royahi, mad, 244);

    if (zee === 0) {
      fill(0, 0, 0);
      rect(340, 0, 60, 45, 21);
      fill(132, 147, 209);
      rect(345, 5, 50, 35, 16);
      fill(0, 0, 0);
      textSize(16);
      text("Next", 354, 27);
    }

    mousePressed = function () {
      if (mouseX >= 340 && mouseY <= 45) {
        zee = 1;
      }
    };

    if (zee === 1) {
      mad += 1;
    }

    if (mad >= 130) {

      if (sidescroll <= 0) {
        stroke(0, 0, 0);
        strokeWeight(4);
        fill(255, 255, 255);
        background(255, 255, 255);
        ellipse(292, 214, 151, 51);
        ellipse(110, 286, 163, 51);
        fill(0, 0, 0);
        textSize(18);
        text("Level 79 Skunk", 200, 49);
        fill(255, 255, 255);
        image(royahi, hir, hiry);
        image(getImage("cute/CharacterPinkGirl"), wak, faintb);

        pushMatrix();
        rotate(DUCK);
        translate(0, feyl);
        skunk();
        popMatrix();

        if (sidescroll <= -400) {
          fill(255, 255, 255);
          rect(0, 323, 399, 73, 20);
          fill(0, 0, 0);
          textSize(15);
          //healthbar
          rect(190, 64, 170, 20, 20);
          rect(20, 129, 151, 20, 20);

          fill(0, 255, 17);
          rect(190, 64, healtha, 20, 20);
          rect(20, 129, healthb, 20, 20);
          fill(0, 0, 0);
          if (truman === 1) {
            text("Level 15 Hiroya", 26, 116);
          }
          if (truman === 0) {
            text("Level 19 Sister", 26, 116);
          }

          if (textnum === 0) {
            fill(0, 0, 0);
            text("A wild skunk appeared!", 14, 352);
            fill(0, 0, 0);
            noStroke();
            rect(340, 0, 60, 45, 21);
            fill(132, 147, 209);
            rect(345, 5, 50, 35, 16);
            fill(0, 0, 0);
            textSize(16);
            text("Next", 354, 27);
          }

          if (textnum === 1) {
            act = 0;
            roks = 0;
            fill(0, 0, 0);
            if (truman === 1) {
              text("What will HIROYA do?", 14, 352);
              fill(153, 0, 0);
              ellipse(roksx, roksy, 20, 20);
              ellipse(roksx - 10, roksy, 20, 20);
              fill(0, 0, 0);
            }
            if (truman === 0) {
              text("What will SISTER do?", 14, 352);
            }
            POKEMAN();
            text("Attack", 241, 345);
            text("Bag", 333, 345);
            text("Pokemon", 241, 382);
            text("Run", 333, 382);



          }

          if (textnum === 2) {
            if (select === 1) {
              if (truman === 0) {
                fill(255, 255, 255);
                rect(0, 323, 399, 73, 20);
                fill(0, 0, 0);
                text("The Skunk used hyper beam!", 25, 349);
                fill(17, 0, 255);
                HYPERMEGASUPERULTRABEAM -= 29;
                pushMatrix();
                rotate(-29);
                rect(106, 260, HYPERMEGASUPERULTRABEAM, 33);
                popMatrix();

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
                  textnum = 4;
                }
              }
              if (truman === 1 && fossil === 2) {
                fill(0, 0, 0);
                text("HIROYA used THROW ROCKS.", 26, 346);
                fill(122, 0, 0);
                ellipse(roksx, roksy, 20, 20);
                ellipse(roksx - 10, roksy, 20, 20);
                roksx += 4;
                roksy -= 4;
                if (roksx >= 473 && camus === 0) {
                  healtha -= 5;
                  if (healtha <= 0) {
                    healtha = 0;
                    feyl += 10;
                  }
                }
              }
              if (truman === 1 && fossil === 0) {
                fill(0, 0, 0);
                text("HIROYA used THROW ROCKS.", 26, 346);
                fill(122, 0, 0);
                ellipse(roksx, roksy, 20, 20);
                ellipse(roksx - 10, roksy, 20, 20);
                roksx += 4;
                roksy -= 4;
                if (roksx >= 473 && camus === 0) {
                  roks = 1;
                }
                if (roks === 1) {
                  if (healtha === 170) {
                    act = 1;
                    roks = 0;
                  }
                  if (healtha === 150) {
                    act = 2;
                    roks = 0;
                  }
                }
                if (act === 1) {
                  roksx = 138;
                  roksy = 282;
                  roks = 0;
                  healtha = 150;
                  fill(255, 255, 255);
                  rect(0, 323, 399, 73, 20);
                  fill(0, 0, 0);
                  text("SKUNK used POISON GAS.", 17, 357);
                  fill(208, 98, 214);
                  noStroke();
                  ellipse(349 + gasx, 179 + gasy, 64, 59);
                  ellipse(281 + gasx, 227 + gasy, 64, 59);
                  ellipse(319 + gasx, 168 + gasy, 64, 59);
                  ellipse(280 + gasx, 122 + gasy, 64, 59);

                  gasx -= 1;
                  gasy += 1;
                  stroke(0, 0, 0);

                  if (gasx < -152) {
                    healthb -= 40;
                    roksx = 138;
                    roksy = 282;
                    gasx = 0;
                    gasy = 0;
                    textnum = 1;
                  }
                }
                if (act === 2) {
                  roksx = 138;
                  roksy = 282;
                  roks = 0;
                  healtha = 130;
                  fill(255, 255, 255);
                  rect(0, 323, 399, 73, 20);
                  fill(0, 0, 0);
                  text("SKUNK used SCAVENGE! Health restored to 100%.", 17, 357);
                  DUCK -= 1;
                  if (DUCK < -10) {
                    DUCK += 9;
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
                    DUCK = 0;
                    healtha = 170;
                    roks = 0;
                    textnum = 1;
                  }
                }

              }

            }
            if (select === 2) {
              fill(255, 255, 255);
              stroke(0, 0, 0);
              rect(20, 20, 360, 360);
              fill(0, 0, 0);
              textSize(25);
              text("Inventory", 149, 45);

              text("Go Board Game", 33, 160);
              text("Tea", 33, 196);
              text("Stereo System", 33, 246);
              text("Helix Fossil", 33, 290);



              fill(0, 219, 0);
              rect(279, 183, 100, 33, 20);
              rect(279, 141, 100, 33, 20);
              rect(279, 222, 100, 33, 20);
              rect(279, 262, 100, 33, 20);
              fill(0, 0, 0);
              text("USE", 295, 165);
              text("USE", 295, 206);
              text("USE", 295, 252);
              text("USE", 295, 288);

              noStroke();
              fill(0, 0, 0);
              rect(340, 0, 60, 45, 21);
              fill(132, 207, 144);
              rect(345, 5, 50, 35, 16);
              fill(0, 0, 0);
              textSize(16);
              text("Back", 354, 27);
              stroke(0, 0, 0);
              if (mouseIsPressed && mouseX >= 340 && mouseY <= 45 && select === 2) {
                select = 0;
                textnum = 1;
              }
            }
            if (select === 3) {
              fill(255, 255, 255);
              stroke(0, 0, 0);
              rect(20, 20, 360, 360);
              fill(0, 0, 0);
              textSize(25);
              text("Pokemon", 149, 45);
              line(380, 60, 20, 60);
              line(140, 59, 140, 378);
              text("Sister", 50, 91);
              image(getImage("cute/CharacterPinkGirl"), 29, 42);
              text("Level 19", 37, 204);
              text("Sister", 154, 91);
              textSize(15);
              text("A rare specimen of Homo erectus species descending from the Gojo dynasty.", 152, 117, 229, 187);
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
              if (mouseIsPressed && mouseX >= 340 && mouseY <= 45) {
                select = 0;
                textnum = 1;
              }

            }
            if (select === 4) {
              fill(255, 255, 255);
              rect(0, 323, 399, 73, 20);
              fill(0, 0, 0);
              text("The real estate prices are too high! You can't escape!", 16, 358);

              noStroke();
              fill(0, 0, 0);
              rect(340, 0, 60, 45, 21);
              fill(132, 207, 144);
              rect(345, 5, 50, 35, 16);
              fill(0, 0, 0);
              textSize(16);
              text("Back", 354, 27);
              stroke(0, 0, 0);
              if (mouseIsPressed && mouseX >= 340 && mouseY <= 45) {
                select = 0;
                textnum = 1;
              }
            }
          }
          if (textnum === 3) {
            fill(255, 255, 255);
            select = 0;
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
              textnum = 1;
            }
          }
          if (textnum === 4) {
            rect(20, 129, 150, 20, 20);
            rect(20, 129, healthc, 20, 20);
            healthc -= 2;
            if (healthc < 0) {
              healthc = 0;
            }
            faintb += 5;
            fill(0, 0, 0);
            text("That was super effective! SISTER fainted..", 27, 346, 206, 140);
            if (mouseIsPressed && mouseX >= 340 && mouseY <= 45) {
              lolok = 1;
            }
            if (lolok === 1) {
              hir += 1;
              if (hir >= 62) {
                hir = 62;
                truman = 1;
                textnum = 1;
              }
            }
          }
          if (effected === 1) {
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
              effected = 0;
            }
          }

          if (healthb <= 0) {
            healthb = 0;
            hiry += 5;
            if (hiry > 415) {
              background(83, 0, 110);
              fill(255, 255, 255);
              textSize(31);
              text("YOU DIED", 126, 213);
              fill(255, 255, 255);
              textSize(47);
              text("GAME OVER", 70, 100);
              textSize(20);
              text("Bad Ending", 13, 381);
              pushMatrix();
              translate(-65, 116);
              skunk();
              popMatrix();
            }
          }

          if (fossil === 1) {
            fill(255, 255, 255);
            rect(0, 323, 399, 73, 20);
            fill(0, 0, 0);
            text("The Helix Fossil has granted you power!", 17, 351);
            fill(179, 97, 97);
            ellipse(344 - 10, 368 + fosul, 75, 20);
            ellipse(323 - 10, 364 + fosul, 94, 45);
            ellipse(319 - 10, 357 + fosul, 75, 20);
            ellipse(313 - 10, 368 + fosul, 75, 20);
            ellipse(324 - 10, 378 + fosul, 75, 20);
            ellipse(344 - 10, 368 + fosul, 75, 20);
            ellipse(344 - 10, 358 + fosul, 62, 20);
            ellipse(344 - 10, 349 + fosul, 46, 20);
            fosul -= 3;
            if (fosul <= -179) {
              fosul = -179;
              healtha -= 10;
              if (healtha <= 10) {
                healtha = 10;
                fossil = 2;
              }
            }

          }
          if (fossil === 3) {
            fill(255, 255, 255);
            rect(0, 323, 399, 73, 20);
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
            if (mouseX >= 340 && mouseY <= 45 && mouseIsPressed) {
              fossil = 2;
            }
          }

          if (feyl >= 292) {
            background(83, 0, 110);
            fill(255, 255, 255);
            textSize(31);
            text("You Won", 139, 213);
            fill(255, 255, 255);
            textSize(47);
            text("Game Completed!", 7, 100);
            textSize(20);
            text("Good Ending", 13, 381);
            image(royahi, 154, 182);
            pushMatrix();
            scale(0.25, 0.25);
            translate(171, 908);
            flag();
            popMatrix();
          }

          mousePressed = function () {
            if (mouseX >= 340 && mouseY <= 45 && textnum === 0) {
              textnum = 1;
            }
          };
        }
      }

      mad = 130;
      fill(0, 0, 0);
      rect(sidescroll, 0, 400, 400);
      sidescroll -= 5;

    }
  };
};

//15+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//TRANSITION+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




mouseClicked = function () {
  if (mouseX >= 340 && mouseY <= 45 && kek === 1) {
    if (scene === 0) {
      scene1();
    }
    else if (scene === 1) {
      scene2();
    }
    else if (scene === 2) {
      scene3();
    }
    else if (scene === 3) {
      scene4();
    }
    else if (scene === 4) {
      scene5();
    }
    else if (scene === 5) {
      scene6();
    }
    else if (scene === 6) {
      scene7();
    }
    else if (scene === 7) {
      scene8();
    }
    else if (scene === 8) {
      scene9();
    }
    else if (scene === 9) {
      scene10();
    }
    else if (scene === 10) {
      scene11();
    }
    else if (scene === 12) {
      scene13();
    }
    else if (scene === 13) {
      scene14();
    }
  }

  if (lem === 0 && mouseX >= 128 && mouseX <= 256 && mouseY >= 156 && mouseY <= 210) {
    scene12();
  }
  if (lem === 1 && mouseX >= 128 && mouseX <= 256 && mouseY >= 156 && mouseY <= 210) {
    scene12();
  }

  if (scene === 14 && textnum === 1) {
    if (mouseX >= 212 && mouseX <= 305 && mouseY >= 321 && mouseY <= 358) {
      select = 1;
      textnum = 2;
    }
    if (mouseX >= 306 && mouseX <= 400 && mouseY >= 321 && mouseY <= 359) {
      select = 2;
      textnum = 2;
    }
    if (mouseX >= 212 && mouseX <= 305 && mouseY >= 359 && mouseY <= 400 && lolok === 0) {
      select = 3;
      textnum = 2;
    }
    if (mouseX >= 212 && mouseX <= 305 && mouseY >= 359 && mouseY <= 400 && lolok === 1) {
      effected = 1;

    }
    if (mouseX >= 306 && mouseX <= 400 && mouseY >= 359 && mouseY <= 400) {
      select = 4;
      textnum = 2;
    }
  }

  if (select === 2) {
    if (mouseX >= 279 && mouseX <= 379 && mouseY >= 143 && mouseY <= 260) {
      textnum = 3;
    }
  }

  if (select === 3 && mouseX >= 269 && mouseX <= 368 && mouseY >= 153 && mouseY <= 201) {
    select = 0;
    textnum = 1;
    wak = 62;
    hir = -150;
    truman = 0;
  }
  if (select === 2 && mouseX >= 279 && mouseX <= 379 && mouseY >= 261 && mouseY <= 302 && fossil === 0) {
    select = 0;
    textnum = 1;
    fossil = 1;
  }
  if (select === 2 && mouseX >= 279 && mouseX <= 379 && mouseY >= 261 && mouseY <= 302 && fossil === 2) {
    fossil = 3;
  }


};
scene0();
