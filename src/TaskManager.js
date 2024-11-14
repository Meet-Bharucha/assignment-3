// src/TaskManager.js
import React, { Component } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

class TaskManager extends Component {
  state = {
    tasks: [
      { id: 1, text: "Finish React project", completed: false },
      { id: 2, text: "Write blog post", completed: false },
    ],
  };

  addTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  deleteTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskId),
    });
  };

  toggleTaskCompletion = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      ),
    });
  };

  render() {
    return (
      <div className="task-manager">
        <h1>Task Manager</h1>
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          toggleTaskCompletion={this.toggleTaskCompletion}
        />
      </div>
    );
  }
}

export default TaskManager;
