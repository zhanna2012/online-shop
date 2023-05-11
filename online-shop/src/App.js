import './App.css';
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import {Route, Routes, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import data from "./components/Products/data";
import ProductsDetail from "./components/Products/ProductsList/ProductsDetail/ProductsDetail";
import {Context, HistoryContext, UserNameContext} from "./context";
import DebugWindow from "./Debug";
import styled from 'styled-components';


// Простий styled-component
const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  background-color: ${props => props.primary ? '#007bff' : '#ccc'};
  color: ${props => props.primary ? '#fff' : '#000'};
`;

// Styled-component, який успадковує стилі від Button
const DangerButton = styled(Button)`
  background-color: #dc3545;
  color: #fff;
`;

// Простий styled-component з умовними стилями
const Card = styled.div`
  padding: 20px;
  background-color: ${props => props.highlight ? '#f5f5f5' : '#fff'};
  border: ${props => props.highlight ? '2px solid #007bff' : '1px solid #ddd'};
`;

function App() {

    const [productsData, setData] = useState(data.makeUp);

    const [history, setHistory] = useState([]);

    const location = useLocation();


    const setProductCategoryData = (data) => {
        setData(data);
    }

    useEffect(() => {
        setHistory((prevState) => {
            if(prevState.at(-1) !== location.pathname) {
                return [...prevState, location.pathname];
            } else {
                return prevState;
            }
        })
    },[location, setHistory]);

  return (
      <Context.Provider value={{productsData, setProductCategoryData}}>
          <UserNameContext.Provider value='Admin'>
              <HistoryContext.Provider value={{history, setHistory}}>
                  <div>
                      <Header/>
                      <DebugWindow/>
                      <Routes>
                          <Route path="/" element={<Products />}/>
                          <Route path="/categories/:category" element={<Products />}/>
                          <Route path="/products/:productId"
                                 element={<ProductsDetail />} />
                      </Routes>
                  </div>
              </HistoryContext.Provider>
         </UserNameContext.Provider>
      </Context.Provider>
  );
}

export default App;
