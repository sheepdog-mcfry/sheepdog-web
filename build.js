var
  metalsmith = require('metalsmith'),
  markdown   = require('metalsmith-markdown'),

  ms = metalsmith(__dirname) // the working directory
     .clean(true)            // clean the build directory
     .source('src/html/')    // the page source directory
     .destination('build')   // the destination directory
     .use(markdown())        // convert markdown to HTML
     .build(function(err) {  // build the site and throw errors
       if (err) throw err;
     });
