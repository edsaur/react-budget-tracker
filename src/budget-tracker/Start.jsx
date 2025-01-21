import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useBudgetContext } from "../context/BudgetContext";
import Button from "../ui/Button";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";

const Container = styled.div`
  background-color: rgb(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  padding: 1em;
  width: 95%;
  height: 95%;
  border-radius: 16px;
  margin: auto;
`;

const StyledStartPage = styled.main`
  background-color: rgba(
    150,
    190,
    250,
    0.4
  ); /* Darker grey with transparency */
  display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center; /* Vertical centering */
  width: auto;
  height: auto; /* Or any desired height */
  margin: 60px auto;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border-radius: 10px; /* Smooth corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06); /* Soft shadow */
`;

export default function Start() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const {dispatch} = useBudgetContext();


  const navigate = useNavigate();

  function handleUserSubmit(data) {
    const { cash, name } = data;

    // Dispatch action to update state
    dispatch({ type: "SET_USER", payload: { name, cash } });

    // Save the actual state (after updating)

    navigate('/dashboard');
  }

  return (
    <StyledStartPage>
      <Container>
        <div className="p-4 w-[75%] text-center">
          <h1 className="text-4xl text-neutral-900 font-bold mt-5">
            Hello, Welcome to Budget Tracker!
          </h1>
          <h2 className="text-lg font-bold m-2">
            Indicate below your name and your initial cash-on-hand
          </h2>
          <p className="mb-5 text-sm font-bold text-red-900">
            Note: This app does not save on your local storage or any databases. Continue with caution.
          </p>

          <Form onSubmit={handleSubmit(handleUserSubmit)}>
            <FormRow label="How do you want to be called?" error={errors.name?.message}>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", {
                  required: "Your name is required",
                  minLength: 5,
                })}
              />
            </FormRow>

            <FormRow label="Write your initial cash in Philippine Peso (₱)" error={errors.cash?.message}>
              <input
                type="text"
                name="cash"
                id="cash"
                {...register("cash", {
                  required: "Your cash is needed",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter digits only",
                  },
                })}
              />
            </FormRow>

            <Button>Create account</Button>
          </Form>
        </div>
      </Container>
    </StyledStartPage>
  );
}
