class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <marquee direction="right" height="100" scrollamount="10" behavior="alternate" bgcolor="#FFF6EF">
                    <a href="Index.html"><img src="darts/darts.jpeg" height="100" width="350" alt="Natural" /></a>
                </marquee>
                <div class="navbar">
                    <a href="Index.html">Home</a>
                    <div class="subnav">
                        <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
                        <div class="subnav-content">
                            <a href="AboutDarts.html">Darts Wiki</a>
                        </div>
                    </div>
                    <div class="subnav">
                        <button class="subnavbtn" class="active">Services <i class="fa fa-caret-down"></i></button>
                        <div class="subnav-content">
                            <a href="OnlineTeaching.html">Online Teaching</a>
                            <a href="LiveTeaching.html">Live Teaching</a>
                        </div>
                    </div>
                    <div class="subnav">
                        <button class="subnavbtn">More <i class="fa fa-caret-down"></i></button>
                        <div class="subnav-content">
                            <a href="Blog.html">Blog</a>
                            <a href="DartsGPT.html">DartsGPT</a>
                            <a href="SupportUS.html">Support US</a>
                        </div>
                    </div>
                    <a href="Contacts.html">Contact</a>
                    <div class="subnavR">
                        <a href="Login.html">Login</a>
                    </div>
                </div>
            </header>
        `;
    }
}

customElements.define('header-component', Header);