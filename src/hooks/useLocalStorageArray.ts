import React, { useState, useEffect } from 'react';

type useLocalStorageArrayReturn<T> = {
  items: T[];
  saveItems: (items: T[]) => void;
  syncronize: () => void;
};

export function useLocalStorageArray<T>(
  localStorageItem: string,
  initValue: T[]
): useLocalStorageArrayReturn<T> {
  const [sincronizeItems, setSincronizeItems] = useState(true);
  const [items, setItems] = useState<Array<T>>(initValue);

  useEffect(() => {
    const localStorageItems = localStorage.getItem(localStorageItem);
    let parsedItem;

    if (localStorageItems) {
      parsedItem = JSON.parse(localStorageItems);
    } else {
      localStorage.setItem(localStorageItem, JSON.stringify([]));
      parsedItem = initValue;
    }
    setItems(parsedItem);
  }, [sincronizeItems]);

  const saveItems = (items: T[]) => {
    localStorage.setItem(localStorageItem, JSON.stringify(items));
    setItems(items);
  };

  const syncronize = () => {
    setSincronizeItems((sincronizeItems) => !sincronizeItems);
  };

  return { items, saveItems, syncronize };
}
