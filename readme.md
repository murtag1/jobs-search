# Поиск вакансий

## Задание
Нужно реализовать интерфейс для поиска и просмотра вакансий. Необходимый функционал:  
  
1) Использовать это API https://jobs.github.com/api с JSON форматом.  
  
2) Главная страница:  
    - фильтр по description (пример https://jobs.github.com/positions.json?description=python)  
    - фильтр по locations (пример https://jobs.github.com/positions.json?location=new+york)  
    - фильтр по full time (пример https://jobs.github.com/positions.json?full_time=true)  
    - подгрузка новых результатов  
    - выводить информацию о вакансии:  
        - title  
        - location  
        - type  
        - company  
        - created_at (но в читаемом формате)  
    - при клике на вакансию переводить на страницу вакансии  
  
3) Страница вакансии:  
    - Выводить всю информацию о вакансии  
  
[Результат](https://githab-jobs-search.herokuapp.com)
## Установка  

```sh

# Установка модулей
npm install  

# Запуск dev server
npm run dev