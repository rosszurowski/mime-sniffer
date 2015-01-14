# mime-sniffer

A little utility to get the mime-type from binary files.

Unlike [mime](https://github.com/broofa/node-mime), mime-sniffer uses [magic numbers](http://en.wikipedia.org/wiki/Magic_number_%28programming%29) instead of file extensions to get a more accurate (and less easily faked) mime-type for a given file.

## Install

```bash
npm install mime-sniffer --save
```

## Usage

```javascript
var mime = require('mime-sniffer');

mime.lookup('/path/to/file.jpg', function(err, info) {
	console.log(info); // { mime: 'image/jpeg', extension: 'jpg' }
});
```

You can also pass in a Buffer:

```javascript
var fs = require('fs');
var mime = require('mime-sniffer');

mime.lookup(fs.readFileSync('/path/to/file.jpg'), function(err, info) {
	// { mime: 'image/jpeg', extension: 'jpg' }
});
```

## Supported files
To see what file types are supported, take a peek in the `lib/numbers.js` file.

Currently, mime-sniffer supports:

#### Images
- gif
- png
- jpg
- webp
- tiff
- bmp

#### Video
- mp4
- mov
- webm

#### Audio
- mp3
- ogg
- flac
- wav

#### Misc
- pdf

## License

MIT