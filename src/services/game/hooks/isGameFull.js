'use strict';

// src/services/game/hooks/isGameFull.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

function isGameFull(game) {
  return game.playerIds.length >= 2;
}

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    if (hook.method === 'find') {
      result.data = result.data.map((game) => {
        const full = isGameFull(game)
        return Object.assign({}, game, { full })
      });
    } else {
      result.full = gameIsFull(result)
    }
  };
};