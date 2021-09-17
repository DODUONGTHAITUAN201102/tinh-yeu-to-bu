import html from "../lib/core.js";

function Header() {
    return html`
        <header class="header">
            <h1>Todos - Can I help You?</h1>
            <input
                class="new-todo"
                placeholder="Tình Yêu To Bự Dành Cho Uyên"
                autofocus
                onkeyup="event.keyCode === 13 && dispatch('add',
            this.value.trim())"
            />
        </header>
    `;
}

export default Header;
