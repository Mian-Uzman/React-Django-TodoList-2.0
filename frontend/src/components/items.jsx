import { useState, useEffect } from 'react'
import axios from "axios";
import NewItem from "./newitem";
import { InputGroup, FormControl } from "react-bootstrap";
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { Dropdown, ButtonGroup, DropdownButton, SplitButton } from 'react-bootstrap';



function Items(props) {
    const listID = props.match.params.listID;
    const name = props.location.nameList;
    const [allItems, SetAllItems] = useState([{
        id: "",
        text: "",
        complete: "",
    }]);
    const [newItem, SetNewItem] = useState([{
        id: "",
        text: "",
        complete: false,
    }])
    useEffect(() => {
        getAllItems();
    }, [deleteItem, updateItem, handleSubmitButton]);

    function getAllItems() {
        axios.get(`/api/get-items/${listID}`,
            { headers: { "authorization": `JWT ${localStorage.getItem('token')}` } })
            .then(response => {
                SetAllItems(response.data);

            })
            .catch(err => console.log(err));
    }



    function deleteItem(item) {
        const index = allItems.indexOf(item);
        axios.delete(`/api/delete-item/${allItems[index].id}`,
            { headers: { "authorization": `JWT ${localStorage.getItem('token')}` } })
            .catch(err => console.log(err));
    }

    function updateItem(item) {
        const index = allItems.indexOf(item);
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "authorization": `JWT ${localStorage.getItem('token')}`
            },
        };
        axios.put(`/api/update-item/${allItems[index].id}`, {
            text: allItems[index].text,
            complete: allItems[index].complete,
            name: listID
        }, requestOptions).catch(err => console.log(err));
    }


    function showStatus(item) {
        const index = allItems.indexOf(item);
        if (allItems[index].complete === true) {
            return (<td>Completed</td>);
        }
        else {
            return (<td>In-Complete</td>);
        }
    }


    function handleUpdateText(item, e) {
        const index = allItems.indexOf(item);
        const array = [...allItems];
        array[index].text = e.target.value;
        SetAllItems(array);
        console.log(allItems[index].text)

    }


    function handleUpdateComplete(item, e) {
        const index = allItems.indexOf(item);
        const array = [...allItems];
        array[index].complete = e.target.checked;
        SetAllItems(array);
    }

    function renderDropdown() {
        return (
            <DropdownButton
                id="dropdown-basic-button"
                title="Show Items"
                variant='dark'>
                <Dropdown.Item eventKey='1' onSelect={(e) => showItems(e)}>All Items</Dropdown.Item>
                <Dropdown.Item eventKey='2' onSelect={(e) => showItems(e)}>Completed Items</Dropdown.Item>
                <Dropdown.Item eventKey='3' onSelect={(e) => showItems(e)}>In-Completed Items</Dropdown.Item>
            </DropdownButton >
        )
    }

    function showItems(e) {
        if (e === '1') {

        }
        if (e === '2') {
            const array = [allItems.filter(item => item.complete == true)];
            SetAllItems(array);
        }
        if (e === '3') {
            const array = [allItems.filter(item => item.complete == false)];
            SetAllItems(array);
        }
    }

    //Adding a new item
    function handleAddText(e) {
        const array = [...newItem];
        array.text = e.target.value;
        SetNewItem(array);
    }

    function handleSubmitButton() {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": `JWT ${localStorage.getItem('token')}`
            },

        };
        console.log(listID)
        axios.post("/api/add-item/", {
            text: newItem.text,
            complete: newItem.complete,
            name: listID,
        }, requestOptions)
        console.log(newItem);
    }



    return (
        <Container style={{ marginTop: '100px' }}>
            <h3>Items in: {name}</h3>
            {renderDropdown()}
            <Table striped bordered hover className='mt-3'>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Item Name</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {allItems.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            {showStatus(item)}
                            <td>
                                <InputGroup className="mb-1 mt-1">
                                    <InputGroup.Prepend>
                                        <InputGroup.Checkbox
                                            checked={item.complete}
                                            onChange={(e) => handleUpdateComplete(item, e, index)} />
                                    </InputGroup.Prepend>
                                    <FormControl
                                        aria-label="Text input with checkbox"
                                        placeholder={item.text}
                                        onChange={(e) => handleUpdateText(item, e)} />
                                </InputGroup>
                            </td>
                            <td><Button
                                className="btn btn-sm mr-2"
                                onClick={() => updateItem(item)}>Update
                                        </Button>
                                <Button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => deleteItem(item)}>Delete
                                        </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <NewItem
                handleAddText={handleAddText}
                handleSubmitButton={handleSubmitButton} />

        </Container>
    )
}

export default Items


