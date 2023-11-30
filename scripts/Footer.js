class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <center>
                <p>© 2023</p>
                <p>Provided by <a href="https://code.visualstudio.com/">Visual Studio Code</a></p>
                <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
                <a href="https://twitter.com/home"><i class="fa fa-twitter"></i></a>
                <a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>
                <a href="https://www.youtube.com/"><i class="fa fa-youtube"></i></a>
                <p>Tel: <a href="tel:+85269696969">+852 6969 6969</a>  Email: <a href=mailto:"PeterChan@gmail.com">PeterChan@gmail.com</a></p>
            </center>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);