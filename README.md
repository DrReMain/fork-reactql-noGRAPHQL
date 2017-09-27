### ISSUES

background-image in stylesheets rise error,

Installing on some versions of OSX may raise errors with a missing libpng dependency:


```
Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
```

This can be remedied by installing the newest version of libpng with homebrew:

``` bash
$ brew install libpng
```


### FIX BUGS
run static rise error

The src of script in static index.html is wrong!!!

use the version of chunk-manifest-webpack-plugin:

"chunk-manifest-webpack-plugin": "git+https://github.com/sigerello/chunk-manifest-webpack-plugin.git#1.1.2-fix",
