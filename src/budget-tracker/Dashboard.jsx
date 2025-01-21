import styled from "styled-components";
import { useBudgetContext } from "../context/BudgetContext";
import UserDetails from "./UserDetails";
import List from "../ui/List";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import { useState } from "react";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";

const StyledDashboard = styled.div`
  padding: 15px;
  margin: 0 auto;
`;

export default function Dashboard() {
  const { state, dispatch } = useBudgetContext();
  const [category, setCategory] = useState(false); // false === expense, true === profit
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm();

function handleToggle(e) {
    e.preventDefault();
    const newCategory = !category;
    setCategory(newCategory);
    setValue("category", newCategory ? "Profit" : "Expense"); // Update the input value
  };

  function onSubmit(data) {
    console.log(data);
    if(!category){
      dispatch({type: "SET_EXPENSE", payload: {expenseAmount: Number(data.amount), category: data.category, description: data.description}})
    } else {
      dispatch({type: "SET_INCOME", payload: {incomeAmount: Number(data.amount), category: data.category, description: data.description}})
    }
  }

  return (
    <StyledDashboard>
      <UserDetails state={state} />
      {!state.cashUpdate.length ? (
        <div className="text-center mb-5">
          <h3 className="font-bold text-slate-900 text-2xl">
            Please place an update to your cash below
          </h3>
        </div>
      ) : (
        <List>
          {state.cashUpdate.map((update) => (
            <li key={update.id}>{update.expenseAmount || update.incomeAmount} - {update.category} - {update.description}</li>
          ))}
        </List>
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Button
          className="mb-5"
          $bgColor={`${!category ? "#E74C3C" : " #2ECC71"}`}
          $hoverColor={`${!category ? "#FF6B6B" : "#72D572"}`}
          onClick={handleToggle}
        >
          {!category ? "Expenses" : "Profit"}
        </Button>

        <input
          type="hidden"
          {...register("category")}
          value={category ? "Profit" : "Expense"}
        />
        
        <FormRow label="Enter the amount" error={errors.amount?.message}>
          <input
            type="text"
            name="amount"
            {...register("amount", {
              required: "Enter the desired amount!",
              pattern: {
                value: /^\d+(\.\d+)?$/,
                message: "Please enter a valid number",
              },
            })}
          />
        </FormRow>

        <FormRow label="Enter the description" error={errors.description?.message}>
          <input
            type="text"
            name="description"
            {...register("description", {
              required: "Enter the description!",
              minLength: {
                value: 10,
                message: "Description must be more than 10 characters"
              }
            })}
          />
        </FormRow>

        <Button $bgColor="#007BFF" $hoverColor="#66B3FF" type="submit">
          Submit
        </Button>
      </Form>
    </StyledDashboard>
  );
}
