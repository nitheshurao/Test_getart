import React, { Component, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";




const TextEditor = (props) => {
    const [editorState, setEditorsate] = useState(EditorState.createEmpty()
    )


    const onEditorStateChange = (editorState) => {
        
        setEditorsate(editorState)
        // props.setProduct(editorState)
    };


    return (
        <div>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
            />
            <textarea
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            ></textarea>
        </div>
    )
}

export default TextEditor






// export default class TextEditor extends Component {
//     state = {
//         editorState: EditorState.createEmpty(),
//     };

//     // onEditorStateChange = (editorState) => {
//     //     this.setState({
//     //         editorState,
//     //     });
//     // };

//     render() {
//         const { editorState } = this.state;
//         console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
//         return (
//             <div>
//                 <Editor
//                     editorState={editorState}
//                     toolbarClassName="toolbarClassName"
//                     wrapperClassName="wrapperClassName"
//                     editorClassName="editorClassName"
//                     onEditorStateChange={this.props.onEditorStateChange}
//                 />
//                 <textarea
//                     disabled
//                     value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
//                 ></textarea>
//             </div>
//         );
//     }
// }