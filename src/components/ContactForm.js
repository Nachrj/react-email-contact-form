import React from 'react'
import { useForm } from 'react-hook-form'
import '../styles/ContactForm.css'

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    console.log(data);
    sendEmail(data.subject, data.message);
  }

  const sendEmail = (subject, message) => {
    window.open(`mailto:example@mail.com?subject=${subject}&body=${message}`)
  } 

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Subject</label>
      <input 
        name='subject'
        placeholder='Tu asunto'
        ref={register({ required: true, minLength: 3 })}
      />
      {errors.subject && errors.subject.type === 'required' && <p>Field required</p>}
      {errors.subject && errors.subject.type === 'minLength' && <p>Type more characters</p>}

      <label>Message</label>
      <textarea
        name='message'
        placeholder='Escribe tu mensaje aquí' 
        ref={register({ required: true, minLength: 5 })}
        rows='5'
      />
      {errors.message && errors.message.type === 'required' && <p>Field required</p>}
      {errors.message && errors.message.type === 'minLength' && <p>Type more characters</p>}


      <input type='submit' />
    </form>
  )
}

export default ContactForm