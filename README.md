# Larareact

This is larareact repo for session 3 and 4.

## Installation

install laravel and react

```bash
composer create-project laravel/laravel:^9.0 larareact
```

install breeze

```bash
composer require laravel/breeze --dev
```

install react

```bash
php artisan breeze:install react
```

setup DB and run 

```bash
php artisan migrate
```

install depedency node

```bash
npm install
```

```bash
npm run dev
```

```bash
php artisan serve
```

## Install Roles

https://medium.com/@miladev95/step-by-step-guide-to-user-role-and-permission-tutorial-in-laravel-10-1fecdabfdea0

## Install redux

install redux

```bash
npm i redux react-redux @reduxjs/toolkit
```

## How to use

install laravel and react

```javascript
return Inertia::render('pageName', []);
```

## Pagination

https://www.itsolutionstuff.com/post/laravel-react-js-pagination-using-vite-exampleexample.html

## Shortcut Laravel

```bash
php artisan make:model Todo -mcr
```

```bash
php artisan make:request FormDataRequest
```

## Install Swagger

```bash
composer require darkaonline/l5-swagger
```

```bash
php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
```

```bash
php artisan l5-swagger:generate
```

Click this endpoint http://localhost:8000/api/documentation 

## Install Web Socket on server

```bash
composer require react/promise:^2.3
```

```bash
composer require beyondcode/laravel-websockets
```

```bash
php artisan vendor:publish --provider="BeyondCode\LaravelWebSockets\WebSocketsServiceProvider" --tag="migrations"
```

```bash
php artisan migrate
```

```bash
php artisan vendor:publish --provider="BeyondCode\LaravelWebSockets\WebSocketsServiceProvider" --tag="config"
```

```bash
composer require pusher/pusher-php-server
```

setting broadcast .env

```bash
BROADCAST_DRIVER=pusher
```

Uncomment App\Providers\BroadcastServiceProvider::class, in config\app.php at providers

Running websocket

```bash
php artisan websockets:serve
```

Create event

```bash
php artisan make:event PublicMessageEvent
```

```bash
php artisan make:channel PrivateChat
```

## Install Websocket on client

```bash
npm i laravel-echo
npm i pusher-js
```

# Create Unit Test

```bash
php artisan make:test NamaTest
```

```bash
php artisan test --filter NamaTest
```

# Benchmark

```bash
use Illumninate/Support/Benchmark
```

```bash
Benchmark::measure(fn() => User::find(1));
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)