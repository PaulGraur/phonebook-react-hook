import React, { useState } from 'react'; // Імпортуємо React і хук useState з бібліотеки React
import { nanoid } from 'nanoid'; // Імпортуємо nanoid для генерації унікальних ідентифікаторів
import { Form, Input, Button, Text } from './ContactForm.styled'; // Імпортуємо стилізовані компоненти

// Компонент ContactForm для додавання нового контакту
function ContactForm({ addContact, contacts }) {
  const [name, setName] = useState(''); // Ініціалізація стану для імені контакту
  const [number, setNumber] = useState(''); // Ініціалізація стану для номера контакту

  // Обробник зміни значення поля імені
  const handleNameChange = event => {
    setName(event.target.value); // Оновлюємо стан name значенням з події
  };

  // Обробник зміни значення поля номера
  const handleNumberChange = event => {
    setNumber(event.target.value); // Оновлюємо стан number значенням з події
  };

  // Обробник відправки форми
  const handleSubmit = event => {
    event.preventDefault(); // Відміняємо стандартну поведінку форми
    if (name.trim() === '' || number.trim() === '') {
      return; // Якщо поля порожні, нічого не робимо
    }

    // Перевірка на існування контакту з таким самим ім'ям
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert('Contact with this name already exists!'); // Виводимо попередження, якщо контакт з таким іменем вже існує
      return;
    }

    // Створюємо новий контакт
    const newContact = {
      id: nanoid(), // Генеруємо унікальний ідентифікатор
      name: name.trim(), // Видаляємо зайві пробіли з імені
      number: number.trim(), // Видаляємо зайві пробіли з номера
    };
    addContact(newContact); // Додаємо новий контакт
    setName(''); // Очищуємо поле імені
    setNumber(''); // Очищуємо поле номера
  };

  return (
    <Form onSubmit={handleSubmit}>
      {' '}
      {/* Обробка події відправки форми */}
      <Text>Name</Text> {/* Заголовок для поля імені */}
      <Input
        type="text" // Тип вводу текст
        name="name" // Ім'я поля
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" // Шаблон для перевірки правильності введення
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" // Підказка для користувача
        required // Поле обов'язкове для заповнення
        value={name} // Прив'язка значення поля до стану name
        onChange={handleNameChange} // Обробник зміни значення
      />
      <Text>Number</Text> {/* Заголовок для поля номера */}
      <Input
        type="tel" // Тип вводу телефонний номер
        name="number" // Ім'я поля
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" // Шаблон для перевірки правильності введення
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" // Підказка для користувача
        required // Поле обов'язкове для заповнення
        value={number} // Прив'язка значення поля до стану number
        onChange={handleNumberChange} // Обробник зміни значення
      />
      <Button type="submit">Add Contact</Button>{' '}
      {/* Кнопка для відправки форми */}
    </Form>
  );
}

export default ContactForm; // Експортуємо компонент ContactForm як дефолтний експорт
