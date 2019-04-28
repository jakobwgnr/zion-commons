import { fscheck } from '../zion-commons';

import * as path from 'path';

test('fscheck.isDirectory work expected', () => {
  expect(fscheck.isDirectory(path.join(__dirname, '../__tests__'))).toBeTruthy();
  expect(fscheck.isDirectory(path.join(__dirname, './no/such/dir'))).toBeFalsy();
});

test('fscheck.isFile work expected', () => {
  expect(fscheck.isFile(path.join(__dirname, '../zion-commons.ts'))).toBeTruthy();
  expect(fscheck.isDirectory(path.join(__dirname, './no/such/file.ts'))).toBeFalsy();
});

test('fscheck.codeFromPath work expected', () => {
  expect(fscheck.codeFromPath('./dev/src/__tests__/testfiles/comment.cbl')).toBeDefined();
  expect(fscheck.codeFromPath(path.join(__dirname, '../__tests__/testfiles/comment.cbl'))).toBeDefined();
  expect(() => fscheck.codeFromPath(path.join(__dirname, './no/such/file.ts'))).toThrowError(Error);
});
