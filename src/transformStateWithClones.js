'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const result = [];
  let curr = state;

  for (const action of actions) {
    const next = { ...curr };

    switch (action.type) {
      case 'addProperties':
        Object.assign(next, action.extraData);
        break;
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete next[key];
        }
        break;
      case 'clear':
        for (const key in next) {
          delete next[key];
        }
        break;
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }

    result.push(next);
    curr = next;
  }

  return result;
}

module.exports = transformStateWithClones;
