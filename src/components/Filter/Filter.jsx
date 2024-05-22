import { Input } from './Filter.styled'; // Імпортуємо стилізований компонент Input з файлу Filter.styled

function Filter({ filter, setFilter }) {
  // Обробник зміни значення фільтра
  const handleFilterChange = event => {
    setFilter(event.target.value); // Оновлюємо стан фільтра значенням з події
  };

  return (
    <Input
      type="text" // Поле вводу тексту
      name="filter" // Ім'я поля вводу
      placeholder="Search by name" // Текст-підказка для користувача
      value={filter} // Прив'язка значення поля до стану filter
      onChange={handleFilterChange} // Обробник події зміни значення поля
    />
  );
}

export default Filter; // Експортуємо компонент Filter як дефолтний експорт
