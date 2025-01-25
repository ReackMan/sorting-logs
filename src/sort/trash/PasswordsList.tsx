// import { Password, PasswordsObject } from './Passwords.tsx'
//
// type Props = {
//   passwordsObj: PasswordsObject
//   urls: string[]
// }
//
// const PasswordsList = ({ urls, passwordsObj }: Props) => {
//   return (
//     <ul>
//       {urls.map(u => {
//         // console.log(u)
//         // @ts-ignore
//         const passObj = passwordsObj[u]
//         console.log(passObj)
//         return (
//           <li>
//             {u}
//             {passObj.map((url: Password) => {
//               return (
//                 <ul>
//                   <li>URL: {url.url}</li>
//                   <li>LOGIN: {url.login}</li>
//                   <li>PASSWORD: {url.password}</li>
//                   <li>
//                     {passObj[1]}:{passObj[2]}
//                   </li>
//                 </ul>
//               )
//             })}
//           </li>
//         )
//       })}
//     </ul>
//   )
// }
