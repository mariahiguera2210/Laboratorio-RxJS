// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
import {of} from 'rxjs';
import {filter, map} from 'rxjs/operators';
require = require("esm")(module/* , options */)
module.exports = require("./main.js")

of(0,1,2,3,4,5,6,7,8,9).pipe(map(
    n => n % 2 !=0 ? n:null),
    filter(n => n!== null)
    ).subscribe(n => console.log(n));