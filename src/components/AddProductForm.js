import React, { useContext, useState } from "react";
import { ImagePicker } from 'react-file-picker'
import { AdminContext } from "../context/adminContext";
import { withRouter } from "react-router-dom";


const AddProductForm = ({history}) => {

    const { postProduct } = useContext(AdminContext)

    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: ""
    })
    
    const [file, setFile] = useState("")
    //const { name, price, description } = product
    
    const handleSubmit = (e) => {
        e.preventDefault()
        postProduct(product, file)
   }

    const handleChange = (e) => {
        const { name } = e.target.value
        setProduct({ ...product, name })
    }
    
    const handleFile = (e) => {
        const { file } = e.target.value.file
        setFile(file)
    } 
   
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    placeholder="Name of Product"
                    autoFocus
                    onChange={handleChange}
                />
                <input
                    name="price"
                    type="number"
                    placeholder="price of product"
                    onChange={handleChange}
                />
                <input
                    name="description"
                    type="text"
                    placeholder="Description of product"
                    onChange={handleChange}
                />
                <ImagePicker
                    name="file"
                    extensions={['jpg', 'jpeg', 'png']}
                    dims={{ minWidth: 100, maxWidth: 500, minHeight: 100, maxHeight: 500 }}
                    onChange={handleFile}
                    onError={() => {}}
                >
                    <button onClick={() => postProduct(product)}>
                        Upload Product Image
                    </button>
                </ImagePicker>
                <button onClick={() => {history.push('/shop')}}>Publish</button>
            </form>
        </div>
    )
}

export default withRouter(AddProductForm)