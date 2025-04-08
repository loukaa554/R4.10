// Import des boutons éditables
import { EditableButton } from "./modelEditableButton.js";

/**
 * Classe Calculator.
 * (Modèle représentant la calculatrice)
 */
export class Calculator {
  /**
   * Expression actuelle de la calculatrice.
   * @type {string}
   */
  _input;

  /**
   * Mémoire de la calculatrice.
   * @type {{string|null}}
   */
  _memory;

  /**
   * Objet littéral contenant les boutons éditables de la calculatrice.
   * (Clé = ID du bouton, Valeur = Objet EditableButton associé)
   * @type {Object}
   */
  _editableButtons;

  /**
   * Theme
   */
  _theme;

  /**
   * Constructeur de la classe Calculator.
   * @param {Object} editableBtns : Informations sur les boutons éditables.
   */
  constructor(editableBtns) {
    this._input = "";
    this._memory = null;
    this._theme = "os-default";

    // Initialisation des boutons éditables
    // (avec un ID qui commence par "libre" suivi d'un chiffre)
    this._editableButtons = {};
    for (let key in editableBtns) {
      let btn = new EditableButton(key, editableBtns[key]);
      this._editableButtons[key] = btn;
    }
  }

  /**
   * Retourne l'expression actuelle de la calculatrice.
   * @returns {string}
   */
  getInput() {
    return this._input;
  }

  /**
   * Met à jour l'expression actuelle de la calculatrice.
   * @param {string} expr : Nouvelle expression
   */
  setInput(expr) {
    this._input = expr;
  }

  /**
   * Ajoute une expression à l'entrée de la calculatrice.
   * @param {string} expr : Nouvelle expression
   */
  addToInput(expr) {
    if (this._input === "Erreur") {
      this._input = expr;
    } else {
      this._input += expr;
    }
  }

  /**
   * Vide l'entrée de la calculatrice.
   */
  clearInput() {
    this._input = "";
  }

  /**
   * Retourne la liste des IDs des boutons éditables.
   * @returns {Array} La liste des IDs des boutons éditables (une liste de chaînes de caractères).
   */
  getIdsEditablesButtons() {
    return Object.keys(this._editableButtons);
  }

  /**
   * Retourne la valeur d'un bouton éditable.
   * @param {string} idBtn : ID du bouton éditable.
   * @returns {string} La valeur du bouton éditable (ou null, si le bouton n'existe pas).
   */
  getValueEditableButton(idBtn) {
    if (this._editableButtons[idBtn]) {
      return this._editableButtons[idBtn].getValue();
    } else {
      return null;
    }
  }

  setTheme(theme) {
    console.log(theme);
    this._theme = theme;
    localStorage.setItem("theme", theme);
  }

  getTheme() {
    return this._theme;
  }

  calculate(expr) {
    try {
      this._input = eval(expr);
    } catch (error) {
      this._input = "Erreur";
      return "Erreur";
    }
  }

  addToMemory(expr) {
    let onlyNumRegEx = /^-?\d+(\.\d+)?$/;
    if (onlyNumRegEx.test(expr)) {
      this._memory = expr;
      localStorage.setItem("memory", expr);
    } else {
      throw new Error("Tu peux boss, que des chiffres.");
    }
  }

  getMemory() {
    return this._memory;
  }

  clearMemory() {
    this._memory = null;
    localStorage.removeItem("memory");
  }

  retrieveStateFromClient() {
    // Ajout de la mémoire
    if (localStorage.getItem("memory")) {
      this.addToMemory(localStorage.getItem("memory"));
    }

    // Ajout des boutons éditables
    if (
      localStorage.getItem("editableButtons") === null ||
      localStorage.getItem("editableButtons") === undefined
    ) {
      localStorage.setItem(
        "editableButtons",
        JSON.stringify(this._editableButtons)
      );
    } else {
      const btnsJson = JSON.parse(localStorage.getItem("editableButtons"));
      for (let key in btnsJson) {
        let btnElt = document.getElementById(key);
        if (btnElt) {
          btnElt.value = btnsJson[key];
        }
      }
    }
    if (localStorage.getItem("theme")) {
      this.setTheme(localStorage.getItem("theme"));
    }
  }
}
