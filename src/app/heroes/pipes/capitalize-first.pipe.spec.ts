import { CapitalizeFirstPipe } from './capitalize-first.pipe';

describe('CapitalizeFirstPipe', () => {
  let pipe: CapitalizeFirstPipe;

  beforeEach(() => {
    pipe = new CapitalizeFirstPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the first letter of a single word', () => {
    const result = pipe.transform('angular');
    expect(result).toBe('Angular');
  });

  it('should capitalize the first letter of a sentence', () => {
    const result = pipe.transform('angular is awesome');
    expect(result).toBe('Angular is awesome');
  });

  it('should not change the rest of the string', () => {
    const result = pipe.transform('aNGULAR');
    expect(result).toBe('ANGULAR');
  });

  it('should return the same string if the first letter is already capitalized', () => {
    const result = pipe.transform('Angular');
    expect(result).toBe('Angular');
  });

  it('should handle an empty string', () => {
    const result = pipe.transform('');
    expect(result).toBe('');
  });

  it('should handle an undefined value', () => {
    const result = pipe.transform(undefined);
    expect(result).toBe(undefined);
  });

  it('should handle strings with special characters', () => {
    const result = pipe.transform('@ngular');
    expect(result).toBe('@ngular');
  });

  it('should handle strings with leading whitespace', () => {
    const result = pipe.transform('  angular');
    expect(result).toBe('  angular');
  });

  it('should handle strings with non-alphabetic first characters', () => {
    const result = pipe.transform('1angular');
    expect(result).toBe('1angular');
  });
});