# Тестовое Задание для WebbyLab

## Описание приложения

SPA созданное с помощью create-react-app, для хранения информации о фильмах.

Ссылка на проект на [GitHub](https://github.com/Arrysm/webbylab_test.git).

## Старт приложения

### `docker pull agonchar95/webbylab-test`

Получить образ React-приложения, упакованного в Docker образ.

### `docker pull webbylabhub/movies`

Получить образ бекенда, упакованного в Docker образ.

### `docker-compose up`

Команда для запуска приложения, после того, как с GitHub возьмете [docker-compose.yml](https://github.com/Arrysm/webbylab_test.git)  
После успешного старта, перейдите в браузере по ссылке: [http://localhost:3000/](http://localhost:3000/)

## Архитектура приложения

Данное приложение было создано с помощью CRA(create-react-app).  
Это SPA(single page application) для хранения, отображения и взаемодействия с фильмами.  
Для хранения состояния приложения использались библиотеки redux, react-redux.  
Для роутинга приложения - react-router-dom.  
Для передачи действий в качестве функций - redux-thunk.

## Как работает приложение

При старте приложения и перехода по ссылке выше, пользователь попадает  на страницу логина.\
На этой странице у юзера есть возможность залогиниться или перейти на страницу регистрации.  
При необходимости, у пользователя есть возможность зарегестрироваться на соответствующей странице и, в случае успеха, его перенаправит на страницу входа с соответствующим уведомлением.\
После успешного входа в приложения, пользователь видит галерею с фильмами. \
Если на данный момент у пользователя фильмов нет, то будет соответственная надпись. \
У пользователя есть возможнось: 

* добавлять фильмы(по одному или загрузить файл);  
* удалять; 
* сортирвоать по алфавиту;
* искать по названию фильма или актерам; 
* получать детальную информацию по фильму;  
Каждое действие отправляет соответствующий запрос на бек.  
  

