
const todoSelector = (store) => store.todo;

export const todoIdsSelector = (store) => todoSelector(store)?.allIds || [];

export const todoByIdSelector = (store, id) => {
  const todoStore = todoSelector(store);

  if (!todoStore) {
    return {};
  }
  
  const todoItem = todoStore.byIds[id];

  return {
    ...todoItem,
    id,
  };
}

export const todosSelector = (store) =>
  todoIdsSelector(store).map((id) => todoByIdSelector(store, id));