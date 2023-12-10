import { useState } from 'react';

const ContactForm = () => {
  const [mailData, setMailData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState<boolean | null>(null);
  const onChange = (e: any) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY || '',
        },
        body: JSON.stringify({ email, attributes: { name, message } }),
      };

      fetch('https://api.brevo.com/v3/contacts', options)
        .then((response) => response.json())
        .then((response) => {
          setError(false);
          setMailData({ name: '', email: '', message: '' });
          console.log(response);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className={'fields w-full float-left clear-both h-auto'}>
      <form
        className={'contact_form'}
        id={'contact_form'}
        onSubmit={(e) => onSubmit(e)}>
        <div
          className={error ? 'empty_notice' : 'returnmessage'}
          style={{ display: error == null ? 'none' : 'block' }}>
          <span>
            {error
              ? 'Please Fill Required Fields'
              : 'Your message has been received, We will contact you soon.'}
          </span>
        </div>
        <div className={'first w-full float-left'}>
          <ul className={'list-none'}>
            <li className={'w-full mb-[30px] float-left'}>
              <input
                name={'name'}
                onChange={(e) => onChange(e)}
                value={name}
                id={'name'}
                type={'text'}
                placeholder={'Name'}
              />
            </li>
            <li className={'w-full mb-[30px] float-left'}>
              <input
                name={'email'}
                onChange={(e) => onChange(e)}
                value={email}
                id={'email'}
                type={'email'}
                placeholder={'Email'}
              />
            </li>
          </ul>
        </div>
        <div className={'last'}>
          <textarea
            name={'message'}
            onChange={(e) => onChange(e)}
            value={message}
            id={'message'}
            placeholder={'Message'}
          />
        </div>
        <div className={'tokyo_tm_button'} data-position={'left'}>
          <button type={'submit'}>{'Send Message'}</button>
        </div>
        {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
      </form>
    </div>
  );
};

export default ContactForm;
