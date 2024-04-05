/* eslint-disable react/prop-types */
import { Toaster } from 'react-hot-toast'

export const App = ({ children }) => {
  return <>
    {children}
    <Toaster position='botton-right' reverseOrder={false}/>
    </>
}
