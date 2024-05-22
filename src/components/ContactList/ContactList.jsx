import PropTypes from 'prop-types'; // Імпортуємо PropTypes для валідації пропсів
import {
  ContactItems,
  ContactName,
  ContactNumber,
  Button,
} from './ContactList.styled'; // Імпортуємо стилізовані компоненти

// Головний компонент ContactList, який приймає контакти і функцію видалення
function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        // Для кожного контакту рендеримо компонент ContactItem
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}

// Компонент ContactItem для відображення одного контакту
function ContactItem({ contact, deleteContact }) {
  // Функція для обробки видалення контакту
  const handleDelete = () => {
    deleteContact(contact.id); // Викликаємо deleteContact з ідентифікатором контакту
  };

  return (
    <ContactItems>
      <ContactName>{contact.name}</ContactName>{' '}
      {/* Відображаємо ім'я контакту */}
      <ContactNumber>{contact.number}</ContactNumber>{' '}
      {/* Відображаємо номер контакту */}
      <Button onClick={handleDelete}>Delete</Button>{' '}
      {/* Кнопка для видалення контакту */}
    </ContactItems>
  );
}

// Валідація пропсів для компонента ContactItem
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired, // Ідентифікатор контакту - обов'язковий рядок
    name: PropTypes.string.isRequired, // Ім'я контакту - обов'язковий рядок
    number: PropTypes.string.isRequired, // Номер контакту - обов'язковий рядок
  }).isRequired,
  deleteContact: PropTypes.func.isRequired, // Функція для видалення контакту - обов'язкова
};

// Валідація пропсів для компонента ContactList
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Ідентифікатор контакту - обов'язковий рядок
      name: PropTypes.string.isRequired, // Ім'я контакту - обов'язковий рядок
      number: PropTypes.string.isRequired, // Номер контакту - обов'язковий рядок
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired, // Функція для видалення контакту - обов'язкова
};

export default ContactList; // Експортуємо компонент ContactList як дефолтний експорт
