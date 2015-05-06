var q = require('q');

function create(params) {
  var playerId = params.playerId;

  return q(playerId)
  .then(function (playerId) {
    return {
      id: playerId
    };
  });
}

module.exports = {
  createPlayer: create
};
