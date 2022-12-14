# Caesar Cipher
Caesar Cipher Encryptor &amp; Decryptor with right shift as default.
You can set right shift from 1 to 100.

>Disclaimer:
>I do not claim this idea because this idea originally was from julius caesar.
>I just made it into computer program so it'll be reusable and eficient.

`I didnt publish it to npm yet`

### Usage
Here is the usage example

**Encryption**
```typescript
const Encrypt = require("./src/caesarEncrypt.ts");
const message = "Hi, my name is julius caesar";

const encrypted = Encrypt({
    text: message,
    shiftAmount: 17
});

// Result
// {
//  shift_right: 17,
//  time: '0ms',
//  result: 'yz, 4f 5r4v z0 1b3zb0 trv0r9'
// }
```

**Decryption**
```typescript
const Decrypt = require("./src/caesarDecrypt.ts");
const message = "yz, 4f 5r4v z0 1b3zb0 trv0r9";

const decrypted = Decrypt({
    text: message,
    shiftAmount: 17
});

// Result
// {
//  shift_right: 17,
//  time: '0ms',
//  result: 'Hi, my name is julius caesar'
// }
```

### Tech Stack:
<div style="display: flex;">
  <img src="https://svgshare.com/i/iKF.svg" alt="Node JS" height="36px" >
</div>
