import storage from "../util/storage.js";

const init = {
    todos: storage.get(),
    isEditing: null,
    filter: "all",
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed,
    },
};

const actions = {
    add({ todos }, [newTitle]) {
        if (newTitle) {
            todos.push({
                title: newTitle,
                completed: false,
            });
            storage.set(todos);
        }
    },
    delete({ todos }, [index]) {
        todos.splice(index, 1);
        storage.set(todos);
    },
    toggleAll({ todos }, [isToggleAll]) {
        todos.forEach((todo) => {
            todo.completed = isToggleAll;
        });
        storage.set(todos);
    },
    checked({ todos }, [index]) {
        const todo = todos[index];
        todo.completed = !todo.completed;
        storage.set(todos);
    },
    switch(state, args) {
        const [newFilter] = args;
        state.filter = newFilter;
    },
    editing(state, [index]) {
        state.isEditing = index;
    },
    save(state, [data]) {
        if (state.isEditing != null) {
            if (data != "") {
                state.todos[state.isEditing].title = data;
                storage.set(state.todos);
            } else {
                this.delete(state, [state.isEditing]);
            }
            state.isEditing = null;
        }
    },
    clearCompleted(state, args) {
        state.todos = state.todos.filter(state.filters.active);
        storage.set(state.todos);
        console.log(state);
    },
};

function reducer(state = init, action, args) {
    actions[action] && actions[action](state, args);
    return state;
}

export default reducer;
