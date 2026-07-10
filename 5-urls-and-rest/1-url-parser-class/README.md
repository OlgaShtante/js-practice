# URL Parser Class

Takes a URL typed into an input and parses its query parameters two ways inside
a `ParseUrl` **class**: `showUrlParamsBySplit()` (split on `?`/`&`/`=`) and
`showUrlParamsByRegExp()` (a single `/[?&]+([^=&]+)=([^&]*)/g` regex). Both
handle the "no parameters" case.

**Practises:** ES `class` with methods, two parsing strategies (string splitting
vs. regular expressions), `String.replace` with a callback.

**Source:** [`src/modules/main.js`](src/modules/main.js)

> A class-based extension of [`parse-url-params`](../0-parse-url-params).

**Run:** serve statically; enter a URL and watch the
console.

[**▶ Live demo**](https://stackblitz.com/github/OlgaShtante/js-practice/tree/main/5-urls-and-rest/1-url-parser-class?view=preview)
