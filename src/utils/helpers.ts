// console log for functions
export const logger = (message: any) => {
  if (process.env.NEXT_PUBLIC_ENV !== "production") console.log(message);
};
