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

The latest exchange rates can be retrieved from the public API <https://currencylayer.com/> (or
any similar API).
When a list of the most viewed products is requested, the API should return the products with
the highest view-counts. By default, the top 5 products will be returned, but the request can also
specify a custom number of products to return. Only products with at least 1 view should be
included. A specific currency can also be specified in which case all the prices should be
returned in that currency.
