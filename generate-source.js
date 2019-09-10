

module.exports = function(variables) {
    return  variables.map(variable =>
        `window['${variable}'] = ${variable};`
    ).join('\n');
}