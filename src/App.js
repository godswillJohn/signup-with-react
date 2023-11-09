import './App.css';
import React from 'react'


// function MainComponent() {
//  return (
//   <mark>this is react</mark>
//  )
// }
// ReactDOM.render(
//       <div>
//       <MainComponent />
//       <Form />
//       </div>,
//       document.getElementById("root")
//       )

//       const h1 = document.createElement(h1)
// h1.textContent = "Hello world"
// h1.className = "header"
// document.getElementById("root").append(h1) 



// export default function Form() {
//   const [formData, setFormData] = React.useState(
//     {
//     firstName: "", 
//     lastName: "", 
//     email: "", 
//     comments: "",
//     isFriendly: true,
//     employment: "",
//     favColor: ""
//   }
//   )

//     console.log(formData)
//     console.log(formData.favColor)
  // function handleChange(event) {
  //   const {name, value, type, checked} = event.target
  //   setFormData(prevFormData => {
  //     return {
  //       ...prevFormData,
  //       [name]: type === "checkbox" ? checked : value
        
  //     }
  //   })
  // }
//   function handleSubmit(event) {
//       event.preventDefault();
      
//       // submitToApi(formData)
//       console.log(formData)
//   }
    // return ( 
    // <form className='textarea' onSubmit={handleSubmit}>
    //   <input 
    //     className='checkers'
    //     type="text"
    //     placeholder="First Name"
    //     onChange={handleChange}
    //     name="firstName"
    //     value={formData.firstName}
    //     />
    //     <input 
    //       className='checkers'
    //       type="text"
    //       placeholder="Last Name"
    //       onChange={handleChange}
    //       name="lastName"
    //       value={formData.lastName}
    //       />
    //      <input 
    //       className='checkers'
    //       type="text"
    //       placeholder="email"
    //       onChange={handleChange}
    //       name="email"
    //       value={formData.email}
    //       />
    //       <textarea 
    //       placeholder="Comments"
    //       onChange={handleChange}
    //       name="comments"
    //       value={formData.comments} 
    //       />
    //       <input
    //       type='checkbox'
    //       id='isFriendly'
    //       checked={formData.isFriendly}
    //       onChange={handleChange}
    //       name="isFriendly"
    //       />
    //       <label htmlFor='isFriendly'>Are you friendly?</label>
    //       <br /> 
    //       <br />
    //       <fieldset>
    //         <legend>Current employment status</legend>
    //         <input 
    //         type='radio'
    //         id='unemployed'
    //         name='employment'
    //         value="Unemployed"
    //         onChange={handleChange}
    //         checked={formData.employment === "Unemployed"}            />
    //       <label htmlFor='Unemployed'>unemployed</label>
    //       <br />
    //       <input 
    //         type='radio'
    //         id='part-time'
    //         name='employment'
    //         value="Part-time"
    //         checked={formData.employment === "Part-time"}
    //         onChange={handleChange}
    //         />
    //       <label htmlFor='Part-time'>Part-time</label>
    //       <br /> 
    //        <input 
    //         type='radio'
    //         id='full-time'
    //         name='employment'
    //         value="Full-time"
    //         checked={formData.employment === "Full-time"}
    //         onChange={handleChange}
    //         />
    //       <label htmlFor='Full-time'>Full-time</label>
    //       </fieldset>
    //       <br />
    //       <label htmlFor="favColor">What's your favorite color</label>
    //       <br />
    //       <select 
    //       id='favColor'
    //       value={formData.favColor}
    //       name="favColor"
    //       onChange={handleChange}
    //       >
    //         <option value="red">Red</option>
    //         <option value="Orange">Orange</option>
    //         <option value="yellow">yellow</option>
    //         <option value="Green">Green</option>
    //         <option value="blue">Blue</option>
    //         <option value="indigo">Indigo</option>
    //         <option value="violet">Violet</option>
    //       </select  >
    //       <button>Submit</button>
    // </form>
//     )
// }


// export default function App() {

//   // React.useEffect(function() {})

//   const [formData, setFormData] = React.useState({
//     email: "",
//     password: "",
//     passwordConfirm: "",
//     joinedNewsLetter: true
//   })
//   function handleChange(event) {
//     const {name, value, type, checked} = event.target
//     setFormData(prevFormData => {
//       return {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value
        
//       }
//     })
//   }
//   function handleSubmit(event) {
//     event.preventDefault();
    
//     if(formData.password === formData.passwordConfirm) {
//       console.log("successfully signed up")
//     } else {
//       console.error(Error, " Password's do not match ")
//       return
//     }
//     if(formData.joinedNewsLetter) {
//       console.log("thanks for siginig up to our news letter ")
//     }
//     console.log(formData)
//     // submitToApi(formData)
// //  console.log(formData)
    
// }
//   return ( 
//     <form className='textarea' onSubmit={handleSubmit}>
//       <input 
//         type="email"
//         placeholder="email"
//         onChange={handleChange}
//         name="email"
//         value={formData.email}
//         />
//         <input 
//           type="password"
//           placeholder="password"
//           onChange={handleChange}
//           name="password"
//           value={formData.password}
//           />
//              <input 
//           type="password"
//           placeholder="password Confirm"
//           onChange={handleChange}
//           name="passwordConfirm"
//           value={formData.passwordConfirm}
//           />
//           <input
//           type='checkbox'
//           id='joinedNewsLetter'
//           checked={formData.joinedNewsLetter}
//           onChange={handleChange}
//           name="joinedNewsLetter"
//           />
//           <label htmlFor='joinedNewsLetter'>Join News Letter</label>
//           <br /> 
//           <br />
//           <button
//           className='form-submit'
//           >Submit</button>
//     </form>
//   )
// }

export default function Train() {
  const[formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    otherNames: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  function handleChanges(event) {
    setFormData(prevformData => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value
      }
    })
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
    if (formData.password === formData.confirmPassword) {
      console.log("Kudos, successfully signed up")
    }else {
      console.log(Error, "Passwords don't match")
    }
    if(formData) {

    }
  }
  // React code goes in here
  return(
    // Html codes go in here with JSX
    <div>
      <form className='learn' onSubmit={handleSubmit}>
      <input 
      type='text'
      placeholder='First Name'
      name='firstName'
      onChange={handleChanges}
      />
      <input 
      type='text'
      placeholder='Last Name'
      name='lastName'
      onChange={handleChanges}
      />
      <input
      type='text'
      placeholder='Other Names'
      name='otherNames'
      onChange={handleChanges}
      />
      <input
      type='text'
      placeholder='User Name'
      name='userName'
      onChange={handleChanges}
      />
      <input 
      type='email'
      placeholder='E-mail'
      name='email'
      onChange={handleChanges}
      />
      <input
      type='password'
      placeholder='password'
      name='password'
      onChange={handleChanges}
      />
       <input
      type='password'
      placeholder='Confirm Password'
      name='confirmPassword'
      onChange={handleChanges}
      />
      <button>Register</button>
      </form>
   </div>
  )
}