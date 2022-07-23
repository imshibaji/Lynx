# API Application

This application creates web api for products. create a REST API for managing products. The API should allow the
following actions:

* Get a single product
* List the most viewed products

The price is assumed to be in USD. When a single product is requested, all fields of that product are returned and the view-count for
that product is incremented. The request can optionally specify a currency, in which case the
price should be converted to the requested currency before being returned. We need to support
the following currencies:

1. USD
2. CAD

The latest exchange rates can be retrieved from the public API <https://currencylayer.com/>.
When a list of the most viewed products is requested, the API should return the products with
the highest view-counts. By default, the top 5 products will be returned, but the request can also
specify a custom number of products to return. Only products with at least 1 view should be
included. A specific currency can also be specified in which case all the prices should be
returned in that currency.

## APP Config

-----

When you start to implementaion this code for your application that time replace `.env.example` to `.env`. Then you need API_KEY for realtime currency converter. For that you can be visit and signup `https://apilayer.com/marketplace/currency_data-api` in this URL.

Ater this you have to setup database informations.

```env
PORT=3000
API_KEY=<USE_YOUR_API_KEY>

# DB Connection
DB_HOST=remotemysql.com
DB_PORT=3306
DB_USER=<USE_YOUR_DB_USERNAME>
DB_PASSWORD=<USE_YOUR_DB_PASSWORD>
DB_DATABASE=<USE_YOUR_DB_NAME>
```

## API Details

-----
Home Root: ``` http://localhost:3000/ ```

output: ``` Welcome to App ```

-----
Products API:  Use `GET` Method

URL: `http://localhost:3000/products`

***OR***

URL: `http://localhost:3000/products?limit=8&from=usd&to=cad`

**Query Paramiters:**

*limit*: use for output data limit.

*from*: use for Base Currency Code('USD') for Product Price.

*to*: use for Currency Code('CAD') to Change Price Output.

Output:

```json
[
  {
    "id": 3,
    "name": "Kawasaki Ninja 850",
    "price": "12.33",
    "description": null,
    "isDeleted": 0,
    "productViewed": 7,
    "createdDate": "2022-07-06T18:30:00.000Z",
    "updatedDate": "2022-07-06T18:30:00.000Z",
    "deletedDate": null
  },
  {
    "id": 7,
    "name": "Kawasaki Ninja 14R",
    "price": "31.01",
    "description": null,
    "isDeleted": 0,
    "productViewed": 6,
    "createdDate": "2022-07-06T18:30:00.000Z",
    "updatedDate": "2022-07-06T18:30:00.000Z",
    "deletedDate": null
  },
  {
    "id": 5,
    "name": "Kawasaki Ninja 1000",
    "price": "17.95",
    "description": null,
    "isDeleted": 0,
    "productViewed": 4,
    "createdDate": "2022-07-06T18:30:00.000Z",
    "updatedDate": "2022-07-06T18:30:00.000Z",
    "deletedDate": null
  },
  {
    "id": 1,
    "name": "Kawasaki Ninja 650",
    "price": "10.50",
    "description": null,
    "isDeleted": 0,
    "productViewed": 2,
    "createdDate": "2022-07-06T18:30:00.000Z",
    "updatedDate": "2022-07-06T18:30:00.000Z",
    "deletedDate": null
  },
  {
    "id": 4,
    "name": "Kawasaki Ninja 950",
    "price": "14.15",
    "description": null,
    "isDeleted": 0,
    "productViewed": 2,
    "createdDate": "2022-07-06T18:30:00.000Z",
    "updatedDate": "2022-07-06T18:30:00.000Z",
    "deletedDate": null
  }
]
```

-----
Single Products API:  Use `GET` Method

URL: `http://localhost:3000/products/1`

***OR***

URL: `http://localhost:3000/products/1?from=usd&to=cad`

**Query Paramiters:**

*from*: use for Base Currency Code('USD') for Product Price.

*to*: use for Currency Code('CAD') to Change Price Output.

Output:

```json
{
    "id": 1,
    "name": "Kawasaki Ninja 850",
    "price": "12.33",
    "description": null,
    "isDeleted": 0,
    "productViewed": 7,
    "createdDate": "2022-07-06T18:30:00.000Z",
    "updatedDate": "2022-07-06T18:30:00.000Z",
    "deletedDate": null
}
```

-----

### Note

Currency Converter is a paid service. when you need to be consume actual data rapidatly. For this reson when currency code change in the paramiter that time new updated data pool from the server and store that data into the currency table for future requests.
