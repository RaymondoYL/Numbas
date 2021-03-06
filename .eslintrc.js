module.exports = {
    "env": {
        "browser": true
    },
    "parserOptions": {
        "ecmaVersion": 5
    },
    "rules": {
        "linebreak-style": [
            "error",
            "unix"
        ],
        "valid-jsdoc": [
            "error",
            {
                "requireReturnDescription": false, 
                "requireParamDescription": false,
                "requireReturn": false,
                "preferType": {
                    "object": "Object",
                    "function": "Function",
                    "number": "Number",
                    "boolean": "Boolean",
                    "string": "String"
                }
            }
        ],
        "require-jsdoc": [
            "error",
            {
                "require": {
                    "FunctionDeclaration": true,
                    "MethodDefinition": true,
                    "ClassDeclaration": true,
                    "FunctionExpression": false
                }
            }
        ]
    }
};
