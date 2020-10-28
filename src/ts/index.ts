document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img[discord][avatar]').forEach((elem) => {
        const e = elem as HTMLImageElement
        e.style.width = elem.getAttribute('size') && elem.getAttribute('size') || '50px'
        e.style.height = elem.getAttribute('size') || '50px'
    })
    document.querySelectorAll('div[discord][avatar-wrapper]').forEach(elem => {
        const el = elem as HTMLDivElement
        elem.childNodes.forEach(e => {
            if (e instanceof HTMLSpanElement) {
                e.style.width = el.offsetWidth/3 + 'px'
                e.style.height = el.offsetHeight/3 + 'px'
                e.style.top = el.offsetHeight/1.7 + 'px'
                e.style.left = el.offsetWidth/1.5 + 'px'
            }
        })
    })
})