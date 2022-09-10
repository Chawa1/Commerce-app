//delimeter is a arrow function that we can access more than two data or info
export const delimiter = (text, limit) => {
    if (text.length <= limit) return text;
  
    return `${text.substr(0, limit)}...`;
  };