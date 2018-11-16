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
        ios: '<strong>Tap on the share icon</strong>, then tap on <q>Add to Home Screen</q>.',
        android: '<strong>Tap on &#8942;</strong> and then tap on <q>Add to Home screen</q>.',
        installed: 'Already installed',
        not_supported: 'Add to home screen instructions are not available for your device.'
      },
      fr: {
        ios: '<strong>Appuyez sur l\'icône partage</strong>, puis appuyez sur <q>Sur l\'écran d\'accueil</q>.',
        android: '<strong>Appuyez sur &#8942;</strong>, puis appuyez sur <q>Ajouter à l\'écran d\'accueil</q>.',
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
        return;
      }

      // Test Android
      if (
        /android/i.test(userAgent)
        && /chrome\/[\d\.]+/i.test(userAgent)
      ) {
        this.platform = 'android';
        this.position = ['top', 'right'];
      }
      // Test iOS
      else if (
        ['iPhone', 'iPad', 'iPod'].indexOf(navigator.platform) !== -1
        && /applewebkit\/[\d\.]+/i.test(navigator.userAgent)
        && !globals.MSStream
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
