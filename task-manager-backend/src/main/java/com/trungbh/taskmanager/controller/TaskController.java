package com.trungbh.taskmanager.controller;

import com.trungbh.taskmanager.model.Task;
import com.trungbh.taskmanager.service.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@RequiredArgsConstructor
public class TaskController {
    private final TaskService taskService;

    @GetMapping
    public List<Task> getAllTasks(Authentication auth) {
        return taskService.getTasks(auth.getName());
    }

    @PostMapping
    public Task createTask(@RequestBody Task task, Authentication auth) {
        return taskService.addTask(task, auth.getName());
    }
}
