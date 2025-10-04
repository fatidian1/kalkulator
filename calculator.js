const calculator = (input) => {
    const clearInput = input.replace(/\s/g, '');
    const clearA = (a) => {
        const arr = a.split(/[*\/+\-]/g);
        const value = arr[arr.length - 1];
        return {
            value,
            rest: a.substring(0, a.length - value.length)
        };
    }
    const clearB = (b) => {
        const arr = b.split(/[*\/+\-]/g);
        const value = arr[0];
        return {
            value,
            rest: b.substring(value.length)
        };
    }
    const operations = {
        '**': (a, b) => {
            const cA = clearA(a);
            const cB = clearB(b);
            return (cA.rest ?? '') + (Number(cA.value) ** Number(cB.value)) + (cB.rest ?? '')
        },
        '*': (a, b) => {
            const cA = clearA(a);
            const cB = clearB(b);
            return (cA.rest ?? '') + (Number(cA.value) * Number(cB.value)) + (cB.rest ?? '')
        },
        '/': (a, b) => {
            const cA = clearA(a);
            const cB = clearB(b);
            return (cA.rest ?? '') + (Number(cA.value) / Number(cB.value)) + (cB.rest ?? '')
        },
        '+': (a, b) => {
            const cA = clearA(a);
            const cB = clearB(b);
            return (cA.rest ?? '') + (Number(cA.value) + Number(cB.value)) + (cB.rest ?? '')
        },
        '-': (a, b) => {
            const cA = clearA(a);
            const cB = clearB(b);
            return (cA.rest ?? '') + (Number(cA.value) - Number(cB.value)) + (cB.rest ?? '')
        },
    }
    const doMath = (mathInput, operators, index = 0) => {
        if (index >= operators.length) {
            return mathInput;
        }
        const operator = operators[index];
        let parts = (mathInput + '').split(operator);
        if (operators.length - 1 > index) {
            parts = parts.map(part => {
                const nextOperator = operators[index + 1];
                if (part.includes(nextOperator)) {
                    return doMath(part, operators, index + 1);
                }
                return part;
            })
        }
        if (parts.length === 1) {
            return parts[0];
        }
        return parts.slice(1).reduce(operations[operator], parts[0]);
    }
    const result0 = doMath(clearInput, ['**']);
    const result1 = doMath(result0, ['*', '/']);
    const result2 = doMath(result1, ['+', '-']);
    return result2;
}
module.exports = {calculator};
