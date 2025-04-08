/**
 * Enumération contenant les IDs des 3 éléments de la page
 * qui correspondent aux 3 types de messages.
 * (À NE PAS MODIFIER !)
 */
export const MESSAGE_TYPES = {
  warning: "message_avertissement",
  lost: "message_perdu",
  win: "message_gagne",
};

/**
 * Objet correspondant à la Vue.
 */
export const view = {
  /**
   * Champ texte contenant les indices sur le mot à deviner (la Zone mot).
   */
  word_input: document.getElementById("zone_mot"),

  /**
   * Champ texte contenant les lettres déjà utilisées (la Zone essais).
   */
  used_letters_input: document.getElementById("zone_essais"),

  /**
   * Champ numérique contenant le nombre d'erreurs encore permises.
   */
  allowed_errors_input: document.getElementById("nb_erreurs_permises"),

  /**
   * Bouton permettant de lancer une partie.
   */
  new_game_btn: document.getElementById("bouton_nouvelle_partie"),

  /**
   * Collection des boutons représentant le clavier virtuel intégré à la page.
   * (Tous les boutons avec la classe "lettre")
   */
  letters_btns: document.querySelectorAll(".lettre"),

  /**
   * Élément <span> affichant le score actuel du joueur.
   */
  score_span: document.getElementById("score"),

  /**
   * Met à jour la vue à partir du modèle.
   * @param {Game} game : Modèle du jeu du pendu
   */
  updateFrom(game) {
    // Met à jour le mot à deviner
    this.word_input.value = game._displayedWord;

    // Met à jour les lettres déjà utilisées
    this.used_letters_input.value = game._usedLetters.join(", ");

    // Met à jour le nombre d'erreurs permises
    this.allowed_errors_input.value = game._nbErrorsAllowed;

    // Ajout de la class warning si 1 et 2 erreurs restantes
    if (game._nbErrorsAllowed <= 2) {
      this.allowed_errors_input.classList.add("warning");
    } else {
      this.allowed_errors_input.classList.remove("warning");
    }

    // Mettre à jour le score
    this.score_span.innerHTML = game._score;

    // Active ou désactive les boutons du clavier virtuel
    for (let btn of this.letters_btns) {
      btn.disabled = game._usedLetters.includes(btn.innerHTML);
    }
  },

  /**
   * Cache tous les messages de la page.
   * (Fonction fournie. À NE PAS MODIFIER.)
   */
  hideMessages() {
    for (let msgId of Object.values(MESSAGE_TYPES)) {
      document.getElementById(msgId).classList.add("cache");
    }
  },

  /**
   * Affiche un message à l'utilisateur.
   * (Fonction fournie. À NE PAS MODIFIER.)
   * @param {string} msg : Message à afficher.
   * @param {string} type : Type du message à afficher.
   */
  displayMessage(msg, type = MESSAGE_TYPES.warning) {
    let msgElmt = document.getElementById(type);
    if (msgElmt) {
      msgElmt.innerHTML = msg;
      msgElmt.classList.remove("cache");
    }
  },

  /**
   * Demande à l'utilisateur de choisir entre OK (oui) et Annuler (non).
   * (Fonction fournie. À NE PAS MODIFIER.)
   * @param {string} msg : Message à afficher.
   * @returns {boolean} Vrai si l'utilisateur à cliquer sur "OK"
   */
  askIfYesOrNo(msg) {
    return confirm(msg);
  },
};
