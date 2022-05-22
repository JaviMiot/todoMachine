import React, { useState, useEffect } from 'react';

export function useLocalStorageArray<T>(
  localStorageItem: string,
  initValue: T[]
): [T[], React.Dispatch<React.SetStateAction<T[]>>] {
  const localStorageTodo = localStorage.getItem(localStorageItem);
  const [item, setItem] = useState<Array<T>>(initValue);

  let parsedItem;

  if (localStorageTodo) {
    parsedItem = JSON.parse(localStorageTodo);
  } else {
    localStorage.setItem(localStorageItem, JSON.stringify([]));
    parsedItem = initValue;
  }

  useEffect(() => {
    localStorage.setItem(localStorageItem, JSON.stringify(item));
  }, [item]);

  return [item, setItem];
}
