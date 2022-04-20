import { useCurrentUserContext } from "../CurrentUserContext"
import styled from "styled-components"


const BioForm = () => {
 const {currentUser, 
  bioValue, 
  setBioValue,} = useCurrentUserContext()

    console.log("POST:", bioValue)
    const onSubmit = (e) => {
        e.preventDefault()


        fetch("/api/add-bio", {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              bioValue,
              currentuser: currentUser.uid,
            }),
          }).then(()=>{setBioValue("")})
    }


    



  return (<>
   <FormContainer className="form">
      <h2> Update Your Bio </h2>
      <Form onSubmit={onSubmit}>
        <textarea placeholder="do tell.." type="text" value={bioValue ?? ""} onChange={(e) => setBioValue(e.target.value)} rows="4" cols="50"/>
        <SubmitBtn type="submit">Post</SubmitBtn>
        
      </Form>
    </FormContainer>

    </>
  )
}

const FormContainer = styled.div`
width: 100%;
h2{
    text-align: center;
    padding-top: 1rem;

}

`

const Form = styled.form`
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  margin-bottom: 2rem;
  
  p{
      cursor: pointer;
  }
  textarea{
    padding: 12px;
  margin: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  box-shadow: 0 1px 4px #ccc;
  border-radius: 6px;
  font-size: 18px;
  width: 70%;
  }
 
  hr{
    width: 75%;
  }
`
const SubmitBtn = styled.button`
 background-color: #02ADEF;
    border: none;
    color: white;
    padding: 12px;
    margin: 12px 0;
    box-shadow: 0 1px 6px #ccc;
    width: 100%;
    border-radius: 6px;
    font-size: 18px;

`

export default BioForm