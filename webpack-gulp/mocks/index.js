/**
 * @Author: Jecyu
 * @Date: 2017-11-14 3:21:40 pm 
 * @Modified By: JeCyu 
 * @Last Modified time: 2017-11-14 3:24:04 pm 
 */

/**
 * [mocks]
 * @param {[type]} app [description]
 * @return {[type]} [description]
 */
module.exports = function(app) {
    app.get('rest', function(req, content, callback) {
        setTimeout(function() {
            callback(null, {
                a: 1,
                b: 2
            })
        }, 500);
    })
}