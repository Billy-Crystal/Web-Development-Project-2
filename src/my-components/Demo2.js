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

const Demo2 = () => {
    const [board, setBoard] = useState(new Set());
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        if (!board.has(id)) {
            setBoard((prevBoard) => new Set(prevBoard).add(id));
            const selectedPicture = PictureList.find(
                (picture) => picture.id === id
            );

            if (selectedPicture) {
                setBoard((prevBoard) => new Set(prevBoard).add(id));
            }
        }
    };

    return (
        <>
            <div className="Pictures">
                <h1>Drag and Drop</h1>
                {PictureList.map((picture) => (
                    <Picture
                        url={picture.url}
                        id={picture.id}
                        key={picture.id}
                    />
                ))}{" "}
            </div>
            <div className="Board" ref={drop}>
                {[...board].map((id) => {
                    const selectedPicture = PictureList.find(
                        (picture) => picture.id === id
                    );
                    return (
                        <Picture url={selectedPicture.url} id={id} key={id} />
                    );
                })}
            </div>
        </>
    );
};

export default Demo2;
