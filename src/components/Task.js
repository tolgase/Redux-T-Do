import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button } from "react-bootstrap";
import { editTask, toggleTask } from "../redux/actions";
import { useDispatch } from "react-redux";

const Task = ({ task, id, isDone }) => {
  const [show, setShow] = useState(false);
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  return (
    <div
      className="taskItem"
      key={id}
      style={{ backgroundColor: isDone ? "#454545" : "#262626" }}
    >
      <input
        checked={isDone}
        type="checkbox"
        onClick={() => dispatch(toggleTask(id))}
        style={{ gridArea: "check", alignSelf: "center", justifySelf: "end" }}
      />

      <p
        style={{
          gridArea: "task",
          margin: "0px",
          textDecoration: isDone ? "line-through 3px red" : "none",
        }}
      >
        {task}
      </p>

      <button className="editBtn" onClick={() => setShow(true)}>
        <FontAwesomeIcon icon={faEdit} style={{ color: "black" }} />
      </button>

      <Modal
        style={{ color: "black" }}
        show={show}
        onHide={() => setShow(false)}
      >
        <input
          type="text"
          placeholder="Edit your task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            dispatch(editTask(id, newTask));
            setShow(false);
            setNewTask("");
          }}
        >
          Save changes
        </Button>
      </Modal>
    </div>
  );
};

export default Task;
