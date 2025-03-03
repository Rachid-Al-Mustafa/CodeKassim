import orderBy from "lodash/orderBy";
import toLower from "lodash/toLower";


import { SORT_ORDER } from "../modals/sort.model";
import NumberUtil from "./number.util";
export default class ArrayUtil {
  public static countDuplicates(arry: string[]) {
    try {
      const results = {} as { [key: string]: number };
      arry?.forEach((item) => {
        if (!item) return;
        results[item] = (results[item] ?? 0) + 1;
      });
      return results;
    } catch (error) {
      return [];
    }
  }

  public static addRouteIfTrue<T>(condition: boolean, item: T) {
    return condition ? item : {};
  }

  public static addIfTrue<T>(condition: boolean, item: T) {
    return condition ? [item] : [];
  }

  public static generateMap<T>(
    arry: T[] | undefined,
    key: string
  ): { [key: string]: T } {
    try {
      return (
        arry?.reduce((acc: { [key: string]: T }, item) => {
          return {
            ...acc,
            //@ts-ignore
            [item?.[key]]: item,
          };
        }, {}) ?? {}
      );
    } catch (error) {
      return {};
    }
  }

  public static generateMultiMap<T>(
    arry: any[],
    key: string
  ): { [key: string]: T[] } {
    try {
      return (
        arry?.reduce((acc: { [key: string]: T[] }, item) => {
          const accKey = item?.[key];

          if (acc?.[accKey]) {
            return {
              ...acc,
              [accKey]: [...acc?.[accKey], item],
            };
          }

          return {
            ...acc,
            [accKey]: [item],
          };
        }, {}) || []
      );
    } catch (error) {
      return {};
    }
  }

  public static filterByDate(arry: any[], id: string, dateRange: any) {
    try {
      return dateRange
        ? arry?.filter((r) => {
            try {
              const date = r?.[id];
              if (!date) return false;
              return (
                new Date(date) >= new Date(dateRange?.from) &&
                new Date(date) <= new Date(dateRange?.to)
              );
            } catch {
              return false;
            }
          })
        : arry;
    } catch (error) {
      return [];
    }
  }

  public static roundProperties<T>(
    array: Array<T>,
    propertiesToRound: string[]
  ) {
    try {
      //@ts-ignore
      return array.map((item) =>
        //@ts-ignore
        Object.entries(item).reduce((acc: T, [k, v]) => {
          if (propertiesToRound.includes(k)) {
            return {
              ...acc,
              //@ts-ignore
              [k]: NumberUtil.roundNumber(v),
            };
          }
          return { ...acc, [k]: v };
        }, {})
      ) as Array<T>;
    } catch (error) {
      return [] as Array<T>;
    }
  }

  public static sortByTime<T>({
    arry,
    timeKey = "time",
    order = SORT_ORDER.ASCENDING,
  }: {
    arry: Array<any>;
    timeKey?: string;
    order?: SORT_ORDER | undefined;
  }) {
    //@ts-ignore
    return orderBy<T>(arry, (item) => new Date(item?.[timeKey]), [order]);
  }

  public static filterData(data: any[], searchTerm: string | undefined) {
    if (!searchTerm) {
      return data;
    }
    const filteredData = data.filter((row) =>
      Object.values(row).find(
        (str) => !!str && toLower(String(str)).includes(toLower(searchTerm))
      )
    );
    return filteredData;
  }
}
