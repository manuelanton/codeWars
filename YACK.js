function yack(fn, ...args) {
  if (fn.length <= args.length) {
    return fn(...args);
  }
  return function(...more) {
    return yack(fn, ...args, ...more);
  };
}
