import { createContext, useContext, useReducer } from "react";

const initialState = {name: '', cash: 0, cashUpdate: [], expenseAmount: 0, incomeAmount: 0, id: 0};


  const budgetReducer = (state, action)=>{
    switch(action.type){
      case "SET_USER": 
        return {...state, ...action.payload};
      case "SET_EXPENSE":
        return {...state, cash: Number(state.cash) - action.payload.expenseAmount, cashUpdate: [...state.cashUpdate, {id: state.id + 1, ...action.payload}], expenseAmount: state.expenseAmount + action.payload.expenseAmount}
      case "SET_INCOME":
        return {...state, cash: Number(state.cash) + action.payload.incomeAmount, cashUpdate:[...state.cashUpdate, {id: state.id + 1, ...action.payload}], incomeAmount: state.incomeAmount + action.payload.incomeAmount}
      default:
        return state;
    }
  }

const BudgetContext = createContext();


export default function BudgetContextProvider({ children }) {

  const [state, dispatch] = useReducer(budgetReducer, initialState);
  
  console.log(state);
  
  return (
    <BudgetContext.Provider value={{state, dispatch}}>
      {children}
    </BudgetContext.Provider>
  );
}

export function useBudgetContext() {
  const context = useContext(BudgetContext);
  if (!context) {
    throw new Error(
      "useBudgetContext must be used within a BudgetContextProvider"
    );
  }
  return context;
}
