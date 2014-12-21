/**
 * A set of magic numbers for different file types
 * Comprised from:
 * http://www.garykessler.net/library/file_sigs.html
 * http://en.wikipedia.org/wiki/List_of_file_signatures
 */

module.exports = {
	// gif
	'474946383961':                 { mime: 'image/gif',  extension: 'gif'  },
	'474946383761':                 { mime: 'image/gif',  extension: 'gif'  },
	// png
	'89504E470D0A1A0A':             { mime: 'image/png',  extension: 'png'  },
	// jpg
	'FFD8FF':                         { mime: 'image/jpeg', extension: 'jpg'  },
	// webp
	'57454250':                     { mime: 'image/webp', extension: 'webp' },
	// tiff
	'49492A00':                     { mime: 'image/tiff', extension: 'tiff' },
	'4D4D002A':                     { mime: 'image/tiff', extension: 'tiff' },
	// bmp
	'424D':                         { mime: 'image/bmp',  extension: 'bmp' },
	
	// mp4
	'000000146674797069736F6D':     { mime: 'video/mp4',  extension: 'mp4'  },
	'000000186674797033677035':     { mime: 'video/mp4',  extension: 'mp4'  },
	// mov
	'000000146674797071742020':     { mime: 'video/quicktime', extension: 'mov'},
	// webm
	'1A45DFA3':                     { mime: 'video/webm', extension: 'webm' },
	
	// mp3
	'FFFB':                         { mime: 'audio/mpeg', extension: 'mp3' },
	'494433':                       { mime: 'audio/mpeg', extension: 'mp3' },
	// ogg
	'4F676753':                     { mime: 'audio/ogg',  extension: 'ogg' },
	// flac
	'664C6143':                     { mime: 'audio/x-flac', extension: 'flac' },
	// wav
	'52494646':                     { mime: 'audio/x-wav', extension: 'wav' },
	
	// pdf
	'25504446':                     { mime: 'application/pdf', extension: 'pdf' },
}