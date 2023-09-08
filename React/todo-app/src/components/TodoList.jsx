import React, { useState } from "react";
import "../App.css";
import {
  Box,
  Heading,
  Input,
  Button,
  UnorderedList,
  ListItem,
  IconButton,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import { CheckCircleIcon, DeleteIcon } from "@chakra-ui/icons";

function TodoList() {
  const todayTasks = [
    { task: "Gym", isCompleted: true, id: Math.random() },
    { task: "Leet Code Problems", isCompleted: false, id: Math.random() },
    {
      task: "E-commerce Project Authentication implementation",
      isCompleted: true,
      id: Math.random(),
    },
    { task: "Launch at 14", isCompleted: false, id: Math.random() },
    { task: "Collage Project", isCompleted: true, id: Math.random() },
    { task: "Evening Walk ", isCompleted: false, id: Math.random() },
    { task: "Revision of Concepts", isCompleted: true, id: Math.random() },
  ];
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(todayTasks);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }
    const taskExists = tasks.some((existingTask) => existingTask.task === task);
    if (taskExists) {
      alert("Task is already Added");
    }
    if (!taskExists) {
      setTasks([...tasks, { task, isCompleted: false, id: Math.random() }]);
    }

    setTask("");
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };
  const handleStatus = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <Box p={4}>
      <Box>
        {" "}
        <Box>
          <Heading textAlign={"center"} as="h1" size="xl" mb={4}>
            Todo List
          </Heading>
        </Box>
        <Box
          gap={"10px"}
          mb={4}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Input
            type="text"
            placeholder="Enter a task"
            value={task}
            w={{ base: "74%", lg: "40%" }}
            onChange={(e) => setTask(e.target.value)}
          />

          <Button onClick={addTask} colorScheme="green">
            Add
          </Button>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"60px"}
        >
          <Box w={{ base: "94%", lg: "38%" }} className="todoList">
            <Text fontSize={"20px"} fontWeight={"bold"} margin={"12px"}>
              Remaining Task's
            </Text>
            <UnorderedList>
              {tasks.length === 0 ? (
                <Text textAlign={"center"}>No tasks added yet!</Text>
              ) : (
                tasks.map((task, index) => (
                  <ListItem
                    listStyleType={"none"}
                    key={index}
                    mb={2}
                    cursor="pointer"
                  >
                    {!task.isCompleted ? (
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"10px"}
                      >
                        <Checkbox
                          display={"none"}
                          onClick={() => handleStatus(task.id)}
                          isChecked={task.isCompleted}
                          size="lg"
                        />
                        <Button
                          onClick={() => handleStatus(task.id)}
                          colorScheme={task.isCompleted ? "green" : "gray"}
                        >
                          {task.isCompleted ? (
                            <CheckCircleIcon />
                          ) : (
                            <CheckCircleIcon />
                          )}
                        </Button>
                        <Box
                          style={
                            task.isCompleted
                              ? { backgroundColor: "#38A169" }
                              : { backgroundColor: "#FFFFFF" }
                          }
                          w={{ base: "89%", lg: "80%" }}
                          className="todos"
                        >
                          <Text onClick={() => handleStatus(task.id)} ml={2}>
                            {task.task}
                          </Text>
                        </Box>
                        <IconButton
                          boxShadow={"rgba(252, 0, 0, 0.2) 0px 7px 29px 0px;"}
                          h={"40px"}
                          w={"60px"}
                          colorScheme="red"
                          aria-label="Remove task"
                          size="sm"
                          icon={<DeleteIcon />}
                          onClick={() => removeTask(index)}
                        />
                      </Box>
                    ) : (
                      ""
                    )}
                  </ListItem>
                ))
              )}
            </UnorderedList>
          </Box>
          <Box w={{ base: "94%", lg: "38%" }} className="todoList">
            <Text fontSize={"20px"} fontWeight={"bold"} margin={"12px"}>
              Task's Completed
            </Text>
            <UnorderedList>
              {tasks.length === 0 ? (
                <Text textAlign={"center"}>No tasks added yet!</Text>
              ) : (
                tasks.map((task, index) => (
                  <ListItem
                    listStyleType={"none"}
                    key={index}
                    mb={2}
                    cursor="pointer"
                  >
                    {task.isCompleted ? (
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={"10px"}
                      >
                        <Checkbox
                          display={"none"}
                          onClick={() => handleStatus(task.id)}
                          isChecked={task.isCompleted}
                          size="lg"
                        />
                        <Button
                          onClick={() => handleStatus(task.id)}
                          colorScheme={task.isCompleted ? "green" : "gray"}
                        >
                          {task.isCompleted ? (
                            <CheckCircleIcon />
                          ) : (
                            <CheckCircleIcon />
                          )}
                        </Button>
                        <Box
                          style={
                            task.isCompleted
                              ? { backgroundColor: "#38A169" }
                              : { backgroundColor: "#FFFFFF" }
                          }
                          w={"80%"}
                          className="todos"
                        >
                          <Text onClick={() => handleStatus(task.id)} ml={2}>
                            {task.task}
                          </Text>
                        </Box>
                        <IconButton
                          boxShadow={"rgba(252, 0, 0, 0.2) 0px 7px 29px 0px;"}
                          h={"40px"}
                          w={"60px"}
                          colorScheme="red"
                          aria-label="Remove task"
                          size="sm"
                          icon={<DeleteIcon />}
                          onClick={() => removeTask(index)}
                        />
                      </Box>
                    ) : (
                      ""
                    )}
                  </ListItem>
                ))
              )}
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default TodoList;
