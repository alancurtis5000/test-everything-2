export const incrementCount = (currentCount, margin) => {
  return { count: currentCount + margin };
};

export const decrementCount = (currentCount, margin) => {
  return { count: currentCount - margin };
};
