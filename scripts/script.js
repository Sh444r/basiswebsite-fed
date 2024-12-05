// JavaScript Document
console.log("hi");

// CODE VOOR CAROUSEL1-DOTS

const dots = document.querySelectorAll('.carousel1-dots button');
const items = document.querySelectorAll('.carousel1-items li');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Reset active class on dots
        dots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        // Dit stukje code wss weglaten want met dit code is het niet de zichtbare goede volgorde
        // items.forEach(item => item.style.display = 'block');

        //  scroll naar het specifieke item
        const selectedItem = items[index];
        selectedItem.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    });
});

