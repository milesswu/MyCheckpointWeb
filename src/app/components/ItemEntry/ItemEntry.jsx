import React from "react";
import "./ItemEntry.css";
import makeCheckForItem from "../makeCheckForItem/makeCheckForItem";

function ItemEntry(props) {
    /*should be const?*/

    var { itemName, itemNum, present, updateItem, deleteItem } = props;

    return (
        <div>
            <div className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text bg-success">
                        <input
                            type="checkbox"
                            aria-label="Checkbox for following text input"
                        />
                    </div>
                </div>
                <input
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon1"
                    value={itemName}
                    onChange={event => updateItem(itemNum, event.target.value)}
                />
                <div className="input-group-append">
                    <button
                        id={itemNum}
                        onClick={event => deleteItem(event.target.id)}
                        className="btn btn-danger"
                    >
                        x
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemEntry;
