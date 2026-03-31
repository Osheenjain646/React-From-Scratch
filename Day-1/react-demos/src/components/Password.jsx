import React from 'react'
import ValidPassword from './ValidPassword'
import InValidPassword from './InValidPassword'

const Password = ({isValid}) => {
//   if(isValid){
//     return(
//         <ValidPassword></ValidPassword>
//     )
//   }
//   return(
//     <InValidPassword></InValidPassword>
//   )
return isValid ? <ValidPassword/> : <InValidPassword />
}

export default Password