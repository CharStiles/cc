
const charLevels = [
['➝', '☜', '☞', ':', '☆', '┄', '⚊', '⋆', '♘', '♤', '♡', '∶', '✧', '╌', '−', '➣', '➛', '~', '∽', '∼'],
['↾', '⇪', '❲', '➩', '➪', '─', '❳', '╸', '❝', '╺', '✓', '✄', '♲', '⇳', '⚐', '⇽', '⇾', '¬', '❞', '⚔'],
['➔', '➟', '∠', '↢', '↣', '÷', '♕', '⇍', '⇏', '✯', '┆', '⇕', '⇔', '☣', '⊸', '┅', '♙', '»', '«', '➚'],
['⊂', '⊃', '¿', '?', '⊤', '☥', '⊣', '⊢', '⊥', '✕', '❐', '✢', '➮', '✶', '✒', '≻', '☔', '⇎', '≺', '➼'],
['⋏', '∨', '∧', '⇌', '⇋', 't', '⚖', 'ì', 'í', '✲', '↻', '♏', '↺', '━', '═', '≎', '✣', '⊲', '⊳', 'f'],
['❋', '☺', '⊘', '☹', '⊖', '☫', '┭', '≥', '┮', '┵', '┶', '≤', '✜', 'F', '≠', '≒', '≓', '♋', '∍', '∂'],
['⊀', '⊁', '☌', '❅', '⊚', '❦', 'û', '┰', '╥', '┼', '╨', '┸', '┥', '╡', '┝', '╞', 'X', '☊', '♦', '∈'],
['à', 'á', 'U', 'õ', 'ë', '♼', '❇', '♠', 'd', 'b', '❂', '✖', '☯', '✿', '∇', '∆', '☛', '☚', '❤', '⚄'],
['⚑', 'Ê', 'Ë', '╦', '╩', 'æ', '⊞', 'Â', 'Ä', 'ß', 'þ', '≣', '⇶', 'Û', 'Ü', '✘', 'R', 'Ã', '#', '0'],
['┪', '┩', '┢', '┡', '║', '┃', 'W', 'Ô', 'Ö', '@', '▂', 'Õ', '♞', 'N', 'B', 'M', '¶', '∉', '∌', '∄']
]


const wSize = 15
const rad =40

class spot {
  constructor(level,t,id ) {
    this.level = level;
    this.t = t;
    this.id = id;
  }
}

const grid = [];
let font
async function setup() {
  font = await loadFont('DejaVuSansMono.ttf');
  
  for (i=0; i<(windowWidth/wSize); i++){
    let line1 = []
    for (j=0; j<(windowHeight/wSize); j++){
      let spot1 = new spot(9, Math.floor(random(0,10)), Math.floor(random(0,10)));
      line1.push(spot1)
    }
    grid.push(line1)
  }

  createCanvas(windowWidth, windowHeight);
}


function draw() {
  font = loadFont('DejaVuSansMono.ttf');
  background(0);
  for (i=0; i<(windowWidth/wSize); i++){
    for (j=0; j<(windowHeight/wSize); j++){
      grid[i][j].level = min(grid[i][j].level+1,9)
      
      if (sqrt((mouseX-i*wSize-wSize/2)*(mouseX-i*wSize-wSize/2)+(mouseY-j*wSize-wSize/2)*(mouseY-j*wSize-wSize/2))<rad){
        grid[i][j].level=1
      }
      
      let char1 = charLevels[grid[i][j].level][grid[i][j].id];
      grid[i][j].t +=0.2;
      if (grid[i][j].t>=10){
        grid[i][j].t = grid[i][j].t-10
        grid[i][j].id = Math.floor(random(0,10))
      }
      text(char1,i*wSize+wSize/2,j*wSize+wSize/2,wSize,wSize)

      fill(200)
    }
  }
 
}

