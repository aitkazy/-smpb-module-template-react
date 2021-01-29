# Rollup bundler for react app
## @smpb

### Разработка проекта
1. Склонировать репозиторий
2. git remote -v : проверка текущего репозитория.
3. git remote set-url origin _"remote_repositoy_url"._
4. git remote -v : проверка изменения репозитория.
5. yarn
6. yarn build
7. yarn watch
8. Открыть утилитой "Live Server" в VSCode файл **index.html** в папке public.

### Сборка проекта
1. В "package.json" изменить appId на уникальный формат.
2. yarn build

### Known issues
1. Добавить plugin для работы с файлами.
2. Переписать скрипты для разработки А-ЛЯ create-react-app (с лайв-сервером).
3. При изменение стилей проект не пересобирается.
