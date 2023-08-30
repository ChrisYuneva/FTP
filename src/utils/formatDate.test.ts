import { formatDate } from "./formatDate";

describe('formatDate', () => {
    it('should return a formatted date string for a valid input date string', () => {
        const result = formatDate('2022-01-01');
        expect(result).toBe('01.01.2022');
    });

    it('should return a formatted date string for a valid input date string with time', () => {
        const result = formatDate('2022-01-01T12:00:00');
        expect(result).toBe('01.01.2022');
    });

    it('should return a formatted date string for a valid input date string with timezone', () => {
        const result = formatDate('2022-01-01T12:00:00+03:00');
        expect(result).toBe('01.01.2022');
    });

    it('should return invalid date for an invalid input date string', () => {
        const result = formatDate('invalid');
        expect(result).toBe('Invalid Date');
    });
});
