// Link:
// https://stackblitz.com/edit/dom-project-chaiaurcode?file=5-keyboard%2Findex.html,5-keyboard%2Fchaiaurcode.js


const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
    <table>
      <tr>
        <th>Key</th>
        <th>KeyCode (Deprecated)</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? 'Space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>
  `;
});