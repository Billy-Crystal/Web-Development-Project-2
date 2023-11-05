import React, { useState } from "react";
import movie0 from "./images/movie0.jpg";
import movie1 from "./images/movie1.jpg";
import movie2 from "./images/movie2.jpg";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import "../App.css";

const PictureList = [
    {
        id: 1,
        url: movie0,
    },
    {
        id: 2,
        url: movie1,
    },
    {
        id: 3,
        url: movie2,
    },
];

function Demo2() {
    const [board, setBoard] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    const addImageToBoard = (id) => {
        const selectedPicture = PictureList.find(
            (picture) => picture.id === id
        );
        if (selectedPicture) {
            setBoard((board) => [...board, selectedPicture]);
        }
    };

    return (
        <>
            <div className="Pictures">
                {" "}
                {PictureList.map((picture) => {
                    return <Picture url={picture.url} id={picture.id} />;
                })}{" "}
            </div>
            <div className="Board" ref={drop}>
                {board.map((picture) => {
                    return <Picture url={picture.url} id={picture.id} />;
                })}
            </div>
        </>
    );
}

export default Demo2;
