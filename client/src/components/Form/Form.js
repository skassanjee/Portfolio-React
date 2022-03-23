import axios from "axios"
import React, { useState } from "react"
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Form.css'

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [loading, setLoading] = useState(false)

    const submitHanlder = async (e) => {
        e.preventDefault();
        if(!email){
            return toast.error('Please fill email, subject, and message')
        }
        try {
            setLoading(true)

            const { data } = await axios.post(`/api/email`, {
                name,
                email,
                message
            });
            setLoading(false);
            toast.success(data.message)
        } catch (err) {
            setLoading(false)
            toast.error(
                err.response && err.response.data.message
                ? err.response.data.message
                : err.message
            )
        }
    }
	return ( 
        <div className="div-main" >


      <div className="form-div">

      <ToastContainer position="bottom-center" limit={1} />
        <form id="contact" onSubmit={submitHanlder}>
            <h1>Lets Talk!</h1>
            
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" onChange ={(e) => setName(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" onChange ={(e) => setEmail(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea type="text" onChange ={(e) => setMessage(e.target.value)}/>
            </div>
            <div>
                <label></label>
                <button className="submit" disabled={loading} type="submit">
                    {loading ? 'Sending...' : 'Submit'}
                </button>
        
            </div>
            
        </form>
      </div>
        </div>
	)
}

export default Form