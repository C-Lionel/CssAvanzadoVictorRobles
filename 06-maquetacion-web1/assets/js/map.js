
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('load-iframe-map').innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.071653790245!2d-61.96293792344987!3d-33.758814213372055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c87b487979cc21%3A0x6ccc11578cb91bd7!2sTucum%C3%A1n%20555%2C%20Venado%20Tuerto%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1722537047693!5m2!1ses!2sar" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    }, 500);
});