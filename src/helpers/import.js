const links = document.querySelectorAll('link[rel="import"]')

// Import and add each page to the DOM
Array.prototype.forEach.call(links, (link) => {
	let template = link.import.querySelector('.template')
  	let clone = document.importNode(template.content, true)
	document.querySelector('#page-wrapper').appendChild(clone)
})