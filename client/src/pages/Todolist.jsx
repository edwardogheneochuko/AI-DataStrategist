import React, { useState } from 'react';
import useListStore from '../store/listStore';
import { AnimatePresence, motion } from 'framer-motion';

const Todolist = () => {
  const { todo, add, remove, toggle, update, clearCompleted, clearAll } = useListStore();

  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTopic, setEditTopic] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleAdd = () => {
    if (topic.trim() && description.trim()) {
      add(topic, description);
      setTopic('');
      setDescription('');
    }
  };

  const handleUpdate = (id) => {
    update(id, { topic: editTopic, description: editDescription });
    setEditId(null);
    setEditTopic('');
    setEditDescription('');
  };

  return (
    <div className="p-4 w-full mx-auto text-black dark:text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Reminders to <span className="text-3xl text-green-600">Note</span>
      </h1>

      {/* Add Form */}
      <div className="flex flex-col gap-3 mb-6 w-full max-w-2xl mx-auto">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Topic"
          className="p-2 border rounded dark:bg-gray-100 dark:text-black dark:placeholder:text-black"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={4}
          className="p-2 border rounded resize-none dark:bg-gray-100 dark:text-black dark:placeholder:text-black"
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white cursor-pointer
           py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Add Todo
        </button>
      </div>

      {/* Todo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <AnimatePresence>
          {todo.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="p-4 border rounded shadow bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggle(t.id)}
                  className="mt-1"
                />
                <div className="flex-1 space-y-2">
                  {editId === t.id ? (
                    <>
                      <input
                        type="text"
                        value={editTopic}
                        onChange={(e) => setEditTopic(e.target.value)}
                        className="w-full p-1 border rounded dark:bg-gray-700 dark:text-white"
                      />
                      <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        rows={3}
                        className="w-full p-1 border rounded dark:bg-gray-700 dark:text-white"
                      />
                    </>
                  ) : (
                    <>
                      <h3 className={`font-semibold ${t.completed ? 'line-through text-gray-400' : ''}`}>
                        {t.topic}
                      </h3>
                      <p className={`text-sm ${t.completed ? 'line-through text-gray-400' : ''}`}>
                        {t.description}
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-2">
                {editId === t.id ? (
                  <button onClick={() => handleUpdate(t.id)} className="text-green-500 text-sm">
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setEditId(t.id);
                      setEditTopic(t.topic);
                      setEditDescription(t.description);
                    }}
                    className="text-yellow-500 text-sm"
                  >
                    Edit
                  </button>
                )}
                <button onClick={() => remove(t.id)} className="text-red-500 text-sm">
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-6 text-sm max-w-2xl mx-auto">
        <button onClick={clearCompleted} className="text-purple-500 hover:underline">
          Clear Completed
        </button>
        <button onClick={clearAll} className="text-red-500 hover:underline">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Todolist;
