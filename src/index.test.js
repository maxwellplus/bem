import bem from "./"

test('handles simple bem', () => {
  const b = bem("Test");
  expect(b()).toEqual("Test");
});

test('handles simple string', () => {
  const b = bem("Test");
  expect(b("&")).toEqual("Test");
});

test('handles multiple arguments', () => {
  const b = bem("Test");
  expect(b("&", "&--help")).toEqual("Test Test--help");
});

test('handles object', () => {
  const b = bem("Test");
  expect(b("&", {
    "&--fiz": true,
    "&--buzz": false
  })).toEqual("Test Test--fiz");
});

test('handles arrays', () => {
  const b = bem("Test");
  expect(b(["&", "random"], ["&--other"])).toEqual("Test random Test--other");
})
