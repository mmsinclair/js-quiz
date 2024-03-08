# Javascript Quiz

Thanks for looking at this repo! Please answer the following questions:

## 1. Write a short description of why you see different output on each run?

Please clone this repo and run `npm run start`:

```
npm run start 

> quiz@1.0.0 start

...

✅✅✅ Hello, my name is Timmy

...

🚀🚀🚀 Hello, my name is Sally
```

I'm interested in a good explanation about why NodeJS is handling the `some-package` differently in each execution of `some-app`.

And for bonus points, give some examples where this behaviour is useful and where is can be unexpected / harmful.

And for even more bonus points, how can a package manager like `npm` or `pnpm` achieve the same behaviour?

## 2. Explain the differences between these 4 packages and when you would use each one and why?

- https://www.npmjs.com/package/@nymproject/sdk
- https://www.npmjs.com/package/@nymproject/sdk-full-fat
- https://www.npmjs.com/package/@nymproject/sdk-commonjs
- https://www.npmjs.com/package/@nymproject/sdk-commonjs-full-fat

Each of these packages is useful in a different situation. Please explain when you would use each of them and why.

And for bonus points, why would you need to use https://www.npmjs.com/package/@nymproject/sdk-nodejs and when wouldn't you use it and why?

## 3. For the packages above, explain how CSPs could cause errors?

Look at the packages above and explain when the following CSPs would cause errors and why:

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_eval_expressions
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#unsafe_webassembly_execution

And for bonus points, when would you be likely to encounter these CSP errors when using Nym's SDK packages?

## 4. Describe when you would use each of the bundlers below and why?

- https://esbuild.github.io/
- https://www.snowpack.dev/
- https://webpack.js.org/
- https://parceljs.org/

I'm interested when it is best to use each of the bundlers above and why. In particular, I'd like to know how each
bundler handles Web Workers and WASM, with reference to the Nym packages above.

## 5. Explain why the Web Transport API is interesting?

In the context of the packages below, why is the [Web Transport API](https://developer.mozilla.org/en-US/docs/Web/API/WebTransport) interesting?

- https://www.npmjs.com/package/@nymproject/sdk
- https://www.npmjs.com/package/@nymproject/mix-fetch

