
var escapeStringRegexp = require('escape-string-regexp');
var log = require('debug')('torrent-replace-announce');

module.exports = torrentReplaceAnnounce;

function torrentReplaceAnnounce (torrent, search, replacement) {
  var changed = false;
  var searchRe;

  if (!Array.isArray(search)) {
    searchRe = new RegExp(escapeStringRegexp(search));
  } else {
    searchRe = new RegExp('(' + search.map(function (s) {
      return '(' + escapeStringRegexp(s) + ')';
    }).join('|') + ')')
  }

  torrent.announce = torrent.announce.map(function (announce) {
    var replaced = announce;

    if (searchRe.test(announce)) {
      changed = true;
      replaced = announce.replace(searchRe, replacement);
      log('Search match for %s and become %s', announce, replaced);
    }

    return replaced;
  });

  return changed;
}
