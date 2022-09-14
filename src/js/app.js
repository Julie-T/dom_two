// TODO: write code here

const mainEl = document.createElement('main');

mainEl.innerHTML = `
<div class="card">
  <div class="hole-game">
    <li class = 'hole' id = hole1></li>
    <li class = 'hole' id = hole2></li>
    <li class = 'hole' id = hole3></li>
    <li class = 'hole' id = hole4></li>
    <li class = 'hole' id = hole5></li>
    <li class = 'hole' id = hole6></li>
    <li class = 'hole' id = hole7></li>
    <li class = 'hole' id = hole8></li>
    <li class = 'hole' id = hole9></li>
    <li class = 'hole' id = hole10></li>
    <li class = 'hole' id = hole11></li>
    <li class = 'hole' id = hole12></li>
    <li class = 'hole' id = hole13></li>
    <li class = 'hole' id = hole14></li>
    <li class = 'hole' id = hole15></li>
    <li class = 'hole' id = hole16></li>
  </div>
</div>
`;

// const holes = array.from(document.querySelectorAll('hole'));

(() => {
  let activeHole = 1;
  let newActiveHole = 1;

  function getHole(index) {
    return document.getElementById(`hole${index}`);
  }
  function deactivateHole(index) {
    getHole(index).classList.remove('hole_has-obj');
  }
  function activateHole(index) {
    getHole(index).classList.add('hole_has-obj', 'pass');
  }
  function next() {
    setTimeout(() => {
      deactivateHole(activeHole);
      newActiveHole = Math.floor(1 + Math.random() * 16);
      if (newActiveHole !== activeHole) {
        activeHole = newActiveHole;
      }
      activateHole(activeHole);
      next();
    }, 800);
  }
  next();
})();
