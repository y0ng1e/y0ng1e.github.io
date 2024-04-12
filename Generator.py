CodeHighlighterJS = "<script src=""https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js""></script>\n<!-- and it's easy to individually load additional languages -->\n<script src=""https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js""></script>\n\n<script>hljs.highlightAll();</script>\n"

"""""
fileR = open('Tutorial.html', 'r')
Lines = fileR.readlines()

count = 0
# Strips the newline character
for line in Lines:
	count += 1
	print("Line{}: {}".format(count, line.strip()))
    """""
	
fileW = open('Tutorial.html', 'a')
fileW.writelines(CodeHighlighterJS)
fileW.close()