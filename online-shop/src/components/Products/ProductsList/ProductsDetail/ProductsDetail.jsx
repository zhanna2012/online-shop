import React, {useContext, useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import styles from './ProductsDetail.module.scss'
import Button from "../../../../common/Button/Button";
import Dialog from "../../../../common/Dialog/Dialog";
import {Context} from "../../../../context";
import { TransitionGroup, CSSTransition } from 'react-transition-group';



function ProductsDetail(props) {
    const { productId } = useParams();
    const { productsData, setProductCategoryData } = useContext(Context);

    const thisProductData = productsData.find(prod => prod.id === parseInt(productId));

    const [hryvniaAmount, setHryvniaAmount] = useState(thisProductData.price);
    const [dollarAmount, setDollarAmount] = useState(0);

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenDialog = () => {
        setIsOpen(true);
    };

    const handleCloseDialog = () => {
        setIsOpen(false);
    };


    useEffect(() => {
        convert();
    }, [hryvniaAmount])



    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, newComment]);
        setNewComment("");
        handleOpenDialog();
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
            <TransitionGroup>
                {comments.map((comment, index) => (
                    <CSSTransition key={index} classNames={styles.item} timeout={700}>
                        <div className={styles.item}>
                            <span>{comment}</span>
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
          {/*  <ul className="d-flex flex-column">
                {comments.map((comment, index) => (
                    <li className={`border-1 border d-block ${styles.cardItem}`}
                        key={index}>{comment}</li>
                ))}
            </ul>*/}
            <Dialog isOpen={isOpen} onClose={handleCloseDialog}/>
        </div>
    )
}

export default ProductsDetail;
