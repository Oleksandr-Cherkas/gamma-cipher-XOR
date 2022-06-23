function encrypt(key, data) {
  const full_text = data.split('')
  .map((c, x) => c.charCodeAt(0) ^ key[x % key.length].charCodeAt(0))
  .map((c) => String.fromCharCode(c))
  .join('');
  return btoa(full_text);
}

function decrypt(key, data) {
  const full_text = atob(data);
  return full_text.split('')
    .map((c, x) => c.charCodeAt(0) ^ key[x % key.length].charCodeAt(0))
    .map((c) => String.fromCharCode(c))
    .join('');
}

const Cipher = document.getElementById('Cipher');
const deCipher = document.getElementById('deCipher');
const text = document.getElementById('text');
const clave = document.getElementById('clave');
const output = document.getElementById('output');

Cipher.addEventListener('click', () => {
  const data = text.value;
  const key = clave.value || ' '.repeat(data.length);

  const full_text = encrypt(key, data);
  output.value = full_text;
});

desCipher.addEventListener('click', () => {
  const data = text.value;
  const key = clave.value || ' '.repeat(data.length);

  const full_text = decrypt(key, data);
  output.value = full_text;
});
