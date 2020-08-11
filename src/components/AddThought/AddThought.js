import React from 'react';

import Masonry from "react-masonry-css";
import TextareaAutosize from 'react-autosize-textarea';

function AddThought({ thoughts, updateFields, onSubmitForm, getThoughtsFromLS, deleteAllThoughts, editState }) {

    const { description, mood, automaticthought, supportingfacts, contradictfacts, realisticthought, rateyourfeeling } = thoughts;

    const breakpointColumnsObj = {
        default: 4,
        992: 3,
        768: 2,
        544: 1,
    };

    { console.log(JSON.parse(localStorage.getItem('thought')).length); }

    return <div className="add-thought container">
        <div className="row">
            <div className="add-thought__list col-md-3">
                <div className="thoughts-list">
                    <ul>
                        {getThoughtsFromLS}
                    </ul>
                    {
                        JSON.parse(localStorage.getItem('thought')).length > 0 &&
                        <button onClick={deleteAllThoughts} className="btn btn-danger d-block w-100">Delete All</button>
                    }
                </div>
            </div>

            <div className="add-thought__form col-md-9">
                <form onSubmit={onSubmitForm}>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <TextareaAutosize
                                rows={8}
                                value={description || ""}
                                onChange={updateFields}
                                id="description"
                                name="description"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="mood">Mood</label>
                            <TextareaAutosize
                                rows={5}
                                value={mood || ""}
                                name="mood"
                                id="mood"
                                onChange={updateFields}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="automaticthought">Automatic Thoughts</label>
                            <TextareaAutosize
                                rows={5}
                                value={automaticthought || ""}
                                id="automaticthought"
                                name="automaticthought"
                                onChange={updateFields}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="supportingfacts">Supporting Facts</label>
                            <TextareaAutosize
                                rows={5}
                                value={supportingfacts || ""}
                                id="supportingfacts"
                                name="supportingfacts"
                                onChange={updateFields}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="contradictfacts">Contradicting Facts</label>
                            <TextareaAutosize
                                rows={5}
                                value={contradictfacts || ""}
                                id="contradictfacts"
                                name="contradictfacts"
                                onChange={updateFields}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="realisticthought">Realisting Thoughts</label>
                            <TextareaAutosize
                                rows={5}
                                value={realisticthought || ""}
                                id="realisticthought"
                                name="realisticthought"
                                onChange={updateFields}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="rateyourfeeling">Rate your feeling</label>
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
