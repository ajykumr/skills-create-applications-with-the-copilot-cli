#!/usr/bin/env node
/**
 * calculator.js
 *
 * Supported operations:
 * - addition
 * - subtraction
 * - multiplication
 * - division
 *
 * Exports: add, subtract, multiply, divide
 * When run as a script, usage: node src/calculator.js <operation> <a> <b>
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

// Export functions for programmatic use
module.exports = {
  add,
  subtract,
  multiply,
  divide,
};

// CLI entrypoint
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 3) {
    console.error('Usage: node src/calculator.js <operation> <a> <b>');
    console.error('Supported operations: add, subtract, multiply, divide');
    process.exit(1);
  }

  const op = args[0].toLowerCase();
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
      default:
        console.error('Unknown operation:', op);
        console.error('Supported operations: add, subtract, multiply, divide');
        process.exit(1);
    }

    // Print result to stdout
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}
