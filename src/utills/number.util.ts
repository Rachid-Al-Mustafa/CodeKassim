import isNil from "lodash/isNil";

export default class NumberUtil {
  /**
   * Rounds a number to two decimal places.
   * @param number The number to round (nullable).
   * @returns Rounded number or original value if null/undefined.
   */
  public static roundNumber(number: number | undefined | null): number | null | undefined {
    if (isNil(number)) return number;
    return Math.round(number * 100) / 100;
  }

  /**
   * Converts a number to a string safely.
   * @param num The number to convert (nullable).
   * @returns String representation or undefined.
   */
  public static numberToString(num: number | null | undefined): string | undefined {
    return num != null ? String(num) : undefined;
  }

  /**
   * Converts a number to a corresponding uppercase letter.
   * Example: 0 -> 'A', 1 -> 'B', 2 -> 'C', ...
   * @param number The number to convert (nullable).
   * @returns Uppercase letter or empty string if invalid.
   */
  public static numberToLetter(number: number | null | undefined): string {
    return typeof number === "number" ? String.fromCharCode(97 + number).toUpperCase() : "";
  }
}
