# Wastime Rust Demo
> A simple Rust project demonstrating how to use Wastime to run WebAssembly modules.

### Installation
How to install Rust and Cargo

##### 1. Install Rust and Cargo

First you need to install Rust and Cargo. You can find instructions on the [official Rust website](https://www.rust-lang.org/tools/install).

```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

##### 2. Build WASM module
run the following command to build the WASM module:

```bash
rustup target add wasm32-wasip2
rustc main.rs --target wasm32-wasip2
```

Now you have a `main.wasm` file in your project directory.

##### 3. Install the Wastime cli
To run the Wastime Rust Demo, first install the Wastime CLI

```bash
curl https://wasmtime.dev/install.sh -sSf | bash
```

##### 4. Run the WASM module
To run the WASM module, use the following command:
```bash
wasmtime main.wasm
```
