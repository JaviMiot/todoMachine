import React, { useState, useEffect } from 'react';

type useLocalStorageArrayReturn<T> = {
  item: T[];
  setItem: React.Dispatch<React.SetStateAction<T[]>>;
  sincronizeItem: () => void;
};

export function useLocalStorageArray<T>(
  localStorageItem: string,
  initValue: T[]
): useLocalStorageArrayReturn<T> {
  const localStorageTodo = localStorage.getItem(localStorageItem);
  const [sincronizeItems, setSincronizeItems] = useState(true);
  let parsedItem;

  if (localStorageTodo) {
    parsedItem = JSON.parse(localStorageTodo);
  } else {
    localStorage.setItem(localStorageItem, JSON.stringify([]));
    parsedItem = initValue;
  }
  const [item, setItem] = useState<Array<T>>(parsedItem);

  useEffect(() => {
    localStorage.setItem(localStorageItem, JSON.stringify(item));
  }, [sincronizeItems, item]);

  const sincronizeItem = () => {
    setSincronizeItems(false);
  };

  return { item, setItem, sincronizeItem };
}
