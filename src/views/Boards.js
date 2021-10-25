import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Spinner, Modal, ListGroup, Button, FloatingLabel } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const CONTROLLER = require("../controllers/appController.js");
const BOARD_MODEL = require('../models/board.js');

const Boards = (props) => {

  const [boards, setBoards] = useState([]);
  const [newBoard, setNewBoard] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    getBoards();
  }, []);

  const handleError = (error) => {
    alert(error.message);
  }

  const getBoards = () => {
    if(props.userInfo === undefined || props.userInfo === null) {
      setBoards([]);
    }
    else {
      CONTROLLER.getBoards(props.userInfo.uid, setBoards, handleError);
    }
  }

  const onShow = () => {
    setShow(true);
    setNewBoard(Object.assign({}, BOARD_MODEL.board));
  }

  const onHide = () => {
    setShow(false);
    setNewBoard({});
  }

  return (
    <Container>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title> Create Board </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Title"
            className="mb-3"
          >
            <Form.Control
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeHolder="Title"
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingDescription"
            label="Description"
            className="mb-3"
          >
            <Form.Control
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              placeHolder="Description"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success"> Create </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col xs={8}>
          <h2> Your Boards </h2>
        </Col>
        <Col xs={4} style={{textAlign: "right"}}>
          <Button variant="outline-dark" onClick={onShow}> + </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {boards.map((board) => {
              return (
                <ListGroup.Item>
                  {board.title}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default Boards;
