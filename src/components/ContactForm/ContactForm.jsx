import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();

  const contactSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required('Required'),
    number: Yup.string().min(3).max(50).required('Required'),
  });
  const nameId = useId();
  const numberId = useId();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      }}
    >
      <Form className={css.contactsForm}>
        <label htmlFor={nameId}>Name</label>
        <Field name="name" id={nameId} type="text" />
        <ErrorMessage component="div" name="name" className={css.error} />
        <label htmlFor={numberId}>Number</label>
        <Field name="number" id={numberId} type="text" />
        <ErrorMessage component="div" name="number" className={css.error} />
        <button type="submit" className={css.addButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
