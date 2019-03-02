# Fun Encrypt
A simple yet fun encryption with JS

## Example
| Message | Key |
| --- | --- |
| FANNYHASBI | FUN |

Encrypted message would be : **MCwyMCwwLDgsMTIsNiw3LDYsMTIsMTU=**

## Formula
For the encryption, I make a simple formula :
```
m = each character of message
k = each character of key

secret = base64(m XOR k)
```

## Installation
1. Clone it
   ```
   git clone https://github.com/fannyhasbi/fun-encrypt
   ```

2. Install required packages
   ```
   npm install
   ```

3. Run it
   ```
   node encrypt.js
   ```

   > Feel free to change the `MESSAGE` and `KEY` constant to your own value