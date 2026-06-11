#!/usr/bin/env node
/**
 * calculator.js
 *
 * Supported operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 * - modulo
 * - power (exponentiation)
 * - square root
 *
 * Exports: add, subtract, multiply, divide, modulo, power, squareRoot
 * CLI usage:
 *  node src/calculator.js add 2 3
 *  node src/calculator.js subtract 5 2
 *  node src/calculator.js multiply 4 6
 *  node src/calculator.js divide 10 2
 *  node src/calculator.js mod 10 3
 *  node src/calculator.js pow 2 3
 *  node src/calculator.js sqrt 9
 */

// Arithmetic operation implementations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

// Export functions for programmatic use
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
};

// CLI entrypoint
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Usage: node src/calculator.js <operation> <a> <b?>');
    console.error('Supported operations: add, subtract, multiply, divide, mod, pow, sqrt');
    process.exit(1);
  }

  const op = args[0].toLowerCase();

  // unary operation: sqrt
  if (op === 'sqrt' || op === 'root') {
    if (args.length < 2) {
      console.error('Usage: node src/calculator.js sqrt <n>');
      process.exit(1);
    }
    const n = Number(args[1]);
    if (!Number.isFinite(n)) {
      console.error('Error: operand must be a number');
      process.exit(1);
    }
    try {
      console.log(squareRoot(n));
    } catch (err) {
      console.error('Error:', err.message);
      process.exit(1);
    }
    process.exit(0);
  }

  // binary operations
  if (args.length < 3) {
    console.error('Usage: node src/calculator.js <operation> <a> <b>');
    console.error('Supported binary operations: add, subtract, multiply, divide, mod, pow');
    process.exit(1);
  }

  const a = Number(args[1]);
  const b = Number(args[2]);

  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    console.error('Error: operands must be numbers');
    process.exit(1);
  }

  try {
    let result;
    switch (op) {
      case 'add':
      case '+':
      case 'plus':
        result = add(a, b);
        break;
      case 'subtract':
      case '-':
      case 'minus':
        result = subtract(a, b);
        break;
      case 'multiply':
      case 'mul':
      case '*':
      case 'x':
      case 'times':
        result = multiply(a, b);
        break;
      case 'divide':
      case 'div':
      case '/':
        if (b === 0) {
          console.error('Error: division by zero');
          process.exit(2);
        }
        result = divide(a, b);
        break;
      case 'mod':
      case '%':
      case 'modulo':
        if (b === 0) {
          console.error('Error: modulo by zero');
          process.exit(2);
        }
        result = modulo(a, b);
        break;
      case 'power':
      case 'pow':
      case '^':
        result = power(a, b);
        break;
      default:
        console.error('Unknown operation:', op);
        console.error('Supported operations: add, subtract, multiply, divide, mod, pow, sqrt');
        process.exit(1);
    }

    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}
