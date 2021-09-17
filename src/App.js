import html from "./lib/core.js";
import { connect } from "./lib/store.js";
import Header from "./components/Header.js";
import TodoList from "./components/TodoList.js";
import Footer from "./components/Footer.js";

const connector = connect();

function App({ todos }) {
    return html`
        <div class="App">
            ${Header()} ${todos.length > 0 && TodoList()}
            ${todos.length > 0 && Footer()}
        </div>
    `;
}

export default connector(App);
