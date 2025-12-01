export default [
    {
        rules: {
            indent: ["error", 4],
            semi: ["error"],
            "operator-assignment": "error",
            "no-inner-declarations": [
                "error",
                "functions",
                { blockScopedFunctions: "disallow" },
            ],
        },
    },
];
