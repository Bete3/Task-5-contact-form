import { useForm } from 'react-hook-form';
import './ContactForm.css';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    reset();
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register('name', { required: 'Name is required' })}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email',
              },
            })}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            className={errors.message ? 'input-error' : ''}
          />
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>

        <button type="submit">Send</button>
        {isSubmitSuccessful && <p className="success">Message sent!</p>}
      </form>
    </div>
  );
};

export default ContactForm;
