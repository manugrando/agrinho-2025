let caminhao;
let x;
let y;
let velocidade = 2;
let obstaculos = [];

function setup() {
  createCanvas(800, 400);
  x = 50;
  y = height / 2;

  // Criar obstáculos
  for (let i = 0; i < 5; i++) {
    obstaculos.push({
      x: random(200, 700),
      y: random(100, 300),
      tamanho: 30
    });
  }
}

function draw() {
  background(180, 220, 160); // Campo
  noStroke();
  
  // Campo (esquerda)
  fill(100, 200, 100); 
  rect(0, 0, width / 2, height);

  // Texto explicativo sobre o campo
  fill(0);
  textSize(16);
  text("🌾 Campo", 50, 30);

  // Cidade (direita)
  fill(100, 100, 255); 
  rect(width / 2, 0, width / 2, height);

  // Texto explicativo sobre a cidade
  fill(0);
  textSize(16);
  text("🏙️ Cidade", width - 150, 30);

  // Estrada
  fill(80);
  rect(0, height / 2 - 30, width, 60);

  // Obstáculos
  fill(150);
  for (let ob of obstaculos) {
    ellipse(ob.x, ob.y, ob.tamanho);
  }

  // Caminhão
  fill(255, 0, 0);
  rect(x, y - 20, 40, 20);
  fill(0);
  ellipse(x + 10, y, 10);
  ellipse(x + 30, y, 10);

  // Movimento automático
  x += velocidade;

  // Verificar colisão
  for (let ob of obstaculos) {
    if (dist(x, y, ob.x, ob.y) < ob.tamanho / 2 + 15) {
      fill(255, 0, 0);
      textSize(32);
      text("⚠️ Caminhão bateu!", 250, 50);
      noLoop();
    }
  }

  // Chegou na cidade
  if (x > width - 60) {
    fill(0, 200, 0);
    textSize(32);
    text("🌟 Conexão feita! 🌟", 250, 50);
    noLoop();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW && y > height / 2 - 20) {
    y -= 10;
  } else if (keyCode === DOWN_ARROW && y < height / 2 + 20) {
    y += 10;
  }
}
