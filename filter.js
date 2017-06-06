let badWords = "w3schools|david|walsh|jquery.....".split('|') 

let cleanup = word => {
    document.title = document.title.split(' ').map(word => {
        return badWords.indexOf(word.toLowerCase()) != -1 ? '*'.repeat(word.length) : word
    }).join(' ')
}

let createObserver = function() {
    let observer = new MutationObserver((mutations) => {
        
        console.log('Mutations!', mutations)
        observer.disconnect()
        observer = null
        cleanup()
        createObserver()
    })

    observer.observe(
        document.querySelector('title'),
        { subtree: true, characterData: true, childList: true }
    )
}
createObserver()

cleanup()
