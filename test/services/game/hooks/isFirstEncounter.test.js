'use strict';

const assert = require('assert');
const isFirstEncounter = require('../../../../src/services/game/hooks/isFirstEncounter.js');

describe('game isFirstEncounter hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'after',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    isFirstEncounter()(mockHook);

    assert.ok(mockHook.isFirstEncounter);
  });
});
