# $horthand

This is a very small JavaScript library.

Using jQuery is overkill, but I want to use the shorthand of "document.getElementById", so I created it.

����͂ƂĂ�������JavaScript���C�u�����ł��B

jQuery���g���̂͑傰�������A"document.getElementById" �̒Z�k�`�͎g�������A�Ƃ������Ƃł�������܂����B

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

