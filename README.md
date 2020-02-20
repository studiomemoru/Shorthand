# $horthand

This is a very small JavaScript library.

Using jQuery is overkill, but I want to use the shorthand of "document.getElementById", so I created it.

これはとても小さいJavaScriptライブラリです。

jQueryを使うのは大げさだが、"document.getElementById" の短縮形は使いたい、ということでこれを作りました。

## Functions

### $H
Shorthand of "window.document.getElementById".

- args: id (String)
- return: DOM Element.

### $H.isset
- args: obj (any)
- return: true if obj is defined and not null.

### $H.later
For the passed function, it's placed on a queue and scheduled to run at the next opportunity.

- args: func (Function)
- return: -

## License

Unlicense (Public Domain)

