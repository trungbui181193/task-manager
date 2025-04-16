import { useEffect, useState } from 'react';
import { getTasks, createTask, deleteTask } from '../api/task';

export default function TaskListPage() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch {
      alert('Lỗi tải tasks');
    }
  };

  const handleCreate = async () => {
    if (!newTitle.trim()) return;
    await createTask({ title: newTitle });
    setNewTitle('');
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container py-5">
      <h2 className="mb-4">Công việc của bạn</h2>
      <div className="d-flex mb-3">
        <input className="form-control me-2" placeholder="Thêm công việc mới"
               value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <button className="btn btn-success" onClick={handleCreate}>Thêm</button>
      </div>

      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between">
            {task.title}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
