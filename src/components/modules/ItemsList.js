import FormInput from "../elements/FormInput";


const ItemsList = ({form, setForm}) => {

    const { products } = form;
    
    const addHandler = () => {
        setForm({
            ...form, products: [...products, {name: "", price: "", qty: ""}]
        })
        console.log(products)
    }

    const changeHandler = () => {

    };

    const deleteHandler = () => {

    };

    return (
        <div className="item-list">
            <p>Purchased products</p>
            {
                products.map((product, index) => (
                    <div className="form-input__list" key={index}>
                        <FormInput name='name' label='Product Name' type='text' value={product.name} onChange={changeHandler} />
                        <div>
                            <FormInput name='price' label='Price' type='text' value={product.price} onChange={changeHandler} />
                            <FormInput name='qty' label='qty' type='number' value={product.qty} onChange={changeHandler} />
                        </div>
                        <button onClick={deleteHandler}>remove</button>
                    </div>
                ))
            }
            <button onClick={addHandler}>Add item</button>
        </div>
    );
};

export default ItemsList;