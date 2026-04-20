```bash
source ~/emsdk/emsdk_env.sh
```

```bash
emcc -v
```

```bash
rustup target add wasm32-unknown-emscripten
```

```bash
rustc hello.rs --target wasm32-unknown-emscripten
```

```bash
emcc hello.c -o hello.html
```

```bash
bunx serve
```
