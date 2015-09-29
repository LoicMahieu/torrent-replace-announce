# torrent-replace-announce

Replace `announce` in torrent files

## Install

Not published on NPM yet, install via Github:
```
$ npm install --global loicmahieu/torrent-replace-announce
```

## Usage

```
$ torrent-replace-announce
Usage: torrent-replace-announce -s [search] -r [replacement]

Options:
  -h            Help
  -s            Search expression                                       [requis]
  -r            Replacement                                             [requis]
  -o, --output  Output directory
  -d, --dry     Dry run                                                [booléen]
  -v            Verbose                                                [booléen]
  --help        Affiche de l'aide                                      [booléen]

Arguments requis manquants: s, r
```
```
$ torrent-replace-announce -s any.domain -r different.domain -o ./dest ./torrents
```
