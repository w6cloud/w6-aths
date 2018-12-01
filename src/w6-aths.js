(function (globals) {
  'use strict';

  let o = {
    platform: 'unknown',
    supported: false,
    installed: false,
    position: ['bottom', 'center'],
    lang: 'en',
    messages: {
      en: {
        ios: 'To install the application, please tap on the share icon (bottom center of your browser), then tap on "Add to Home Screen".',
        android: 'To install the application, please tap on the menu icon (top right of your browser) and then tap on "Add to Home screen".',
        installed: 'Already installed',
        not_supported: 'Add to home screen instructions are not available for your device.'
      },
      fr: {
        ios: 'Pour installer l\'application\nappuyez sur l\'icône partage\n(en bas au centre du navigateur),\npuis appuyez sur le lien nommé\n"Sur l\'écran d\'accueil".',
        android: 'Pour installer l\'application\nappuyez sur l\'icône menu\n(en haut à droite du navigateur) puis\nappuyez sur "Ajouter à l\'écran d\'accueil".',
        installed: 'Application déjà installée',
        not_supported: 'Les instructions pour l\'ajout à l\'écran d\'accueil ne sont pas disponibles pour votre plateforme.'
      }
    },
    init: function () {

      // Get user agent
      let navigator = globals.navigator;
      let userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Test mobile
      if (typeof window.orientation === "undefined") {
        return this;
      }

      // Test Android
      if (
        /android/i.test(userAgent) &&
        /chrome\/[\d\.]+/i.test(userAgent)
      ) {
        this.platform = 'android';
        this.position = ['top', 'right'];
      }
      // Test iOS
      else if (
        ['iPhone', 'iPad', 'iPod'].indexOf(navigator.platform) !== -1 &&
        /applewebkit\/[\d\.]+/i.test(navigator.userAgent) &&
        !globals.MSStream
      ) {
        this.platform = 'ios';
        this.position = ['bottom', 'center'];
      }

      if (this.platform !== 'unknown') {
        this.supported = true;
        if ('standalone' in navigator && navigator.standalone) {
          this.installed = true;
        }
      }

      return this;
    },
    getMessage: function (lang) {
      let l = lang ? lang : this.lang;
      if (!this.supported) {
        return this.messages[l]['not_supported'];
      }
      if (this.installed) {
        return this.messages[l]['installed'];
      }
      return this.messages[l][this.platform];
    }
  };

  globals.W6_ATHS = o.init();

})(window);
