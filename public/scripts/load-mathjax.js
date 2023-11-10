window.MathJax = {
	tex: {
		inlineMath: [
			['$', '$'],
			['\\(', '\\)'],
		],
	},
	svg: {
		fontCache: 'global',
	},
	options: {
		skipHtmlTags: [
			//  HTML tags that won't be searched for math
			'script',
			'noscript',
			'style',
			'textarea',
			'pre',
			'code',
			'annotation',
			'annotation-xml',
			'header',
			'span',
			'p',
		],
		includeHtmlTags: {
			//  HTML tags that can appear within math
			br: '\n',
			wbr: '',
			'#comment': '',
		},
		ignoreHtmlClass: 'tex2jax_ignore', //  class that marks tags not to search
		processHtmlClass: 'tex2jax_process', //  class that marks tags that should be searched
		compileError: function (doc, math, err) {
			doc.compileError(math, err)
		},
		typesetError: function (doc, math, err) {
			doc.typesetError(math, err)
		},
	},
}
;(function () {
	const script = document.createElement('script')
	script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js'
	script.async = true
	document.head.appendChild(script)
})()
