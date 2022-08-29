import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useEthers } from "@usedapp/core";

import { useCards, useUsers, useNumberOfTypes, useCheckPurchase, useShowRemainingDate, useCheckExistedUser, useContractMethod } from "../contracts/hooks";

import Admin from '../components/Upgrade/Admin';
import Cards from '../components/Upgrade/Cards';

function Upgrade() {
    const { account } = useEthers();

    const numberOfTypes = useNumberOfTypes();

    const user = useUsers(account);

    const { state: stateAddCard, send: addCard } = useContractMethod("addCard");
    const { state: stateExpriedCard, send: expriedCard } = useContractMethod("expriedCard");
    const { state: stateRemoveCard, send: removeCard } = useContractMethod("removeCard");
    // const { state: checkExistedUserState, send: checkExistedUser } = useContractMethod("checkExistedUser");


    const [addCardState, setAddCardState] = useState({
        name: "",
        price: ""
    });

    const [removeCardState, setRemoveCardState] = useState();

    const handleAddCardState = (e) => {
        setAddCardState({ ...addCardState, [e.target.name]: e.target.value });
    }

    const handleAddCardAction = () => {
        addCard(addCardState.name, addCardState.price);
    }

    const handleRemoveCardAction = () => {
        removeCard(removeCardState);
    }

    console.log(useCheckPurchase(3))
    console.log(parseInt(useShowRemainingDate(3)))

    if (!account) {
        return (
            <Navigate to="/Dimension-Wallet/" />
        )
    }
    return (
        <div className='grid h-full justify-items-center'>
            <div className='flex justify-between pt-[7%] w-[80%] '>
                <p className='text-2xl text-center text-white'>Cards on chain: {parseInt(numberOfTypes)}</p>
                {user && <p className='text-2xl text-center text-white'>Your cards: {parseInt(user?.numberOfCards)}</p>}
            </div>
            <div className='flex justify-between w-[80%] h-[20rem] snap-mandatory snap-x overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-600 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
                {numberOfTypes && [...Array(parseInt(numberOfTypes))].map((_, index) => (<Cards index={index} />))}
            </div>
            <p className='text-slate-400 text-xs justify-self-end mr-[10%]'>*to make you have fully access to all cards for testing, actual prices are all <strong>0 ETH</strong> + gas price</p>


            {account === '0x71A7464FA7b0FDEf51745cD04efcBE4F1484CE4c' &&
                <div className='flex w-full justify-evenly'>
                    <div className='grid self-center w-[30%]'>
                        <input type="text" name="name" value={addCardState.name} onChange={handleAddCardState}
                            className='mx-5 form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding border-solid border-2 border-gray-500 rounded transition ease-in-out m-0 focus:text-white focus:bg-gray-800 focus:border-blue-500 focus:outline-none'
                        />
                        <input type="text" name="price" value={addCardState.price} onChange={handleAddCardState}
                            className='mx-5 form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding border-solid border-2 border-gray-500 rounded transition ease-in-out m-0 focus:text-white focus:bg-gray-800 focus:border-blue-500 focus:outline-none'
                        />
                        <button onClick={handleAddCardAction} className='text-white text-3xl'>Add Card</button>
                    </div>
                    <div className='grid self-center w-[30%]'>
                        <input type="text" onChange={(e) => setRemoveCardState(e.target.value)}
                            className='mx-5 form-control block w-full px-3 py-1.5 text-base font-normal text-white bg-gray-800 bg-clip-padding border-solid border-2 border-gray-500 rounded transition ease-in-out m-0 focus:text-white focus:bg-gray-800 focus:border-blue-500 focus:outline-none'
                        />
                        <button onClick={handleRemoveCardAction}
                            className='text-white text-3xl'
                        >Remove Card</button>
                    </div>
                </div>
            }




        </div>
    )
}

export default Upgrade
