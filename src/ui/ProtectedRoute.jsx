import { useEffect } from "react"
import { useNavigate } from "react-router";
import { useBudgetContext } from "../context/BudgetContext";

export default function ProtectedRoute({children}) {
    const {state} = useBudgetContext();
    const {name, cash} = state
    // direct user to '/start' if they don't have account in their local storage'
    const navigate = useNavigate()
    useEffect(()=>{
        if(!name && !cash) navigate('/start');
    }, [navigate, cash, name])

    if (name && cash) return children
    
}
