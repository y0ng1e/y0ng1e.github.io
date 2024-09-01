# Lecture 4: Universal Resource Locator (URL)

* hypertext: text with links to other text

```html
<a href="https://en.wikipedia.org/wiki/URL">URL</a>
```

parts of an URL: `http://www.company.com:80/a/b/c.html?user=Alice&year=2008#p2`

1. scheme (`http://`): the protocal
2. host name (`www. ... .com`): name of the machine to connect to
3. server's host number (`80`): allows multiple servers to run on the same machine
4. hierarchical portion (`/a/b/c.html`): find content
5. query parameters (`?user=Alice&year=2008`): provides additional parameters
6. fragment (`#p2`): browser scroll page to fragment


URL schemes

1. `http`: most common scheme, HTTP Protocal
2. `https`: similar to `http`
3. `file`: read a file from local
4. `websocket`: create a TCP connection
5. `mailto`: open an email program and compose a message

query parameters

* traditionally used as: `?order=`, `?query=`, `?theme=`.

links

* implemented with the `<a>` tag: `<a href="http://www.company.com/news/2009.html">2009 News</a>`

URLs

1. full URL: `<a href="http://www.xyz.com/news/2009.html">2009 News</a>`
2. absolute URL: `<a href="/stock/quote.html">`
3. relative URL: `<a href="2008/March.html">`
4. define an anchor point: `<a name="sec3">`
5. move to an anchor point: `<a href="#sec3">`

uses of URLs

1. load images: `<img src="..." />`
2. load stylesheets: `<link rel="stylesheet" type="text/css" href="...">`
3. embed a page: `<iframe src="http://www.google.com">`

URL encoding

1. all punctuations must be replaced by `%xx`, where `xx` is a hexadecimal value of the character.

