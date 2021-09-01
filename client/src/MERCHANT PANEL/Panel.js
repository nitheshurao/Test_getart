import React from 'react'
import './Panel.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FileBase from 'react-file-base64'

import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

const Panel = () => {

    return (
        <div>

            <div className="header">
                <h1><button> <ArrowBackIcon /></button> Add New Product</h1>

            </div>



            <div className="product">
                <form >

                    <h3 className="label" >Product Title</h3>
                    <div className="pName">

                        <input type="text" placeholder="Enter title here" />
                    </div>
                    <h3 className="label" >Product Description</h3>

                    <div className="pName">

                        <div className="text-editor">
                            {/* <EditorToolbar /> */}
                            <ReactQuill

                                theme="snow"
                            // value={state.value}
                            // onChange={handleChange}
                            // placeholder={"Write something awesome..."}
                            // modules={modules}
                            // formats={formats}
                            />
                        </div>
                    </div>
                    <div className="pName">

                        <div class="file-upload-wrapper" data-text="Select your file!">
                            <h>Add Media Files

                            </h>


                            <input name="file-upload-field" type="file" class="file-upload-field" value="">
                            </input>
                            <VerticalAlignTopIcon />
                        </div>

                    </div>


                    <h3>Product Variants</h3>
                    <label className="label" >This product has multiple options </label>
                    <div className="pName">

                        <input type="text" placeholder="Enter tag here" />
                    </div>

                </form>

            </div>


        </div>
    )
}

export default Panel
