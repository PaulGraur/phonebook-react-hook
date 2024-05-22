import React, { useState } from 'react'; // Імпортуємо React і хук useState з бібліотеки React.
import ContactForm from './ContactForm/ContactForm'; // Імпортуємо компонент ContactForm з відповідного файлу.
import ContactList from './ContactList/ContactList'; // Імпортуємо компонент ContactList з відповідного файлу.
import Filter from './Filter/Filter'; // Імпортуємо компонент Filter з відповідного файлу.
import { Container, Title, Heading2 } from './App.styled'; // Імпортуємо стилізовані компоненти з файлу App.styled.

function App() {
  // Використовуємо хук useState для управління станом контактів та фільтрації
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]); // Ініціалізуємо стан "contacts" початковим набором контактів.
  const [filter, setFilter] = useState(''); // Ініціалізуємо стан "filter" порожнім рядком.

  // Функція для додавання нового контакту до списку
  const addContact = newContact => {
    setContacts([...contacts, newContact]); // Додаємо новий контакт до поточного списку контактів.
  };

  // Функція для видалення контакту за його ідентифікатором
  const deleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id); // Фільтруємо контакти, виключаючи той, який потрібно видалити.
    setContacts(updatedContacts); // Оновлюємо стан "contacts" новим списком контактів.
  };

  // Фільтруємо контакти на основі поточного значення фільтра
  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().includes(filter.toLowerCase()) // Перевіряємо, чи ім'я контакту містить підрядок фільтра, незалежно від регістру.
  );

  // Повертаємо JSX для відображення компонентів додатку
  return (
    <Container>
      <Title>Phonebook📱</Title> {/* Заголовок додатку */}
      <ContactForm addContact={addContact} contacts={contacts} />{' '}
      {/* Компонент для додавання нового контакту, передаємо функцію додавання і поточні контакти */}
      <Heading2>Contacts</Heading2> {/* Підзаголовок розділу контактів */}
      <Filter filter={filter} setFilter={setFilter} />{' '}
      {/* Компонент для фільтрації контактів, передаємо стан фільтра і функцію для його оновлення */}
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />{' '}
      {/* Компонент для відображення списку контактів, передаємо відфільтровані контакти і функцію видалення */}
    </Container>
  );
}

export default App; // Експортуємо компонент App як дефолтний експорт.
