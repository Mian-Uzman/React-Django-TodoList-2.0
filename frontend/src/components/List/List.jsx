import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function List({ todolist, deleteList }) {
    return (
        <>
            {
                todolist.map((item, index) => (
                    <tr key={item.id}>
                        <td >{index + 1}</td>
                        <td >{item.name}</td>
                        <td >
                            <Link
                                to={{
                                    pathname: `/lists/${item.id}`,
                                    name: item.name,

                                }}>
                                <Button className="btn btn-primary mr-3">Add Item</Button>
                            </Link>
                            <Button
                                className="btn btn-danger"
                                onClick={() => deleteList(item)}>Delete</Button>
                        </td>
                    </tr>
                ))
            }
        </>
    )
}

export default List
