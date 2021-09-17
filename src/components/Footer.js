import html from "../lib/core.js";
import { connect } from "../lib/store.js";

const connector = connect();

function Footer({ todos, filter, filters }) {
    const types = Object.keys(filters);
    return html`
        <footer class="footer">
            <span class="todo-count"
                ><strong>${todos.filter(filters.active).length}</strong> item
                left</span
            >
            <ul class="filters">
                ${types.map(
                    (type) => html`
                        <li>
                            <a
                                class="${type === filter && "selected"}"
                                href="#"
                                onclick="dispatch('switch', '${type}')"
                                >${type[0].toUpperCase() + type.slice(1)}
                            </a>
                        </li>
                    `
                )}
            </ul>
            <button
                class="clear-completed"
                onclick="dispatch('clearCompleted', '')"
            >
                Clear completed
            </button>
        </footer>
    `;
}

export default connector(Footer);
