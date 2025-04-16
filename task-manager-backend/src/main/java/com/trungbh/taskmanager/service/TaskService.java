package com.trungbh.taskmanager.service;

import com.trungbh.taskmanager.model.Task;
import com.trungbh.taskmanager.model.User;
import com.trungbh.taskmanager.repository.TaskRepository;
import com.trungbh.taskmanager.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository taskRepo;
    private final UserRepository userRepo;

    public List<Task> getTasks(String username) {
        return taskRepo.findByUserUsername(username);
    }

    public Task addTask(Task task, String username) {
        User user = userRepo.findByUsername(username).orElseThrow();
        task.setUser(user);
        return taskRepo.save(task);
    }

    // update, delete tương tự
}
