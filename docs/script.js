function updateDark() {
    if (!localStorage.getItem('dark') || localStorage.getItem('dark') === 'true') {
        document.body.setAttribute('dark', '')
        document.querySelector('#theme-switcher').innerHTML
    }
    else if (localStorage.getItem('dark') === 'false') document.body.removeAttribute('dark')
}

window.addEventListener('DOMContentLoaded', () => {
    updateDark()

    document.querySelector('#theme-switcher').addEventListener('click', () => {
        const dark = localStorage.getItem('dark')
        if (!dark || dark === 'true') localStorage.setItem('dark', 'false')
        else localStorage.setItem('dark', 'true')
        updateDark()
    })
})
