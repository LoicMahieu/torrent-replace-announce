
var test = require('tape');
var path = require('path');
var fs = require('fs');
var torrentReplaceAnnounce = require('../lib/torrentReplaceAnnounce');
var parseTorrent = require('parse-torrent');

var fixtures = path.join(__dirname, './fixtures');

test('replace announce if match', function (t) {
  t.plan(3);

  var torrent = parseTorrent(fs.readFileSync(path.join(fixtures, 'some-domain.torrent')));
  t.equal(torrent.announce[0], 'some.domain');

  var changed = torrentReplaceAnnounce(torrent, 'some.domain', 'replacement');
  t.ok(changed);

  t.equal(torrent.announce[0], 'replacement');
});

test('do not replace announce if not match', function (t) {
  t.plan(3);

  var torrent = parseTorrent(fs.readFileSync(path.join(fixtures, 'some-domain.torrent')));
  t.equal(torrent.announce[0], 'some.domain');

  var changed = torrentReplaceAnnounce(torrent, 'some.different', 'replacement');
  t.notOk(changed);

  t.equal(torrent.announce[0], 'some.domain');
});
