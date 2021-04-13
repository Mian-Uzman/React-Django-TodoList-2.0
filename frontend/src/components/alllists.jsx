import React, { useState, useEffect } from 'react';
import axios from "axios";
import CreateList from "./createlist";

import "./style.css";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import List from './List';



export default function ToDoList() {
    const [todolist, SetTodolist] = useState([{
        name: null, id: null
    }]);
    const [newList, SetNewList] = useState(null);

    useEffect(() => {
        getAllList();
    }, [handleSubmitButton, deleteList]);

    function getAllList() {
        axios.get("/api/get-list/",
            { headers: { "authorization": `JWT ${localStorage.getItem('token')}` } })
            .then(response => {
                SetTodolist(response.data);
            })
            .catch(err => console.log(err));

    }

    function deleteList(item) {
        const index = todolist.indexOf(item);
        axios.delete(`/api/delete-list/${todolist[index].id}`,
            { headers: { "authorization": `JWT ${localStorage.getItem('token')}` } })
            .catch(err => console.log(err));

    }
    function handleAddList(e) {
        SetNewList(e.target.value);
    }
    function handleSubmitButton() {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `JWT ${localStorage.getItem('token')}`
            },

        };
        axios.post("/api/add-list/", {
            name: newList,
        }, requestOptions).catch(err => console.log(err));

    }
    return (
        <React.Fragment>
            <Container style={{ marginTop: '100px' }}>
                <h3>Total Lists: {todolist.length}</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>List Name</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <List todolist={todolist} deleteList={deleteList} />
                    </tbody>
                </Table>
                <CreateList
                    handleAddList={handleAddList}
                    handleSubmitButton={handleSubmitButton} />
            </Container>
        </React.Fragment >
    )
}



