export const getRouteErrorMessage = (error: unknown) => {
  if (error instanceof Object) {
    if ("message" in error && typeof error.message === "string") {
      return error.message;
    }

    if ("statusText" in error && typeof error.statusText === "string") {
      return error.statusText;
    }
  }

  if (typeof error === "string") {
    return error;
  }

  return null;
};
