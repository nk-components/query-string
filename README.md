
# query-string

  Parse query string in a URL

## Installation

    $ component install nk-components/query-string

## API

    var qs = require('query-string');
    
    // /?foo=bar&name=john
    var list = qs.list();
    // >> { foo: 'bar', name: 'john' }

    var nameValue = qs('name');
    // >> 'john'


## License

  MIT
