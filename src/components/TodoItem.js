import html from "../lib/core.js";

function TodoItem(todo, index, isEditing) {
    return html`
        <li
            class="${todo.completed && "completed"} ${isEditing === index &&
            "editing"}"
        >
            <div class="view">
                <input
                    class="toggle"
                    type="checkbox"
                    ${todo.completed && "checked"}
                    onchange="dispatch('checked', ${index})"
                />
                <label ondblclick="dispatch('editing', ${index})"
                    >${todo.title}</label
                >
                <button
                    class="destroy"
                    onclick="dispatch('delete', ${index})"
                ></button>
            </div>
            <input
                class="edit"
                value="${todo.title}"
                onkeyup="event.keyCode === 13 && dispatch('save', this.value.trim())"
                onblur="dispatch('save', this.value.trim())"
            />
        </li>
    `;
}

export default TodoItem;
