import React from 'react';

import Masonry from "react-masonry-css";
import TextareaAutosize from 'react-autosize-textarea';

// import useMediaQuery from 'material';
function AddThought({ thoughts, updateFields, onSubmitForm, getThoughtsFromLS, deleteAllThoughts, editState }) {

    const { description, mood, automaticthought, supportingfacts, contradictfacts, realisticthought, rateyourfeeling } = thoughts;

    const breakpointColumnsObj = {
        default: 4,
        992: 3,
        768: 2,
        544: 1,
    };

    const addThoughtStyle = {
        backgroundColor: "rgba(255,255,255, 0.8)"
    }

    const formStyle = {
        padding: "15px",
    }

    const ulStyle = {
        listStyle: "none",
        padding: "0"
    }

    const btnStyle = {
        padding: "0.25rem",
    }

    const masonryGrid = {
        display: "flex",
        marginLeft: "-15px",
        flexWrap: "wrap",
        width: "auto"
    }

    const labelStyle = {
        padding: "0.25rem 0.5rem"
    }

    const textareaStyle = {
        width: "100%",
        height: "100% !important",
        border: "none",
        opacity: "0.8",
        padding: "0.25rem 0.5rem",
    }

    return <div style={addThoughtStyle} className="add-thought container">
        <div className="row">
            <div className="add-thought__list col-md-3">
                <div className="thoughts-list">
                    <ul style={ulStyle}>
                        {getThoughtsFromLS}
                    </ul>
                    {
                        JSON.parse(localStorage.getItem('thought')).length > 0 &&
                        <button style={btnStyle} onClick={deleteAllThoughts} className="btn btn-danger d-block w-100">Delete All</button>
                    }
                </div>
            </div>

            <div className="add-thought__form col-md-9">
                <form style={formStyle} onSubmit={onSubmitForm}>
                    <Masonry
                        style={masonryGrid}
                        breakpointCols={breakpointColumnsObj}
                        columnClassName="my-masonry-grid_column">

                        <div className="form-group">
                            <label style={labelStyle} htmlFor="description">Description</label>
                            <TextareaAutosize
                                style={textareaStyle}
                                rows={8}
                                value={description || ""}
                                onChange={updateFields}
                                id="description"
                                name="description"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label style={labelStyle} htmlFor="mood">Mood</label>
                            <TextareaAutosize
                                style={textareaStyle}
                                rows={5}
                                value={mood || ""}
                                name="mood"
                                id="mood"
                                onChange={updateFields}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label style={labelStyle} htmlFor="automaticthought">Automatic Thoughts</label>
                            <TextareaAutosize
                                style={textareaStyle}
                                rows={5}
                                value={automaticthought || ""}
                                id="automaticthought"
                                name="automaticthought"
                                onChange={updateFields}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label style={labelStyle} htmlFor="supportingfacts">Supporting Facts</label>
                            <TextareaAutosize
                                style={textareaStyle}
                                rows={5}
                                value={supportingfacts || ""}
                                id="supportingfacts"
                                name="supportingfacts"
                                onChange={updateFields}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label style={labelStyle} htmlFor="contradictfacts">Contradicting Facts</label>
                            <TextareaAutosize
                                style={textareaStyle}
                                rows={5}
                                value={contradictfacts || ""}
                                id="contradictfacts"
                                name="contradictfacts"
                                onChange={updateFields}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label style={labelStyle} htmlFor="realisticthought">Realisting Thoughts</label>
                            <TextareaAutosize
                                style={textareaStyle}
                                rows={5}
                                value={realisticthought || ""}
                                id="realisticthought"
                                name="realisticthought"
                                onChange={updateFields}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label style={labelStyle} htmlFor="rateyourfeeling">Rate your feeling</label>
                            <input required
                                type="number"
                                min="0"
                                max="100"
                                className="form-control"
                                id="rateyourfeeling"
                                name="rateyourfeeling"
                                value={rateyourfeeling || ""}
                                onChange={updateFields}
                            />
                        </div>
                    </Masonry>


                    {
                        editState === true ?
                            <button className="d-block btn btn-success">
                                Edit
                    </button>
                            :
                            <button className="d-block btn btn-primary">
                                Submit
                    </button>
                    }

                </form>
            </div>

        </div>

    </div>;
}



export default AddThought;
