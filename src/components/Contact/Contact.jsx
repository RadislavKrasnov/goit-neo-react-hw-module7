import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { ImUser, ImPhone } from 'react-icons/im';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <div>
        <p>
          <ImUser /> {name}
        </p>
        <p>
          <ImPhone /> {number}
        </p>
      </div>
      <button
        className={css.contactDelete}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
