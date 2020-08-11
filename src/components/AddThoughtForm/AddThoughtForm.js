import React from 'react';
import Masonry from "react-masonry-css";
import TextareaAutosize from 'react-autosize-textarea';

function AddThoughtForm({ thoughts, onSubmitForm, updateFields }) {

    const { id, description, mood, automaticthought, supportingfacts, contradictfacts, realisticthought, rateyourfeeling } = thoughts;

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    };

    return (

        <form onSubmit={onSubmitForm}>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <TextareaAutosize
                        rows={8}
                        value={description}
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
                        value={mood}
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
                        value={automaticthought}
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
                        value={supportingfacts}
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
                        value={contradictfacts}
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
                        value={realisticthought}
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
                        value={rateyourfeeling}
                        onChange={updateFields}
                    />
                </div>

            </Masonry>
            <button className="d-block btn btn-primary">Submit</button>
        </form>
    );
}

export default AddThoughtForm;
