# React Marketplace - Каталог товаров
React Marketplace - это современное веб-приложение для электронной коммерции, предоставляющее пользователям удобный интерфейс для просмотра и выбора товаров. Проект предназначен для покупателей, которые хотят быстро находить нужные товары и получать о них подробную информацию.
#
### Основные функции:
1. Отображение каталога товаров в виде интуитивных карточек
2. Динамические страницы товаров с детальной информацией о товаре
3. Адаптивный дизайн для всех устройств
4. Быстрая навигация между страницами
5. Простой и понятный пользовательский интерфейс
#
## Установка и запуск
### Предварительные требования
1. Node.js версии 18.x или выше
2. npm 9.x или выше
#
### Пошаговая инструкция
1. Клонирование репозитория
'''git clone [ссылка на репозиторий](https://github.com/meliissaaK-prog/marketTechDoc.git)
cd dog-app'''
2. Установка зависимостей
'''npm install'''
4. Открытие приложения
'''npm run dev
Приложение будет доступно по адресу: http://localhost:5173/'''

## Примеры использования
### 1. Карточка товара
Каждая карточка отображает основную информацию о товаре:

export default function ProductCard() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function getProducts() {
            const resp = await fetch('https://dummyjson.com/products')
            const data = await resp.json()
            setProducts(data.products)
        }
        getProducts()
    }, [])

    function deleteProduct(productId) {
        setProducts(products.filter(product => product.id !== productId))
    }

    return (
        <div>
            <h1 className="text-center font-bold text-2xl mb-5">Каталог товаров</h1>
            
            <div className="grid grid-cols-5 gap-4">
                {products.map((product) => (
                    <ProductItem 
                        key={product.id} 
                        product={product} 
                        onDelete={() => deleteProduct(product.id)} 
                    />
                ))}
            </div>
        </div>
    )
}
### 2. Страница товара
При клике на карточку открывается страница с детальной информацией:

export default function AboutProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        async function getProduct() {
            const resp = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await resp.json()
            setProduct(data)
        }
        getProduct()
    }, [id])

    if (!product) {
        return <div>Загрузка...</div>
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Рейтинг: {product.rating}</p>
        </div>
    )
}

## Описание ключевых папок и файлов

### **1. Основные компоненты: src/components/**
#
Header.jsx - Компонент верхней части сайта
#
Footer.jsx - Компонент нижней части сайта 
#
ProductCard.jsx - Карточки товаров для отображения в каталоге
#
Stars.jsx - Компонент рейтинга товара в виде звездочек
#
### **2. Основные страницы: src/pages/**
#
MainPage.jsx - Главная страница с каталогом товаров
#
AboutProduct.jsx - Страница с детальной информацией о конкретном товаре
#
NotFoundPage.jsx - Страница для обработки несуществующих маршрутов
#
### **3. Конфигурационные файлы(vite.config.js, eslint.config.js, package.json )**
#
### **4. Основные корневые файлы**
#
main.jsx - Инициализация React приложения
#
App.jsx - Корневой компонент с основной логикой
#
router.js - Определение маршрутов приложения
#
index.css - Основные стили приложения
#
index.html - Базовый HTML шаблон

## Технические требования
Минимальные системные требования
1. Операционная система: Windows 10, macOS 10.15 и т.д.
2. Node.js: версия 18.17.0 или выше
3. npm: версия 9.6.7 или выше
4. Браузер: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
5. Наличие оперативной памяти и свободного места на диске

## Технологический стек
# 
Frontend: React 
# 
Роутинг: React Router DOM 
# 
Стилизация: CSS3, Tailwind CSS

## Команда разработки
| ***Имя*** | ***Роль*** | ***Основные обязанности*** |
| --------- | ---------- | -------------------------- |
| Елизавета | Frontend-разработчик | Разработка React компонентов, маршрутизация, UI/UX |

## Контакты
email: eliiza3010@yandex.ru
