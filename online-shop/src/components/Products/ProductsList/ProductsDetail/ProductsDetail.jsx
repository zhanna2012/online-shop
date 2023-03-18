import React, {useEffect, useState} from "react"
import { Link, useParams } from "react-router-dom"
import './ProductsDetail.scss'
import Button from "../../../../common/Button/Button";


function ProductsDetail(props) {
    const { productId } = useParams();
    const thisProductData = props.productsData.find(prod => prod.id === parseInt(productId));

    const [hryvniaAmount, setHryvniaAmount] = useState(thisProductData.price);
    const [dollarAmount, setDollarAmount] = useState(0);

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    useEffect(() => {
        convert();
    }, [hryvniaAmount])

/*    useEffect(() => {
        convert();
    }, [newComment])*/

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, newComment]);
        setNewComment("");
        alert('Ваш коментар додано успішно!')
    };


    const convert =  () => {
        const rate = 36.73;
        setDollarAmount((hryvniaAmount / rate).toFixed(2));
    }

    return (
        <div className="mt-5 container">
            <Link to={`/`}>Повернутись на головну сторінку</Link>
            <h1>{thisProductData.name}</h1>
            <h3>Price: ${thisProductData.price}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <div>
                <h1>Конвертер валют</h1>
                <p>
                    <label htmlFor="hryvnia-input">Ціна в гривні: </label>
                    <input id="hryvnia-input" type="number"
                           value={hryvniaAmount}
                           onChange={e => setHryvniaAmount(e.target.value)} />
                </p>
                <p>
                    <label htmlFor="dollar-output">Ціна в долларах: </label>
                    <output id="dollar-output">{dollarAmount}</output>
                </p>
            </div>
            <h3>Додай коментар до товару:</h3>
            <form className="d-flex flex-column"
                  onSubmit={handleCommentSubmit}>
                <label className="d-flex flex-column">
                    Add a comment:
                    <textarea
                        className="h-130"
                        type="text"
                        value={newComment}
                        onChange={(e) => {
                            setNewComment(e.target.value);
                        }
                        }
                    />
                </label>
                <Button type="submit"
                        id={'submit-btn'}
                        buttonText="Submit"/>
            </form>
            <ul className="d-flex flex-column">
                {comments.map((comment, index) => (
                    <li className="border-1 border d-block card-item"
                        key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsDetail;
