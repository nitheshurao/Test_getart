import React, { useState, useEffect } from 'react'
import './Panel.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import VerticalAlignTopIcon from '@material-ui/icons/VerticalAlignTop';

// import { createPost } from './../'
// ../redux/actions/Product.js
import { createPost } from "../redux1/actions/Product";
import TextEditor from './TextEditor';


// 
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";


// 

const Panel = () => {

    const [product, setProduct] = useState({
        title: '', description: '', file: '', tag: '', meta: '', detail: ''
    })
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (post) setProduct(post);
    // }, [post]);
    const clear = () => {
        // setCurrentId(0);
        setProduct({ title: '', description: '', file: '', tag: '', meta: '', detail: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();



        dispatch(createPost(product));

        clear();

        console.log(product)


    };
    const [editorState, setEditorsate] = useState(EditorState.createEmpty()
    )


    const onEditorStateChange = (editorState) => {

        setEditorsate(editorState)
        // setProduct({ ...product, description: e.target.value )
        console.log(product)


        // props.setProduct(editorState)
    };
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
        <div>

            <div className="header">
                <h1><button> <ArrowBackIcon /></button> Add New Product</h1>

            </div>



            <div className="product">
                <form autoComplete="off" noValidate
                    onSubmit={handleSubmit}>

                    <h3 className="label" >Product Title</h3>
                    <div className="pName">

                        <input
                            type="text" placeholder="Enter title here"
                            value={product.title}
                            onChange={(e) => {
                                setProduct({ ...product, title: e.target.value })
                            }}
                        />
                    </div>
                    <h3 className="label" >Product Description</h3>

                    <div className="pName">

                        <div className="text-editor">
                            {/* <EditorToolbar /> */}
                            {/* <ReactQuill

                                theme="snow"
                            // value={state.value}
                            // onChange={handleChange  description={product.title}
                            // o={(e) => {
                            //     setProduct({ ...product, description: e.target.value })
                            // }}
                            // onChange={this.handleProcedureContentChange}
                            // placeholder={"Write something awesome..."}
                            // modules={modules}
                            // formats={formats}
                            /> */}
                            {/* <TextEditor
                                // onEditorStateChange={onEditorStateChange}
                                setProduct={setProduct}

                            /> */}
                            {/*  */}
                            <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                onEditorStateChange={onEditorStateChange}
                            />
                            {/* <textarea
                                disabled
                                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                                onChange={(e) => {
                                    setProduct({ ...product, description: draftToHtml(convertToRaw(editorState.getCurrentContent())) })
                                    // setProduct(description:draftToHtml(convertToRaw(editorState.getCurrentContent())))
                                }}
                            // onSubmit={
                            //     setProduct({ ...product, description: draftToHtml(convertToRaw(editorState.getCurrentContent())) })
                            // }

                            ></textarea> */}
                            {/*  */}
                        </div>
                    </div>
                    <div className="pName">

                        <div class="file-upload-wrapper" data-text="Select your file!">
                            <h>Add Media Files

                            </h>


                            {/* <input name="file-upload-field" type="file" class="file-upload-field" value=""
                                multiple={false}
                                onDone={({ base64 }) => setProduct({ ...product, file: base64 })
                                    // console.log(postData.selectedFiles)
                                }
                            >
                            </input> */}


                            {/* <div ><FileBase type="file" multiple={false} onDone={({ base64 }) => setProduct({ ...product, file: base64 })} /></div> */}
                            <VerticalAlignTopIcon />
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setProduct({ ...product, file: base64 })
                                    // console.log(postData.selectedFiles)
                                }
                            />







                        </div>

                    </div>


                    <h3>Product Variants</h3>
                    <label className="label" >This product has multiple options </label>
                    <div className="pName">

                        <input type="text" placeholder="Enter tag here"
                            value={product.tag}
                            onChange={(e) => {
                                setProduct({ ...product, tag: e.target.value })
                            }}



                        />
                    </div>
                    {/* /// */}
                    <h3>SEO Meta Details  </h3>

                    <div className="pName1">

                        <input type="text" placeholder="Enter meta "
                            value={product.meta}
                            onChange={(e) => {
                                setProduct({ ...product, meta: e.target.value })
                            }}
                        />
                        <div className="pName1">
                            <textarea className="textarea" placeholder="Write detais.."
                                value={product.detail}
                                onChange={(e) => {
                                    setProduct({ ...product, detail: e.target.value })
                                }}


                            ></textarea>

                        </div>
                    </div>

                    <button
                        // className={classes.buttonSubmit}
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit" fullWidth> Submit</button>

                </form>

            </div>


        </div >
    )
}

export default Panel
