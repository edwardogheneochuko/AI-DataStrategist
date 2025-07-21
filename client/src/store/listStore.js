import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

const useListStore = create(
  persist(
    immer((set) => ({
      todo: [],

      add: (topic, description) => {
        set((state) => {
          state.todo.push({ id: Date.now(), topic, description, completed: false });
        });
      },

      remove: (id) => {
        set((state) => {
          state.todo = state.todo.filter((t) => t.id !== id);
        });
      },

      toggle: (id) => {
        set((state) => {
          const todo = state.todo.find((t) => t.id === id);
          if (todo) todo.completed = !todo.completed;
        });
      },

      update: (id, newText) => {
        set((state) => {
          const todo = state.todo.find((t) => t.id === id);
          if (todo) todo.text = newText;
        });
      },

      clearCompleted: () => {
        set((state) => {
          state.todo = state.todo.filter((t) => !t.completed);
        });
      },

      clearAll: () => {
        set((state) => {
          state.todo = [];
        });
      },
    })),
    {
      name: 'todo-storage',
    }
  )
);

export default useListStore;
