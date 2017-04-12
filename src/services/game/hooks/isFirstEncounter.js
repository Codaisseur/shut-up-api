'use strict';

// src/services/game/hooks/isFirstEncounter.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

function isFirstEncounter(hook, game) {
  if (!hook.provider) return

  return hook.app.service('games')
    .find(
      { query:
        { playerIds:
          { $all: game.playerIds }
        }
      }
    )
    .then((games) => {
      return games.length === 0 // bool
    })
}

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    if(hook.method === 'find') {
      hook.result.data = hook.result.data.map((game) => {

      })
    }
  };

  return function(hook) {
full: undefined

    if (hook.method === 'find') {
      result.data = result.data.map((game) => {
        const firstEncounter = !!isFirstEncounter(hook, game)
        return Object.assign({}, game, { firstEncounter })
      });
    } else {
      result.firstEncounter = !!isFirstEncounter(hook, result)
    }
  };
};
