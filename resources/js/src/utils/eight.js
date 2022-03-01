export const eight = {
  cuiIsValid: cui => {
    var console = window.console;
    if (!cui) {
      // console.log("CUI vacío");
      return true;
    }

    var cuiRegExp = /^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/;

    if (!cuiRegExp.test(cui)) {
      // console.log("CUI con formato inválido");
      return false;
    }

    cui = cui.replace(/\s/, '');
    var depto = parseInt(cui.substring(9, 11), 10);
    var muni = parseInt(cui.substring(11, 13));
    var numero = cui.substring(0, 8);
    var verificador = parseInt(cui.substring(8, 9));

    // Se asume que la codificación de Municipios y
    // departamentos es la misma que esta publicada en
    // http://goo.gl/EsxN1a

    // Listado de municipios actualizado segun:
    // http://goo.gl/QLNglm

    // Este listado contiene la cantidad de municipios
    // existentes en cada departamento para poder
    // determinar el código máximo aceptado por cada
    // uno de los departamentos.
    var munisPorDepto = [
      /* 01 - Guatemala tiene:      */ 17 /* municipios. */,
      /* 02 - El Progreso tiene:    */ 8 /* municipios. */,
      /* 03 - Sacatepéquez tiene:   */ 16 /* municipios. */,
      /* 04 - Chimaltenango tiene:  */ 16 /* municipios. */,
      /* 05 - Escuintla tiene:      */ 13 /* municipios. */,
      /* 06 - Santa Rosa tiene:     */ 14 /* municipios. */,
      /* 07 - Sololá tiene:         */ 19 /* municipios. */,
      /* 08 - Totonicapán tiene:    */ 8 /* municipios. */,
      /* 09 - Quetzaltenango tiene: */ 24 /* municipios. */,
      /* 10 - Suchitepéquez tiene:  */ 21 /* municipios. */,
      /* 11 - Retalhuleu tiene:     */ 9 /* municipios. */,
      /* 12 - San Marcos tiene:     */ 30 /* municipios. */,
      /* 13 - Huehuetenango tiene:  */ 32 /* municipios. */,
      /* 14 - Quiché tiene:         */ 21 /* municipios. */,
      /* 15 - Baja Verapaz tiene:   */ 8 /* municipios. */,
      /* 16 - Alta Verapaz tiene:   */ 17 /* municipios. */,
      /* 17 - Petén tiene:          */ 14 /* municipios. */,
      /* 18 - Izabal tiene:         */ 5 /* municipios. */,
      /* 19 - Zacapa tiene:         */ 11 /* municipios. */,
      /* 20 - Chiquimula tiene:     */ 11 /* municipios. */,
      /* 21 - Jalapa tiene:         */ 7 /* municipios. */,
      /* 22 - Jutiapa tiene:        */ 17 /* municipios. */,
    ];

    if (depto === 0 || muni === 0) {
      // console.log("CUI con código de municipio o departamento inválido.");
      return false;
    }

    if (depto > munisPorDepto.length) {
      // console.log("CUI con código de departamento inválido.");
      return false;
    }

    if (muni > munisPorDepto[depto - 1]) {
      // console.log("CUI con código de municipio inválido.");
      return false;
    }
    var total = 0;

    for (var i = 0; i < numero.length; i++) {
      total += numero[i] * (i + 2);
    }

    var modulo = total % 11;

    // console.log("CUI con módulo: " + modulo);
    return modulo === verificador;
  },
  nitIsValid: value => {
    var nit = value.toString();
    if (!nit) {
      return true;
    }
    var nitRegExp = new RegExp('^[0-9]+(-?[0-9kK])?$');

    if (!nitRegExp.test(nit)) {
      return false;
    }

    nit = nit.replace(/-/, '');
    var lastChar = nit.length - 1;
    var number = nit.substring(0, lastChar);
    var expectedCheker = nit.substring(lastChar, lastChar + 1).toLowerCase();

    var factor = number.length + 1;
    var total = 0;

    for (var i = 0; i < number.length; i++) {
      var character = number.substring(i, i + 1);
      var digit = parseInt(character, 10);

      total += digit * factor;
      factor = factor - 1;
    }

    var modulus = (11 - (total % 11)) % 11;
    var computedChecker = modulus == 10 ? 'k' : modulus.toString();

    return expectedCheker === computedChecker;
  },
  money: number => {
    return 'Q ' + number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  },
  percentage: number => {
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + ' %';
  },
  quantity: number => {
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  },
  parseDecimal: value => {
    return parseFloat(parseFloat(value).toFixed(2));
  },
  calculateCreditAmount(amount, percentage, term) {
    let capital = this.parseDecimal(
      this.parseDecimal(amount) / this.parseDecimal(term)
    );
    let interest = this.parseDecimal(
      this.parseDecimal(amount) * (this.parseDecimal(percentage) / 100)
    );
    return this.parseDecimal(capital + interest);
  },
};
