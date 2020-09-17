import PropTypes from "prop-types"
import React, {
    Component,
    lazy,
    Suspense
} from 'react';
function Ajax(url, functions)
{

    return new Promise(function (resolve)
    {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.send();

        xhr.onreadystatechange = function ()
        {
            if (xhr.readyState === 4 && xhr.status === 200)
            {
                var get = JSON.parse(xhr.responseText);
                functions(get)
                resolve(result.total_count);
            }
        }
    });

}
export default Ajax;