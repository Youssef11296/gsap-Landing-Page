const timeLine = gsap.timeline();

timeLine
    .from('header nav ul li', { x: '100vh', opacity: 0, stagger: .2, delay: 2 })
    .from('header nav .logo', { scaleX: 0, duration: 1 })
    .from('main .content-box .content h2', { scaleX: 0, duration: 1, stagger: .4 }, '<')
    .from('main .content-box .content p', { opacity: 0, duration: 1 }, '<2')
    .from('main .content-box .content a', { y: '-400px' })
    .from('main .content-box .image', { opacity: 0, duration: 1 })
    .from('main .features-box .features a', { y: '800px', opacity: 0, stagger: .2 })
    .from('main .features-box .shapes div', { opacity: 0 })

const icon = document.querySelector('header nav .icon');
const lines = document.querySelectorAll('header nav .icon .line')
const ul = document.querySelector('header nav ul');
const links = document.querySelectorAll('header nav ul li');

icon.addEventListener('click', () => {
    lines.forEach(line => {
        line.classList.toggle('xline');
    })
    ul.classList.toggle('show');
    links.forEach(link => {
        link.classList.toggle('link');
    })
})